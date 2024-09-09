import type { AxiosInstance } from "axios";
import type {
  AttributeValues,
  ChatResponse,
  Navigate,
  Overrides,
  ProjectId,
  ReleaseId,
  Session,
  SessionConfig,
  SessionId,
  Simulate,
  StepId,
} from "../types";
import { buildUrl } from "./util";

export const create = async (api: AxiosInstance, project: ProjectId, options: SessionConfig = {}) => {
  const { initialData, release, responseElements, ...rest } = options;
  // const config: AxiosRequestConfig = {
  //   params: {
  //     interview
  //   }
  // };

  const res = await api.post<Session>(buildUrl(project, release), {
    data: initialData ?? {},
    response: responseElements,
    ...rest,
  });
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
export const submit = async (
  api: AxiosInstance,
  project: ProjectId,
  session: SessionId,
  data: AttributeValues,
  navigate: Navigate,
  overrides?: Overrides,
  releaseId?: string,
) => {
  const url = releaseId === undefined ? project : buildUrl(project, releaseId);
  const res = await api.patch<Session>(
    url,
    { data, navigate: navigate || undefined, ...overrides },
    { params: { session: session } },
  );
  return res.data;
};

/**
 * Send a generative chat message
 */
export const chat = async (
  api: AxiosInstance,
  project: ProjectId,
  session: SessionId,
  message: string,
  overrides?: Overrides,
): Promise<ChatResponse> => {
  const res = await api.post<ChatResponse>(
    project,
    {
      prompt: message,
      turbo: false,
      mode: "generative",
      aiOptions: { model: "gpt-4o", temperature: 0.8 },
      ...overrides,
    },
    { params: { session } },
  );
  return res.data;
};

/**
 * Navigate to a specific step.
 *
 * @param step The desired step ID
 */
export const navigate = async (
  api: AxiosInstance,
  project: ProjectId,
  session: SessionId,
  step: StepId,
  overrides?: Overrides,
) => {
  const res = await api.patch<Session>(project, { navigate: step, ...overrides }, { params: { session } });
  return res.data;
};

export const back = async (api: AxiosInstance, project: ProjectId, session: SessionId, overrides?: Overrides) => {
  const res = await api.patch<Session>(project, { navigate: "@back", ...overrides }, { params: { session } });
  return res.data;
};

export const simulate = async (
  api: AxiosInstance,
  project: ProjectId,
  release: ReleaseId,
  session: SessionId,
  data: Partial<Simulate>,
) => {
  // Dynamic interactions are now on a post (due to new interaction behaviour in backend)
  const res = await api.post<AttributeValues>(
    buildUrl(project, release),
    {
      mode: "api",
      save: false,
      ...data,
    },
    {
      params: { session },
    },
  );
  return res.data;
};

export const exportTimeline = async (api: AxiosInstance, project: ProjectId, session: SessionId) => {
  const res = await api.post<string>(
    `${project}`,
    {
      exportTimeline: true,
    },
    {
      params: { session },
    },
  );
  return res.data;
};
