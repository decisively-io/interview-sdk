import { AxiosInstance, AxiosRequestConfig } from "axios";

import { Session, SessionConfig, Data, Navigate, StepId } from "./types";
import { buildUrl } from "./util";

const checkStatus = (res: any) => {
  console.log('checking res status', res);
  return JSON.parse(res);
  // if (res.ok) {
  //   return res;
  // }
  // throw (res);
};

export const create = async (api: AxiosInstance, project: string, options: SessionConfig = {}) => {
  const { initialData, autogen, interview, release } = options;
  const config: AxiosRequestConfig = {};

  if(release) {
    config.params = { release };
  }

  let url = project;
  if(interview) {
    url = buildUrl(url, interview);
  }
  
  // returns session id and screen info
  const res = await api.post<Session>(url, { data: initialData, autogen }, config);
  return res.data;

  // const config: AxiosRequestConfig = {
  //   params: {
  //     interview,
  //     release
  //   }
  // };

  // // returns session id and screen info
  // const res = await api.post<Session>(project, { data: initialData, autogen }, config);
  // return res.data;
};

export const load = async (api: AxiosInstance, project: string, session: string) => {
  try {
    const url = buildUrl('progress', project);
    const res = await api.post<Session>(url, { mode: 'interview2.0' }, { params: { interview: session } });
    console.log('loaded session', res);
    // return new Session(api, project, res.data);
    return res.data;
  } catch (err) {
    console.log('api failed, load', err);
  }
};

/**
 * Submit response for current step.
 * 
 * @param data The data for the current step to submit
 * @param navigate The desired navigation after update, defaults to next
 */
export const submit = async (api: AxiosInstance, project: string, session: string, data: Data, navigate: Navigate = true) => {
  const url = buildUrl('progress', project);

  // TODO should be patch??
  const res = await api.post<Session>(url, { mode: 'interview2.0', data, navigate }, { params: { interview: session } });
  return res.data;
};

/**
 * Navigate to a specific step.
 * 
 * @param step The desired step ID
 */
export const navigate = async (api: AxiosInstance, project: string, session: string, step: StepId) => {
  const url = buildUrl('progress', project);
  const res = await api.patch<Session>(url, { mode: 'interview2.0', navigate: step }, { params: { interview: session } });
  return res.data;
};

// export class Session {
//   private api: AxiosInstance;
//   private project: string;
//   private _state: SessionState;
  
//   get id() {
//     return this._state.session;
//   };

//   get state() {
//     return this._state;
//   }

//   /**
//    * Create a new session instance
//    * 
//    * @param project The project ID
//    */
//   constructor(api: AxiosInstance, project: string, state: SessionState) {
//     this.api = api;
//     this.project = project;
//     this._state = state;
//   }

//   /**
//    * Create a new session for an interview.
//    * 
//    * @param interview The desired interview ID. Null to use default interview.
//    * @param options 
//    * @param release Target release to test against
//    * @returns 
//    */
//   // create = async (interview: string | null, options?: CreateSessionOptions, release?: string) => {
//   //   const data = options ?? {};
//   //   const config: AxiosRequestConfig = {};

//   //   if(release) {
//   //     config.params = { release };
//   //   }

//   //   let url = this.model;
//   //   if(interview) {
//   //     url = [url, interview].join('/');
//   //   }

//   //   const res = await this.api.post<SessionState>(url, data, config);
//   //   this.session = res.data.session;
//   //   return res.data;
//   // }

//   /**
//    * Gets the sessions current state.
//    *
//    * @param session An existing session ID
//    */
//   // load = async (session: string) => {
//   //   // return this.api.get(this.model, { params: { id: this.interview, release: this.release } });
//   //   const url = this.buildUrl(this.model, session);
//   //   const res = await this.api.get<SessionState>(url);
//   //   this.session = session;
//   //   return res.data;
//   // };

//   /**
//    * Save the data but do not progress to the next step.
//    */
//   save = (data: Data) => {
//     return this.submit(data, false);
//   };
  
//   /**
//    * Submit response for current step.
//    * 
//    * @param data The data for the current step to submit
//    * @param navigate The desired navigation after update, defaults to next
//    */
//   submit = async (data: Data, navigate: Navigate = true) => {
//     const url = buildUrl(this.project, this.id);
//     const res = await this.api.patch<SessionState>(url, { ...data, navigate });
//     return res.data;
//   };

//   /**
//    * Navigate to a specific step.
//    * 
//    * @param step The desired step ID
//    */
//   navigate = async (step: StepId) => {
//     const url = buildUrl(this.project, this.id);
//     const res = await this.api.patch<SessionState>(url, { navigate: step });
//     return res.data;
//   };

// };

// export type SessionFactory = (model: string) => Session;