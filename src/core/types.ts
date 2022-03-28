export type StepId = string;

/** Navigation can be step id, or true for next, false for no navigation */
export type Navigate = StepId | boolean;

export interface Data {
  [name: string]: string | number | boolean;
};

export interface Context {

};

export interface State {

};

export interface Step {

};

export interface Screen {

};

export interface Session {
  sessionId: string;
  status: 'in-progress' | 'complete' | 'error';
  context: Context; // see Context page
  data: Data; // See Data page,
  state: State; // See State page,
  stages: Step[]; // See Steps page
  screen: Screen; // See screen page
};

export interface SessionConfig {
  // An initial state with information already provided
  initialData?: Data;
  // If set as a valid goal, will use auto generated single question interview
  autogen?: string;
  // Id of the desired interview
  interview?: string;
  // Specific release, for testing purposes
  release?: string;
};