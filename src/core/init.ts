import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from "axios";
import { Data, State, StepId } from "@decisively-io/types-interview";
import { buildUrl } from "./util";
import { create, load, submit, navigate } from './api';
import { SessionConfig,SessionInstance } from './types';
import { render } from "./placeholders";

const MODE = 'interview2.0';

export const createApiInstance = (baseURL: string, overrides: AxiosRequestConfig = {}) => {
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
    transformRequest: [
      (req) => {
        if(!req.mode) {
          // inject mode onto request if not defined
          req.mode = MODE;
        }
        return req;
      },
      ...axios.defaults.transformRequest as AxiosRequestTransformer[]
    ],
    ...overrides
  });
};

// should submit apply any context? depends on collection approach??

const stateToData = (state: State): Data => {
  return Object.keys(state).reduce((acc: Data, key) => {
    acc[key] = state[key].value;
    return acc;
  }, {});
};

const createSessionTransform = (api: AxiosInstance, project: string, session: string): AxiosResponseTransformer => (res) => {
  res._api = api;
  res._project = project;
  res.submit = (data: Data, navigate: any) => submit(api, project, session, data, navigate);
  res.save = (data: Data) => submit(api, project, session, data, false);
  res.navigate = (step: StepId) => navigate(api, project, session, step);
  res.render = (value: string) => render(value, res.state ? stateToData(res.state) : {});
  return res;
};

export const init = (host: string, env: string = 'test') => {
  const baseUrl = buildUrl(host, 'example', 'decisionapi', env, 'progress');
  const api = createApiInstance(baseUrl);

  const transformApi = (project: string, session: string) => {
    api.defaults.transformResponse = [
        ...axios.defaults.transformResponse as AxiosResponseTransformer[],
        createSessionTransform(api, project, session)
    ];
  };

  return {
    create: async (project: string, config: SessionConfig) => {
      const res = await create(api, project, config);
      // apply transformer for future responses
      transformApi(project, res.sessionId);
      // transform this current response
      return createSessionTransform(api, project, res.sessionId)(res) as SessionInstance;
    },
    load: (project: string, sessionId: string) => {
      // apply transformer for future responses
      transformApi(project, sessionId);
      return load(api, project, sessionId) as Promise<SessionInstance>;
    }
  }
};