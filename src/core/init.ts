import axios from "axios";
import { buildUrl } from "./util";
import { create, load, submit, navigate } from './api';
import { SessionConfig, Data, Navigate, StepId } from './types';

export const init = (host: string, env: string = 'test') => {
    const api = axios.create({
      baseURL: buildUrl(host, 'example', 'decisionapi', env),
      timeout: 30000,
      headers: { 'Content-Type': 'application/json' },
      // already passed 200 check
      transformResponse: [(res) => {
        res._api = api;
        res.submit = (data: Data, navigate = true) => submit(api, '', res.sessionId, data, navigate);
        res.save = (data: Data) => submit(api, '', res.sessionId, data, false);
        res.navigate = (step: StepId) => navigate(api, '', res.sessionId, step);
        return res;
      }]
    });
  
    // return session factory
    // const factory: SessionFactory = (model) => new Session(api, model);
    // return factory;
    return {
        create: (project: string, config: SessionConfig) => create(api, project, config),
        load: (project: string, session: string) => load(api, project, session)
    };
  };