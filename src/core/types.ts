import { type AttributeData, type InterviewId, Navigate, ProjectId, type ReleaseId, Session, StepId } from "@decisively-io/types-interview";
import { AxiosInstance } from "axios";

export interface SessionConfig {
  // An initial state with information already provided
  initialData?: AttributeData;
  // Id of the desired interview
  interview?: InterviewId;
  // Specific release, for testing purposes
  release?: ReleaseId;
  // response elements for next/submit
  responseElements?: any[];
}

export type Overrides = Record<string, any>;

export type DynamicUpdateFunction = (data: AttributeData) => void;

export * from "@decisively-io/types-interview";
