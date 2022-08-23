import { AxiosInstance } from "axios";
import { AttributeData, InterviewId, Navigate, ProjectId, ReleaseId, Session, StepId } from "@decisively-io/types-interview";

export interface SessionConfig {
  // An initial state with information already provided
  initialData?: AttributeData;
  // Id of the desired interview
  interview?: InterviewId;
  // Specific release, for testing purposes
  release?: ReleaseId;
};

export type Overrides = Record<string, any>;

export interface SessionInstance extends Session {
  _api: AxiosInstance;
  _project: ProjectId;
  submit: (data: AttributeData, navigate?: Navigate, overrides?: Overrides) => Promise<SessionInstance>;
  save: (data: AttributeData) => Promise<SessionInstance>;
  navigate: (step: StepId) => Promise<SessionInstance>;
  render: (value: string) => string;
  populate: (data: AttributeData) => Promise<SessionInstance>;
};