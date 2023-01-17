import axios, { AxiosInstance, 
  AxiosRequestConfig, 
  AxiosRequestTransformer, 
  AxiosResponseTransformer }        from "axios";
import produce                      from "immer";
import isEmpty                      from "lodash.isempty";
import { v4 as uuid }               from 'uuid';
import { Subject, 
         scan, 
         map, 
         filter, 
         merge, 
         Subscription, 
         distinctUntilChanged, 
         debounceTime, 
         takeWhile }                from "rxjs";
import isEqual                      from "lodash.isequal";
import { AttributeData, 
         AttributeValue, 
         Control, 
         Session, 
         StepId, 
         ResponseData }             from "@decisively-io/types-interview";
import { ControlTypes }             from "./constants";
import { buildUrl, 
         stateToData, 
         range }                    from "./util";
import { create, 
          load, 
          submit, 
          navigate }                from './api';
import { DynamicUpdateFunction, 
         Overrides, 
         SessionConfig,
         SessionInstance, 
         SessionObservable }        from './types';
import { render }                   from "./placeholders";
import { replaceTemplatedText }     from "./helpers";
import { buildDynamicReplacements } from "./dynamic";

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

  if (chSessionState && !isEmpty(res.screen)) {
    // note: the check on screen is just a lazy way to check this isn't a simulation response
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
 *      a HOC, it will be recreated every render, and the SDK will not be able to send updates
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
          // debounce (not throttle)...wait for a second to ensure the user has finished typing/inputting/selecting/etc., then emit
          debounceTime(1000),
          // collect all prev. changes the user makes on-screen (across all screens)
          scan( (acc, curr) => ({ ...acc, ...curr }), {} as AttributeData ),
          // we don't need to reset the observable during a session, because if an attribute is changed, it should be consistent across all screens
          map( (usrEnteredData) => ({ usrEnteredData }) ),

          // TODO filter based on if the data is even relevant to the current session/state...not sure I can do this without the session state, which is the next observable
        ),
        sessionStateChanged$.pipe(
          map( (sessionData) => ({ sessionData }) ),
        ),
      ).pipe(
        takeWhile( (val) => undefined !== newDataCallback ),
        // consolidate all changes into a single object
        scan( (acc, curr) => ({ ...acc, ...curr }), { usrEnteredData: {}, sessionData: {} } ),
        // if nothing has changed, don't emit
        distinctUntilChanged( (a, b) => isEqual(a, b) ),
        // if session has not been fetched, don't emit
        filter( (val) => !isEmpty(val.sessionData) ),
      ).subscribe( async (val) => {
        console.log('observerMTpEcc:val', val);
        // TODO Check, do I need to also merge in any static control values that are not dynamic, plus known state values - or does the graph already take these into account when computing the dependencies?
        const replacedSession = await produce<SessionObservable>(val.sessionData, async (draft) => {
          
          const {state, screen} = draft;

          if (state && screen) { 
            // TODO getting a bug that the state is undefined when we navigate BACK, so we don't trip this logic..need to see what the backend is doing

            // ask the backend to solve for any dynamic attributes, based on the attributes we know (entered and static)
            const replacements = await buildDynamicReplacements(state, val.usrEnteredData, api, project, (val.sessionData as SessionObservable).sessionId!);
            // replace anything replaceable on the screen
            screen.controls.forEach( (ctrl: any) => {
              replaceTemplatedText(
                ctrl,
                ['text', 'label'],
                replacements,
              );
            });
          }
          draft.renderAt = Date.now(); // fine-grained enough for the renderer to know when to re-render
        });

        if (newDataCallback && replacedSession.screen) {
          console.log('sdk::observerMTpEcc:replacedSession:', replacedSession);
          newDataCallback(replacedSession);
        }
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