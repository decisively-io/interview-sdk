import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from "axios";
import { buildUrl } from "./util";
import { create, load, submit, navigate } from './api';
import { SessionConfig, Data, StepId, SessionInstance } from './types';

const MODE = 'interview2.0';

export const createApiInstance = (baseURL: string, overrides: AxiosRequestConfig = {}) => {
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
    transformRequest: [
      (req) => {
        // inject mode onto request
        req.mode = MODE;
        return req;
      },
      ...axios.defaults.transformRequest as AxiosRequestTransformer[]
    ],
    ...overrides
  });
};

// should submit apply any context? depends on collection approach??

const createSessionTransform = (api: AxiosInstance, project: string): AxiosResponseTransformer => (res) => {
  res._api = api;
  res.submit = (data: Data, navigate = true) => submit(api, project, res.sessionId, data, navigate);
  res.save = (data: Data) => submit(api, project, res.sessionId, data, false);
  res.navigate = (step: StepId) => navigate(api, project, res.sessionId, step);
  return res;
};

export const init = (host: string, env: string = 'test') => {
  const baseUrl = buildUrl(host, 'example', 'decisionapi', env, 'progress');
  const api = createApiInstance(baseUrl);

  const transformApi = (project: string) => {
    api.defaults.transformResponse = [
        ...axios.defaults.transformResponse as AxiosResponseTransformer[],
        createSessionTransform(api, project)
    ];
  };

  return {
    create: (project: string, config: SessionConfig) => {
      transformApi(project);
      return create(api, project, config) as Promise<SessionInstance>;
    },
    load: (project: string, sessionId: string) => {
      transformApi(project);
      return load(api, project, sessionId) as Promise<SessionInstance>;
    }
  }
};