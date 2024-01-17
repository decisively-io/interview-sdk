import { AttributeData, InterviewId, Navigate, ProjectId, ReleaseId, Session, StepId } from "@decisively-io/types-interview";
import { AxiosInstance } from "axios";

export interface SessionConfig {
  // An initial state with information already provided
  initialData?: AttributeData;
  // Id of the desired interview
  interview?: InterviewId;
  // Specific release, for testing purposes
  release?: ReleaseId;
}

export type Overrides = Record<string, any>;

export type DynamicUpdateFunction = (data: AttributeData) => void;

export interface SessionInstance extends Session {
  _api: AxiosInstance;
  _project: ProjectId;
  submit: (data: AttributeData, navigate?: Navigate, overrides?: Overrides) => Promise<SessionInstance>;
  save: (data: AttributeData) => Promise<SessionInstance>;
  navigate: (step: StepId) => Promise<SessionInstance>;
  render: (value: string) => string;
  back: () => Promise<SessionInstance>;
  populate: (data: AttributeData) => Promise<SessionInstance>;
  exportTimeline(): Promise<any>;
  // dynamic interview
  chOnScreenData: DynamicUpdateFunction; // allows the render-implementation to notify the SDK that the on-screen data has changed
  externalLoading?: boolean; // indicates when the SDK is waiting for external data to be loaded, so the render-implementation can show a loading indicator
}

// this is just typed for clarity
export type SessionObservable = Partial<SessionInstance>;

export * from "@decisively-io/types-interview";
