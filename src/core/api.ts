import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const checkStatus = (res: any) => {
  console.log('checking res status', res);
  return JSON.parse(res);
  // if (res.ok) {
  //   return res;
  // }
  // throw (res);
};

const buildUrl = (...args: string[]) => {
  return [...args].join('/');
};

export type StepId = string;
/** Navigation can be step id, or true for next, false for no navigation */
export type Navigate = StepId | boolean;

export interface Data {
  [name: string]: string | number | boolean;
};

export interface CreateSessionOptions {
  // An initial state with information already provided
  initialData?: Data;
  // If set as a valid goal, will use auto generated single question interview
  autogen?: string;
  // Id of the desired interview
  interview?: string;
  // Specific release, for testing purposes
  release?: string;
};

export interface SessionState {
  session: string;
};

export class Session {
  private api: AxiosInstance;
  private project: string;
  private _state: SessionState;
  
  get id() {
    return this._state.session;
  };

  get state() {
    return this._state;
  }

  /**
   * Create a new session instance
   * 
   * @param project The project ID
   */
  constructor(api: AxiosInstance, project: string, state: SessionState) {
    this.api = api;
    this.project = project;
    this._state = state;
  }

  /**
   * Create a new session for an interview.
   * 
   * @param interview The desired interview ID. Null to use default interview.
   * @param options 
   * @param release Target release to test against
   * @returns 
   */
  // create = async (interview: string | null, options?: CreateSessionOptions, release?: string) => {
  //   const data = options ?? {};
  //   const config: AxiosRequestConfig = {};

  //   if(release) {
  //     config.params = { release };
  //   }

  //   let url = this.model;
  //   if(interview) {
  //     url = [url, interview].join('/');
  //   }

  //   const res = await this.api.post<SessionState>(url, data, config);
  //   this.session = res.data.session;
  //   return res.data;
  // }

  /**
   * Gets the sessions current state.
   *
   * @param session An existing session ID
   */
  // load = async (session: string) => {
  //   // return this.api.get(this.model, { params: { id: this.interview, release: this.release } });
  //   const url = this.buildUrl(this.model, session);
  //   const res = await this.api.get<SessionState>(url);
  //   this.session = session;
  //   return res.data;
  // };

  /**
   * Save the data but do not progress to the next step.
   */
  save = (data: Data) => {
    return this.submit(data, false);
  };
  
  /**
   * Submit response for current step.
   * 
   * @param data The data for the current step to submit
   * @param navigate The desired navigation after update, defaults to next
   */
  submit = async (data: Data, navigate: Navigate = true) => {
    const url = buildUrl(this.project, this.id);
    const res = await this.api.patch<SessionState>(url, { ...data, navigate });
    return res.data;
  };

  /**
   * Navigate to a specific step.
   * 
   * @param step The desired step ID
   */
  navigate = async (step: StepId) => {
    const url = buildUrl(this.project, this.id);
    const res = await this.api.patch<SessionState>(url, { navigate: step });
    return res.data;
  };

};

// export type SessionFactory = (model: string) => Session;

export const init = (host: string, env: string = 'test') => {
  const api = axios.create({
    baseURL: buildUrl(host, 'example', 'decisionapi', env),
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
    // already passed 200 check
    transformResponse: [checkStatus]
  });

  // return session factory
  // const factory: SessionFactory = (model) => new Session(api, model);
  // return factory;
  return {
    create: async (project: string, options: CreateSessionOptions = {}) => {
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
      const res = await api.post<SessionState>(url, { data: initialData, autogen }, config);
      return res.data;

      // const config: AxiosRequestConfig = {
      //   params: {
      //     interview,
      //     release
      //   }
      // };

      // // returns session id and screen info
      // const res = await api.post<SessionState>(project, { data: initialData, autogen }, config);
      // return res.data;
    },
    load: async (project: string, session: string) => {
      try {
        const url = buildUrl('progress', project);
        const res = await api.post<SessionState>(url, { mode: 'interview2.0' }, { params: { interview: session } });
        console.log('loaded session', res);
        // return new Session(api, project, res.data);
        return res.data;
      } catch (err) {
        console.log('api failed, load', err);
      }
    }
  }
}