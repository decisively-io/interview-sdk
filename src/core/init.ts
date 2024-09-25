import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosRequestTransformer } from "axios";
import debounce from "lodash.debounce";
import isEmpty from "lodash.isempty";
import isEqual from "lodash.isequal";
import { v4 as uuid } from "uuid";
import type {
  AttributeValues,
  ChatResponse,
  Overrides,
  RenderableEntityControl,
  ResponseData,
  Screen,
  Session,
  SessionConfig,
  Simulate,
  State,
  StepId,
} from "../types";
import { back, chat, create, exportTimeline, load, navigate, simulate, submit } from "./api";
import { type UnknownValues, buildDynamicReplacementQueries, simulateUnknowns } from "./dynamic";
import { replaceTemplatedText } from "./helpers";
import {
  applyInstancesToEntityControl,
  buildUrl,
  deriveDefaultControlsValue,
  flatten,
  getEntityIds,
  iterateControls,
  range,
} from "./util";

export const createApiInstance = (baseURL: string, overrides: AxiosRequestConfig = {}) => {
  const { transformRequest = [] } = overrides;
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { "Content-Type": "application/json" },
    transformRequest: [
      ...(transformRequest as AxiosRequestTransformer[]),
      ...(axios.defaults.transformRequest as AxiosRequestTransformer[]),
    ],
    ...overrides,
  });
};

const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const transformResponse = (session: Session, data: ResponseData): ResponseData => {
  const newData = deepClone(data);
  if (session.data["@parent"]) {
    newData["@parent"] = session.data["@parent"];
  }

  for (const control of session.screen.controls) {
    if (control.type === "number_of_instances") {
      const value = newData[control.entity];
      newData[control.entity] = range(Number(value)).map((i) => ({ "@id": uuid() }));
    }
  }
  return newData;
};

export const defaultPath = ["decisionapi", "session"];

type NewDataCallback = ((data: any) => void) | undefined;

export interface InterviewProvider {
  // create a SessionInstance to work with by calling on the decisively service
  create: (project: string, config: SessionConfig, newDataCallback?: NewDataCallback) => Promise<SessionInstance>;
  load: (project: string, sessionId: string, interactionId?: string) => Promise<SessionInstance>;
  finish: () => void;
}

interface SessionInstanceOptions {
  session: Session;
  api: AxiosInstance;
  project: string;
  release?: string;
  newDataCallback?: (session: SessionObservable) => void;
  responseElements?: any[];
  debug?: boolean;
}

interface SessionInternal {
  userValues: AttributeValues;
  prevUserValues: AttributeValues;

  replacements: AttributeValues;
  unknownsRequiringSimulate: UnknownValues;
  unknownsAlreadySimulated: UnknownValues;
  sidebarSimulate: Simulate | undefined;

  // we only care about the latest request
  latestRequest: number | undefined;
}

const postProcessControl = (
  control: any,
  replacements: any,
  state: State[] | undefined,
  locale: Session["locale"],
  debug?: boolean,
) => {
  if (control.templateText) {
    control.text = replaceTemplatedText(control.templateText, replacements, state, locale);
  }
  if (control.templateLabel) {
    control.label = replaceTemplatedText(control.templateLabel, replacements, state, locale);
  }
  if (control.type === "switch_container" && control.kind === "dynamic" && control.attribute) {
    const update = replacements[control.attribute];
    if (update !== undefined) {
      control.branch = update ? "true" : "false";
    }
  }
  if (control.type === "certainty_container") {
    const update = replacements[control.attribute];
    if (update !== undefined) {
      control.branch = replacements[control.attribute] === null ? "uncertain" : "certain";
    }
  }
};

export class SessionInstance implements Session {
  renderAt: number = Date.now();
  externalLoading = false;

  private session!: Session;
  private options: Omit<SessionInstanceOptions, "session">;
  private processedScreen: Screen | undefined;
  private internals: SessionInternal = {
    userValues: {},
    prevUserValues: {},
    replacements: {},
    unknownsRequiringSimulate: {},
    unknownsAlreadySimulated: {},
    latestRequest: undefined,
    sidebarSimulate: undefined,
  };
  private debug: boolean;

  constructor(options: SessionInstanceOptions) {
    const { session, debug, ...otherOptions } = options;
    // @ts-ignore
    this.updateDynamicValues = debounce(this.updateDynamicValues.bind(this), 1000);
    this.options = otherOptions;
    this.updateSession(session);
    this.debug = Boolean(debug);

    this.chOnScreenData = this.chOnScreenData.bind(this);
  }

  private get api() {
    return this.options.api;
  }

  get release() {
    return this.options.release;
  }

  get project() {
    return this.options.project;
  }

  get interactionId() {
    return this.session.interactionId;
  }

  private triggerUpdate(update: Partial<{ externalLoading: boolean; screen: Screen }>) {
    const { externalLoading, screen } = update;

    if (typeof externalLoading === "boolean") {
      this.externalLoading = externalLoading;
    }
    this.processedScreen = screen ?? this.processedScreen;
    this.renderAt = Date.now();

    if (this.debug) {
      console.log("[@decisively-io/interview-sdk] DEBUG: Triggering update", update);
    }

    this.options.newDataCallback?.(update);
  }

  /**
   * All entity controls have a template property but we need to actually duplicate it into an `instances` array
   * in order for dynamic text processing to work
   */
  private handleEntityInstances(data: any) {
    iterateControls(this.screen.controls, (control) => {
      if (control.type === "entity") {
        const entityControl = control as RenderableEntityControl;
        const entities = getEntityIds(entityControl.entity, data);
        applyInstancesToEntityControl(entityControl, entities);
      }
    });
  }

  chOnScreenData(data: AttributeValues) {
    if (this.debug) {
      console.log("[@decisively-io/interview-sdk] DEBUG: Value changed:", data);
    }
    Object.assign(this.internals.userValues, data);
    this.handleEntityInstances(this.internals.userValues);
    // call this first so the debounce doesn't fire during unknown calculation
    this.updateDynamicValues();
    this.calculateUnknowns();
  }

  private calculateUnknowns() {
    const { state } = this.session;

    if (state && this.screen) {
      if (this.debug) {
        console.log(
          "[@decisively-io/interview-sdk] DEBUG: Checking for changes:",
          this.internals.prevUserValues,
          this.internals.userValues,
        );
      }
      if (
        !isEqual(this.internals.prevUserValues, this.internals.userValues) &&
        Object.keys(this.internals.userValues).length > 0
      ) {
        const replacementQueries = buildDynamicReplacementQueries(
          state,
          this.screen.sidebars || undefined,
          this.internals.userValues,
          this.session.data["@parent"],
        );

        if (replacementQueries.unknownValues.length || Object.keys(replacementQueries.knownValues).length > 0) {
          Object.assign(this.internals.replacements, replacementQueries?.knownValues);

          for (const [key, value] of Object.entries(replacementQueries.unknownValues)) {
            if (value) {
              const alreadySimulated = this.internals.unknownsAlreadySimulated[key];
              if (alreadySimulated) {
                if (isEqual(alreadySimulated.data, value.data)) {
                  continue;
                }
              }
            }
            this.internals.unknownsRequiringSimulate[key] = value;
          }

          if (this.debug) {
            console.log(
              "[@decisively-io/interview-sdk] DEBUG: Calculated unknowns, output:",
              replacementQueries,
              this.internals.replacements,
              "input:",
              state,
              this.internals.userValues,
              this.session.data["@parent"],
            );
          }

          const loading = Object.keys(this.internals.unknownsRequiringSimulate).length > 0;

          const newScreen = this.makeScreenCopy();

          this.internals.sidebarSimulate = replacementQueries.sidebarSimulate;
          if (newScreen.sidebars) {
            for (const sidebar of newScreen.sidebars) {
              sidebar.loading = this.internals.sidebarSimulate?.sidebars?.some((other) => other.id === sidebar.id);
            }
          }

          iterateControls(newScreen.controls, (control: any) => {
            if (control.dynamicAttributes && Object.keys(this.internals.unknownsRequiringSimulate).length > 0) {
              if (
                control.dynamicAttributes.some((dynamic: string) => this.internals.unknownsRequiringSimulate[dynamic])
              ) {
                control.loading = true;
              }
            }
            if (!control.loading) {
              postProcessControl(control, this.internals.replacements, this.state, this.session.locale, this.debug);
            }
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
    this.internals.prevUserValues = { ...this.internals.userValues };
  }

  private makeScreenCopy() {
    return deepClone(this.processedScreen ? this.processedScreen : this.session.screen);
  }

  private async updateDynamicValues() {
    let newScreen: Screen | undefined = undefined;
    if (Object.keys(this.internals.unknownsRequiringSimulate).length > 0 && this.session.screen) {
      const requestId = this.internals.latestRequest;

      const result = await simulateUnknowns(Object.values(this.internals.unknownsRequiringSimulate), this.api, this);

      // are we still the last request?
      if (this.internals.latestRequest === requestId) {
        newScreen = this.makeScreenCopy();

        // ask the backend to solve for any dynamic attributes, based on the entered attributes
        Object.assign(this.internals.replacements, result);

        if (this.debug) {
          console.log(
            "[@decisively-io/interview-sdk] DEBUG: Got replacements",
            JSON.stringify(newScreen.controls, null, 2),
            this.internals.replacements,
          );
        }

        // replace anything replaceable on the screen
        if (newScreen?.controls) {
          iterateControls(newScreen.controls, (control: any) => {
            if (control.loading) {
              control.loading = undefined;
            }

            postProcessControl(control, this.internals.replacements, this.state, this.session.locale);
          });
        }

        this.internals.unknownsAlreadySimulated = { ...this.internals.unknownsRequiringSimulate };
        this.internals.unknownsRequiringSimulate = {};
      }
    }

    if (this.internals.sidebarSimulate) {
      const result = await simulate(this.api, this, this.internals.sidebarSimulate);
      if (Array.isArray(result.sidebars)) {
        for (const sidebar of result.sidebars) {
          if (!newScreen) {
            newScreen = this.makeScreenCopy();
          }

          const screenSidebar = newScreen.sidebars?.find((s) => s.id === sidebar.id);
          if (screenSidebar) {
            Object.assign(screenSidebar, sidebar);
            screenSidebar.loading = false;
          }
        }
      }
    }

    if (newScreen) {
      this.triggerUpdate({
        externalLoading: false,
        screen: newScreen,
      });
    }
  }

  private updateSession(session: Session) {
    const prevSession = this.session;
    const currentRenderAt = this.renderAt;
    this.session = session;
    if (!isEmpty(session.screen)) {
      const replacements: AttributeValues = {};
      if (session.state) {
        for (const stateObj of session.state) {
          if (replacements[stateObj.id] === undefined && stateObj.value) {
            replacements[stateObj.id] = stateObj.value;
          }
        }
      }
      if (prevSession?.screen?.id !== session.screen?.id) {
        const userValues = flatten(deriveDefaultControlsValue(session.screen.controls));
        this.internals = {
          userValues: userValues,
          // TODO: do a proper deep clone
          prevUserValues: JSON.parse(JSON.stringify(userValues)),
          replacements: replacements,
          unknownsRequiringSimulate: {},
          unknownsAlreadySimulated: {},
          latestRequest: undefined,
          sidebarSimulate: undefined,
        };
        this.handleEntityInstances(userValues);
      }
      /*this.processedScreen = produce(session.screen as Screen, (draft) => {
        iterateControls(draft.controls, (control: any) => {
          postProcessControl(control, this.internals.replacements);
        });
      });

      // call this first so the debounce doesn't fire during unknown calculation
      this.updateDynamicValues();
      this.calculateUnknowns();

      // force trigger an update of dynamic values
      // @ts-ignore
      this.updateDynamicValues.flush();*/
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

  set report(report) {
    (this.session as any).report = report;
  }

  // -- methods

  async submit(data: AttributeValues, navigate?: any, overrides: Overrides = {}) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(
      await submit(this.api, this, transformResponse(this, data as any), navigate, {
        response: this.options.responseElements,
        ...overrides,
      }),
    );
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async chat(
    goal: string,
    message: string,
    interactionId?: string | null,
    overrides?: Overrides,
  ): Promise<ChatResponse> {
    try {
      this.triggerUpdate({ externalLoading: true });
      const payload = await chat(this.api, this, message, goal, overrides, interactionId);
      this.triggerUpdate({ externalLoading: false });
      return payload;
    } catch (error) {
      this.triggerUpdate({ externalLoading: false });
      throw error;
    }
  }

  async save(data: AttributeValues) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(
      await submit(this.api, this, transformResponse(this, data as any), false, {
        response: this.options.responseElements,
      }),
    );
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async navigate(step: StepId) {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(await navigate(this.api, this, step));
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  async back() {
    this.triggerUpdate({ externalLoading: true });
    this.updateSession(await back(this.api, this));
    this.triggerUpdate({ externalLoading: false });
    return this;
  }

  exportTimeline() {
    return exportTimeline(this.api, this);
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
export const init = (
  host: string,
  path: string | string[] = defaultPath,
  overrides: AxiosRequestConfig = {},
): InterviewProvider => {
  // -- create the api instance
  const baseUrl = buildUrl(host, ...(typeof path === "string" ? [path] : path));
  const api = createApiInstance(baseUrl, overrides);

  // -- ret
  return {
    create: async (project, config, newDataCallback?) => {
      // @ts-ignore
      const session = await create(api, project, { ...config, debug: undefined });
      return new SessionInstance({
        session: session,
        api,
        responseElements: config.responseElements,
        project,
        newDataCallback,
        ...config,
      });
    },
    load: async (project, sessionId, interactionId) => {
      const session = await load(api, project, sessionId, interactionId);
      return new SessionInstance({ session, api, project });
    },
    finish: () => {},
  };
};
