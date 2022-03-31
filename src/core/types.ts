import { AxiosInstance } from "axios";

export type StepId = string;
export type ReleaseId = string;
export type ProjectId = string;
export type SessionId = string;
export type InterviewId = string;
export type AttributeId = string;

/** Navigation can be step id, or true for next, false for no navigation */
export type Navigate = StepId | boolean;

export interface Data {
  [name: AttributeId]: string | number | boolean;
};

export interface Context {

};

export interface State {

};

// export interface Step {
//   /**  Unique ID of the screen */
//   id: string;
//   /** Title of the step. The screen may have a different title, so this title is intended for any menu UI */
//   title: string;
//   /**  See the context page for more info */
//   context: {
//     entity: string,
//     id?: string,
//     parent?: string
//   },
//   /**  Whether the step is the current step of the interview. Only one step is marked current at any time */
//   current: boolean,
//   /**  Is the screen complete, that is has data been provided for the attributes in this step? A step will also be marked complete only when all of it's sub-steps are complete */
//   complete: boolean,
//   /**  Has this step been visited by the user. A screen is marked as visited when either data is submitted from it or the user navigates away from it. A screen is not 'visited' until the user leaves it - so the current screen will always be marked as visited: false (unless it had been previously visited) */
//   visited: boolean,
//   /**  True if the screen was skipped due to relevancy or conditional rules. The user cannot navigate to this screen */
//   skipped: boolean,
//   /**  Whether a user can navigate to this screen. Some screens only exist as grouping of other screens (eg: just a header and some context info). */
//   visitable: boolean
//   steps?: Step[]
// }

// export interface Screen {
//   /** The title of the screen. This may differ from the title in the step */
//   title: string,
//   id: string
// }

export interface Session {
  sessionId: string;
  status: 'in-progress' | 'complete' | 'error';
  context: Context; // see Context page
  data: Data; // See Data page,
  state: State; // See State page,
  // stages: Step[]; // See Steps page
  // screen: Screen; // See screen page
};

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
  submit: (data: Data, navigate?: boolean) => Promise<SessionInstance>;
  save: (data: Data) => Promise<SessionInstance>;
  navigate: (step: StepId) => Promise<SessionInstance>;
};