import { AxiosInstance } from "axios";
import { Data, InterviewId, ProjectId, ReleaseId, Session, StepId } from "@decisively-io/types-interview";

export interface SessionConfig {
  // An initial state with information already provided
  initialData?: Data;
  // If set as a valid goal, will use auto generated single question interview
  autogen?: string;
  // Id of the desired interview
  interview?: InterviewId;
  // Specific release, for testing purposes
  release?: ReleaseId;
};

export interface SessionInstance extends Session {
  _api: AxiosInstance;
  _project: ProjectId;
  submit: (data: Data, navigate?: boolean) => Promise<SessionInstance>;
  save: (data: Data) => Promise<SessionInstance>;
  navigate: (step: StepId) => Promise<SessionInstance>;
  render: (value: string) => string;
};