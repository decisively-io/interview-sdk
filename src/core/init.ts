import { AttributeData, AttributeValue, Control, ResponseData, Screen, Session, StepId } from "@decisively-io/types-interview";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestTransformer } from "axios";
import produce from "immer";
import debounce from "lodash.debounce";
import isEmpty from "lodash.isempty";
import isEqual from "lodash.isequal";
import { v4 as uuid } from "uuid";
import { back, create, exportTimeline, load, navigate, submit } from "./api";
import { ControlTypesInfo } from "./constants";
import { DynamicReplacementQueries, buildDynamicReplacementQueries, simulateUnknowns } from "./dynamic";
import { replaceTemplatedText } from "./helpers";
import { Overrides, SessionConfig } from "./types";
import { buildUrl, iterateControls, range } from "./util";

export const createApiInstance = (baseURL: string, overrides: AxiosRequestConfig = {}) => {
  const { transformRequest = [] } = overrides;
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { "Content-Type": "application/json" },
    transformRequest: [...(transformRequest as AxiosRequestTransformer[]), ...(axios.defaults.transformRequest as AxiosRequestTransformer[])],
    ...overrides,
  });
};

const transformControlValue = (value: AttributeValue, control: Control): any => {
  switch (control.type) {
    case ControlTypesInfo.NUMBER_OF_INSTANCES.id:
      return range(Number(value)).map((i) => ({ "@id": uuid() }));
    case ControlTypesInfo.ENTITY.id:
      return value;
    default:
      return value;
  }
};

export const transformResponse = (session: Session, data: ResponseData): ResponseData => {
  return produce(data, (draft) => {
    if (session.data["@parent"]) {
      draft["@parent"] = session.data["@parent"];
    }

    for (const id of Object.keys(draft)) {
      const control = (session.screen.controls as any[]).find((c) => c.attribute === id || c.entity === id);
      if (control) {
        draft[id] = transformControlValue(draft[id], control as Control);
      }
    }
  });
};

export const defaultPath = ["decisionapi", "session"];

type NewDataCallback = ((data: any) => void) | undefined;

export interface InterviewProvider {
  // create a SessionInstance to work with by calling on the decisively service
  create: (project: string, config: SessionConfig, newDataCallback?: NewDataCallback) => Promise<SessionInstance>;
  load: (project: string, sessionId: string) => Promise<SessionInstance>;
  finish: () => void;
}

interface SessionInstanceOptions {
  session: Session;
  api: AxiosInstance;
  project: string;
  release?: string;
  newDataCallback?: (session: SessionObservable) => void;
  responseElements?: any[];
}

interface SessionInternal {
  userData: AttributeData;
  prevUserData: AttributeData;

  replacements: AttributeData;
  replacementQueries: DynamicReplacementQueries | undefined;

  // we only care about the latest request
  latestRequest: number | undefined;
}

const postProcessControl = (control: any, replacements: any) => {
  if (control.templateText) {
    control.text = replaceTemplatedText(control.templateText, replacements);
  }
  if (control.templateLabel) {
    control.label = replaceTemplatedText(control.templateLabel, replacements);
  }
  if (control.type === "switch_container" && control.kind === "dynamic" && control.attribute) {
    control.branch = replacements[control.attribute] ? "true" : "false";
    console.log(control.branch);
  }
};

export class SessionInstance implements Session {
  renderAt: number = Date.now();
  externalLoading = false;

  private session!: Session;
  private options: Omit<SessionInstanceOptions, "session">;
  private processedScreen: Screen | undefined;
  private internals: SessionInternal = {
    userData: {},
    prevUserData: {},
    replacements: {},
    replacementQueries: undefined,
    latestRequest: undefined,
  };

  constructor(options: SessionInstanceOptions) {
    const { session, ...otherOptions } = options;
    // @ts-ignore
    this.updateDynamicValues = debounce(this.updateDynamicValues.bind(this), 1000);
    this.options = otherOptions;
    this.updateSession(session);

    this.chOnScreenData = this.chOnScreenData.bind(this);
  }

  private get api() {
    return this.options.api;
  }

  private get release() {
    return this.options.release;
  }

  private get project() {
    return this.options.project;
  }

  private triggerUpdate(update: Partial<{ externalLoading: boolean; screen: Screen }>) {
    const { externalLoading, screen } = update;

    const updated = this.externalLoading !== externalLoading || !isEqual(this.processedScreen, screen);
    if (updated) {
      this.externalLoading = externalLoading ?? false;
      this.processedScreen = screen ?? this.processedScreen;
      this.renderAt = Date.now();

      this.options.newDataCallback?.(update);
    }
  }

  chOnScreenData(data: AttributeData) {
    Object.assign(this.internals.userData, data);
    this.calculateUnknowns();
    this.updateDynamicValues();
  }

  private calculateUnknowns() {
    const { state } = this.session;

    const screen = this.screen;

    if (state && screen) {
      if (!isEqual(this.internals.prevUserData, this.internals.userData) && Object.keys(this.internals.userData).length > 0) {
        this.internals.replacementQueries = buildDynamicReplacementQueries(state, this.internals.userData, true);
        if (this.internals.replacementQueries.unknownValues.length || Object.keys(this.internals.replacementQueries.knownValues).length > 0) {
          Object.assign(this.internals.replacements, this.internals.replacementQueries?.knownValues);
          console.log(this.internals);
          const loading = this.internals.replacementQueries.unknownValues.length > 0;

          const newScreen = produce(screen, (draft) => {
            iterateControls(draft.controls, (control: any) => {
              if (control.dynamicAttributes && this.internals.replacementQueries?.unknownValues.length) {
                if (this.internals.replacementQueries?.unknownValues.some((dep) => control.dynamicAttributes.includes(dep.goal))) {
                  control.loading = true;
                }
              }
              if (!control.loading) {
                postProcessControl(control, this.internals.replacements);
              }
            });
          });

          if (loading) {
            this.internals.latestRequest = Date.now();
          }

          this.triggerUpdate({
            externalLoading: this.externalLoading || loading,
            screen: newScreen,
          });
        }
      }
    }
    this.internals.prevUserData = { ...this.internals.userData };
  }

  private async updateDynamicValues() {
    if (this.release) {
      if (this.internals.replacementQueries?.unknownValues?.length && this.session.screen) {
        const requestId = this.internals.latestRequest;

        const replacedSession = await produce<SessionObservable>(this.session, async (draft) => {
          const { screen } = draft;

          // ask the backend to solve for any dynamic attributes, based on the entered attributes
          Object.assign(this.internals.replacements, await simulateUnknowns(this.internals.replacementQueries!.unknownValues, this.api, this.project, this.release!, this.sessionId));

          // replace anything replaceable on the screen
          iterateControls(screen!.controls, (control: any) => {
            if (control.loading) {
              control.loading = undefined;
            }

            postProcessControl(control, this.internals.replacements);
          });
        });

        // are we still the last request?
        if (this.internals.latestRequest === requestId) {
          if (replacedSession.screen) {
            this.triggerUpdate({
              externalLoading: false,
              screen: replacedSession.screen,
            });
          } else {
            this.triggerUpdate({ externalLoading: false });
          }
        }
      }
    }
  }

  private updateSession(session: Session) {
    const prevSession = this.session;
    const currentRenderAt = this.renderAt;
    this.session = session;
    if (!isEmpty(session.screen)) {
      if (prevSession?.screen?.id !== session.screen?.id) {
        this.internals = {
          userData: {},
          prevUserData: {},
          replacements: {},
          replacementQueries: undefined,
          latestRequest: undefined,
        };
      }

      this.processedScreen = produce(session.screen as Screen, (draft) => {
        iterateControls(draft.controls, (control: any) => {
          postProcessControl(control, this.internals.replacements);
        });
      });

      this.calculateUnknowns();
      this.updateDynamicValues();
      // @ts-ignore
      this.updateDynamicValues.flush();
    }

    // hasn't updated, force it
    if (currentRenderAt === this.renderAt) {
      this.triggerUpdate({
        screen: session.screen,
      });
    }
  }

  // -- session getters

  get status() {
    return this.session.status;
  }

  get sessionId() {
    return this.session.sessionId;
  }

  get screen() {
    return this.processedScreen ?? this.session.screen;
  }

  get state() {
    return this.session.state;
  }

  get context() {
    return this.session.context;
  }

  get data() {
    return this.session.data;
  }

  get steps() {
    return this.session.steps;
  }

  get progress() {
    return this.session.progress;
  }

  get explanations() {
    return this.session.explanations;
  }

  get graph() {
    return (this.session as any).graph;
  }

  set graph(graph) {
    (this.session as any).graph = graph;
  }

  get reporting() {
    return (this.session as any).reporting;
  }

  get report() {
    return (this.session as any).report;
  }

  // -- methods

  async submit(data: AttributeData, navigate?: any, overrides: Overrides = {}) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(
      await submit(this.api, this.project, this.sessionId, transformResponse(this, data as any), navigate, {
        response: this.options.responseElements,
        ...overrides,
      }),
    );
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async save(data: AttributeData) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(
      await submit(this.api, this.project, this.sessionId, transformResponse(this, data as any), false, {
        response: this.options.responseElements,
      }),
    );
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async navigate(step: StepId) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(await navigate(this.api, this.project, this.sessionId, step));
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async back() {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(await back(this.api, this.project, this.sessionId));
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  exportTimeline() {
    return exportTimeline(this.api, this.project, this.sessionId);
  }
}

export type SessionObservable = Partial<SessionInstance>;

/**
 * Initialize the SDK
 *
 * chOnScreenData  : Renderer -{updated attribute}-> SDK
 *    - (the function never moves, so we can safely give it to the renderer)
 * newDataCallback : SDK -{updated session}-> Renderer :
 *    - if using react, the renderer needs to be careful, because unless this function is within
 *      a HOC, it will be recreated every render, and the SDK will not be able to send updates
 */
export const init = (host: string, path: string | string[] = defaultPath, overrides: AxiosRequestConfig = {}): InterviewProvider => {
  // -- create the api instance
  const baseUrl = buildUrl(host, ...(typeof path === "string" ? [path] : path));
  const api = createApiInstance(baseUrl, overrides);

  // -- ret
  return {
    create: async (project, config, newDataCallback?) => {
      const session = await create(api, project, config);
      return new SessionInstance({ session: session, api, responseElements: config.responseElements, project, newDataCallback, ...config });
    },
    load: async (project, sessionId) => {
      const session = await load(api, project, sessionId);
      return new SessionInstance({ session, api, project });
    },
    finish: () => {},
  };
};
