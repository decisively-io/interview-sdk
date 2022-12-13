import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from "axios";
import produce from "immer";
import { v4 as uuid } from 'uuid';

import { AttributeData, AttributeValue, Control, Session, StepId, ResponseData } from "@decisively-io/types-interview";
import { ControlTypes } from "./constants";
import { buildUrl, stateToData, range } from "./util";
import { create, load, submit, navigate } from './api';
import { Overrides, SessionConfig, SessionInstance } from './types';
import { render } from "./placeholders";

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

const createSessionTransform = (api: AxiosInstance, project: string, session: string): AxiosResponseTransformer => (res) => {
  res._api = api;
  res._project = project;
  res.submit = (data: AttributeData, navigate: any, overrides: Overrides = {}) => {
    console.log('submitting', data, navigate, overrides);
    return submit(api, project, session, data, navigate, overrides);
  };
  res.save = (data: AttributeData) => submit(api, project, session, data, false, {});
  res.navigate = (step: StepId) => navigate(api, project, session, step);
  res.render = (value: string) => render(value, res.state ? stateToData(res.state) : {});
  return res;
};

export const defaultPath = ["decisionapi", "session"];

export const init = (host: string, path: string | string[] = defaultPath, overrides: AxiosRequestConfig = {}) => {
  const baseUrl = buildUrl(host, ...(typeof path === 'string' ? [path] : path));
  const api = createApiInstance(baseUrl, overrides);

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