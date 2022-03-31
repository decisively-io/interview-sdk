import { AxiosInstance, AxiosRequestConfig } from "axios";

import { Session, SessionConfig, Data, Navigate, StepId, SessionId, ProjectId } from "./types";

export const create = async (api: AxiosInstance, project: ProjectId, options: SessionConfig = {}) => {
  const { initialData, autogen, interview, release } = options;
  const config: AxiosRequestConfig = {
    params: {
      release,
      interview
    }
  };

  const res = await api.post<Session>(project, { data: initialData, autogen }, config);
  return res.data;
};

export const load = async (api: AxiosInstance, project: ProjectId, session: SessionId) => {
    const res = await api.get<Session>(project, { params: { session } });
    return res.data;
};

/**
 * Submit response for current step.
 * 
 * @param data The data for the current step to submit
 * @param navigate The desired navigation after update, defaults to next
 */
export const submit = async (api: AxiosInstance, project: ProjectId, session: SessionId, data: Data, navigate: Navigate = true) => {
  const res = await api.patch<Session>(project, { data, navigate }, { params: { session: session } });
  return res.data;
};

/**
 * Navigate to a specific step.
 * 
 * @param step The desired step ID
 */
export const navigate = async (api: AxiosInstance, project: ProjectId, session: SessionId, step: StepId) => {
  const res = await api.patch<Session>(project, { navigate: step }, { params: { session } });
  return res.data;
};