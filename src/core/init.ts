import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from "axios";
import produce from "immer";
import { v4 as uuid } from 'uuid';
import { Subject, interval, take, fromEvent, throttleTime, scan, map, skipWhile, filter, Observable, merge, Subscription, distinctUntilChanged, debounceTime } from "rxjs";
import isEqual      from "lodash.isequal";
import Mustache     from "mustache";
import { AttributeData, AttributeValue, Control, Session, StepId, ResponseData } from "@decisively-io/types-interview";
import { ControlTypes } from "./constants";
import { buildUrl, 
         stateToData, 
         range }        from "./util";
import { create, 
          load, 
          submit, 
          navigate }    from './api';
import { DynamicUpdateFunction, 
         Overrides, 
         SessionConfig,
         SessionInstance, 
         SessionObservable } from './types';
import { render }            from "./placeholders";
import { replaceTemplatedText } from "./helpers";

export const createApiInstance = (baseURL: string, overrides: AxiosRequestConfig = {}) => {
  const { transformRequest = [] } = overrides;
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
    transformRequest: [
      ...transformRequest as AxiosRequestTransformer[],
      ...axios.defaults.transformRequest as AxiosRequestTransformer[]
    ],
    ...overrides
  });
};

const transformControlValue = (value: AttributeValue, control: Control): any => {

  switch (control.type) {
    case ControlTypes.NUMBEROFINSTANCES:
      return range(Number(value)).map((i) => ({ '@id': uuid() }));
    case ControlTypes.ENTITY:
      return value;
    default:
      return value;
  }
};

interface IControl {
  attribute?: string;
  entity?: string;
}

export const transformResponse = (session: Session, data: ResponseData): ResponseData => {
  
  return produce(data, draft => {
    if (session.data['@parent']) {
      draft['@parent'] = session.data['@parent'];
    }

    for (let id of Object.keys(draft)) {
      const control = (session.screen.controls as IControl[])
        .find(c => c.attribute === id || c.entity === id);
      if (control) {
        draft[id] = transformControlValue(draft[id], control as Control);
      }
    }
  })
};

const createSessionTransform = (
    api             : AxiosInstance, 
    project         : string, 
    session         : string, 
    chOnScreenData? : DynamicUpdateFunction,
    chSessionState?: (data: SessionObservable) => void,
  ): AxiosResponseTransformer => (res) => {

  res._api           = api;
  res._project       = project;
  res.submit         = (data: AttributeData, navigate: any, overrides: Overrides = {}) => {
      console.log('submitting', data, navigate, overrides);
      return submit(api, project, session, data, navigate, overrides);
    };
  res.save           = (data: AttributeData) => submit(api, project, session, data, false, {});
  res.navigate       = (step: StepId) => navigate(api, project, session, step);
  res.render         = (value: string) => render(value, res.state ? stateToData(res.state) : {});

  if (chOnScreenData) {
    res.chOnScreenData = chOnScreenData;
  }

  if (chSessionState) {
    chSessionState({
      state    : res.state    ,
      screen   : res.screen   ,
      // sessionId: res.sessionId,
      // status   : res.status   ,
      // context  : res.context  ,
      // data     : res.data     ,
      // steps    : res.steps    ,
      // progress : res.progress ,
    });
  }

  return res;
};

export const defaultPath = ["decisionapi", "session"];

/**
 * Initialize the SDK
 * 
 * newDataCallback : SDK -{updated session}-> Renderer : 
 *    - (the function never moves, so we can safely give it to the renderer)
 * chOnScreenData  : Renderer -{updated attribute}-> SDK
 *    - if using react, the renderer needs to be careful, because unless this function is within
 *      a HOC, it will be recreated on every render, and the SDK will not be able to send updates
 */
export const init = (host: string, path: string | string[] = defaultPath, overrides: AxiosRequestConfig = {}) => {

  // -- create the api instance

  const baseUrl = buildUrl(host, ...(typeof path === 'string' ? [path] : path));
  const api = createApiInstance(baseUrl, overrides);

  const transformApi = (
    project        : string, 
    session        : string,
    chOnScreenData?: DynamicUpdateFunction,
    chSessionState?: (data: SessionObservable) => void,
  ) => {
    api.defaults.transformResponse = [
      ...axios.defaults.transformResponse as AxiosResponseTransformer[],
      createSessionTransform(api, project, session, chOnScreenData, chSessionState)
    ];
  };

  // -- ret
  let sessionState$: Subscription | null = null;
  return {
    // create a SessionInstance to work with by calling on the decisively service
    create: async (project: string, config: SessionConfig, newDataCallback?: (data: any) => void) => {

      // -- create some observers for this session

      /**
       * $ - Track what the user enters on-screen by providing a vanilla JS Callback 
       * for the renderer to optionally notify the SDK of changed onscreen data
       */
      const onScreenDataChanged$ = new Subject<AttributeData>();
      const chOnScreenData = (data: AttributeData) => onScreenDataChanged$.next(data);

      /**
       * $ - Track the current session
       */
      const sessionStateChanged$ = new Subject<SessionObservable>();
      const chSessionState = (data: SessionObservable) => sessionStateChanged$.next(data);

      /**
       * $+$ Merge the two streams above into a single observer that we can subscribe to
       */

      sessionState$ = merge(
        onScreenDataChanged$.pipe(
          // you want a debounce rather than a throttle...wait for a second to ensure the user has finished typing/inputting/selecting/etc.
          debounceTime(1000),
          // collect all changes the user makes on-screen
          scan( (acc, curr) => ({ ...acc, ...curr }), {} as AttributeData ),
          // we don't need to reset the observable during a session, because if an attribute is changed, it should be consistent across all screens
          map( (usrEnteredData) => ({ usrEnteredData }) ),

          // TODO filter based on if the data is even relevant to the current session/state...not sure I can do this without the session state
        ),
        sessionStateChanged$.pipe(
          map( (sessionData) => ({ sessionData }) ),
        ),
      ).pipe(
        scan( (acc, curr) => ({ ...acc, ...curr, count: ++acc.count }), { usrEnteredData: {}, sessionData: {}, count: 0 } ),
        // if nothing has changed, don't emit
        distinctUntilChanged( (a, b) => isEqual(a, b) ),
      ).subscribe( (val) => {
        // console.log('observerMTpEcc:val', val);
        const replacedSession = produce<SessionObservable>(val.sessionData, (draft) => {
          
          const {state, screen} = draft;
          if (state && screen) { // TODO getting a bug that the state is undefined when we navigate BACK, so we don't trip this logic

            const replacements = {
              "5287c6f7-a910-47d2-aa9d-bb157b2d5bba": "I like clouds",
            };
            screen.controls.forEach( (ctrl: any) => {
              replaceTemplatedText(
                ctrl,
                ['text', 'label'],
                replacements,
              );
            });
          }
          draft.renderAt = val.count;
        });
        console.log('sdk::observerMTpEcc:replacedSession:', replacedSession);
        newDataCallback && newDataCallback(replacedSession);
      });

      // -- create the session

      const res = await create(api, project, config);
      // apply transformer for future responses
      transformApi(project, res.sessionId, chOnScreenData, chSessionState);
      // transform this current response
      return createSessionTransform(api, project, res.sessionId, chOnScreenData, chSessionState)(res) as SessionInstance;
    },
    load: (project: string, sessionId: string) => {
      // apply transformer for future responses
      transformApi(project, sessionId);
      return load(api, project, sessionId) as Promise<SessionInstance>;
    },
    finish: () => {
      if (sessionState$) {
        sessionState$.unsubscribe();
      }
    },
  }
};