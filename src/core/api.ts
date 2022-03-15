import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const checkStatus = (res: any) => {
  if (res.ok) {
    return res;
  }
  throw (res);
};

type StepId = string;
/** Navigation can be step id, or true for next, false for no navigation */
type Navigate = StepId | boolean;

interface Data {
  [name: string]: string | number | boolean;
};

interface CreateSessionOptions {
  // An initial state with information already provided
  data?: Data;
  // If set as a valid goal, will use auto generated single question interview
  autogen?: string;
}

interface SessionState {
  session: string;
}

class Session {
  private api: AxiosInstance;
  private model: string;
  private session: string | undefined;

  /**
   * Create a new session instance
   * 
   * @param model The model ID
   */
  constructor(api: AxiosInstance, model: string) {
    this.api = api;
    this.model = model;
  }

  /**
   * Create a new session for an interview.
   * 
   * @param interview The desired interview ID. Null to use default interview.
   * @param options 
   * @param release Target release to test against
   * @returns 
   */
  create = async (interview: string | null, options?: CreateSessionOptions, release?: string) => {
    const data = options ?? {};
    const config: AxiosRequestConfig = {};

    if(release) {
      config.params = { release };
    }

    let url = this.model;
    if(interview) {
      url = [url, interview].join('/');
    }

    const res = await this.api.post<SessionState>(url, data, config);
    this.session = res.data.session;
    return res.data;
  }

  /**
   * Gets the sessions current state.
   *
   * @param session An existing session ID
   */
  load = async (session: string) => {
    // return this.api.get(this.model, { params: { id: this.interview, release: this.release } });
    const url = [this.model, session].join('/');
    const res = await this.api.get<SessionState>(url);
    this.session = session;
    return res.data;
  };

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
    if(this.session) {
      const url = [this.model, this.session].join('/');
      const res = await this.api.patch<SessionState>(url, { ...data, navigate });
      return res.data;
    } else {
      throw new Error('Session: Cannot submit, no session defined. Create or load a session first.');
    }
  };

  /**
   * Navigate to a specific step.
   * 
   * @param step The desired step ID
   */
  navigate = async (step: StepId) => {
    if(this.session) {
      const url = [this.model, this.session].join('/');
      const res = await this.api.patch<SessionState>(url, { navigate: step });
      return res.data;
    } else {
      throw new Error('Session: Cannot navigate, no session defined. Create or load a session first.');
    }
  };

}

// need package to provide host url (where to query)
// optional env (sub location)
// then want them to be able to create an instance with release and interview id
// 


// need sessions
// interviews are separate
// should create session
// can provide 

export type SessionFactory = (model: string) => Session;

export default (host: string, env: string = 'test') => {
  const api = axios.create({
    url: env,
    baseURL: host,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
    transformResponse: [checkStatus]
  });

  // return session factory
  const factory: SessionFactory = (model) => new Session(api, model);
  return factory;
}