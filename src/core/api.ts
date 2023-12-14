import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Session, AttributeData, Navigate, StepId, SessionId, ProjectId, Simulate, ReleaseId } from "@decisively-io/types-interview";
import { Overrides, SessionConfig } from "./types";
import { buildUrl } from "./util";

export const create = async (api: AxiosInstance, project: ProjectId, options: SessionConfig = {}) => {
  const { initialData, release, ...rest } = options;
  // const config: AxiosRequestConfig = {
  //   params: {
  //     interview
  //   }
  // };

  const res = await api.post<Session>(buildUrl(project, release), { data: initialData ?? {}, ...rest });
  return res.data;
};

export const load = async (api: AxiosInstance, project: ProjectId, session: SessionId) => {
  const res = await api.patch<Session>(project, {}, { params: { session } });
  return res.data;
};

/**
 * Submit response for current step.
 *
 * @param data The data for the current step to submit
 * @param navigate The desired navigation after update, defaults to next
 * @param overrides Other params to pass through to payload
 */
export const submit = async (api: AxiosInstance, project: ProjectId, session: SessionId, data: AttributeData, navigate: Navigate, overrides: Overrides, releaseId?: string) => {
  const url = releaseId === undefined ? project : buildUrl( project, releaseId );
  const res = await api.patch<Session>(url, { data, navigate, ...overrides }, { params: { session: session } });
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

export const simulate = async (api: AxiosInstance, project: ProjectId, release: ReleaseId, session: SessionId, data: Partial<Simulate>) => {
  const res = await api.patch<AttributeData>(
      buildUrl(project, release),
      {
        mode: 'api',
        save: false,
        ...data,
      },
      {
        params: { session },
      }
    );
  return res.data;
}
