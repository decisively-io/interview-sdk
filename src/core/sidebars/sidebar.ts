import ENTITY_LIST_SIDEBAR_DATA_INFO from "./entityListSidebar";

export interface SidebarTypeInfo {
  id: string;
  name: string;
}

export const SIDEBAR_TYPES = {
  entity_list: {
    id: "entity_list",
    name: "Entity List",
  },
  data: {
    id: "data",
    name: "Data",
  },
  explanation: {
    id: "explanation",
    name: "Explanation",
  },
  conversation: {
    id: "conversation",
    name: "Conversation",
  },
  interview: {
    id: "interview",
    name: "Interview",
  },
} as const satisfies Record<string, SidebarTypeInfo>;
export type SidebarType = keyof typeof SIDEBAR_TYPES;

interface BaseSidebar<TConfig extends {}> {
  type: SidebarType;
  id: string;
  config?: TConfig;
  title: string;
}

type RenderableSidebarOf<TSidebar extends Sidebar, TData extends {}> = TSidebar & {
  data: TData;
  dynamicAttributes?: string[];
  loading?: boolean;
};

export interface DescriptionAttribute {
  value: string;
  label?: string;
}

// entity list

export type EntityListSidebar = BaseSidebar<{
  entity: string;
  titleAttribute?: string;
  descriptionAttributes?: DescriptionAttribute[];
}>;

export type RenderableEntityListSidebar = RenderableSidebarOf<
  EntityListSidebar,
  {
    entities: any[];
    titleAttributeDescription?: string;
    descriptionAttributes?: DescriptionAttribute[];
  }
>;

// data sidebar

export type DataSidebar = BaseSidebar<{
  description?: string;
  showAllAttributes?: boolean;
  canModify?: boolean;
  descriptionAttributes?: DescriptionAttribute[];
}>;

export type RenderableDataSidebar = RenderableSidebarOf<DataSidebar, {
  // TODO
}>;

// explanation sidebar

export type ExplanationSidebar = BaseSidebar<{
  text?: string;
  showAttributeExplanations?: boolean;
}>;

export type RenderableExplanationSidebar = RenderableSidebarOf<ExplanationSidebar, {
  // TODO
}>;

// conversation sidebar

export const INTERACTION_MODE = {
  same_session: {
    id: "same_session",
    name: "Within same session",
  },
  separate_session: {
    id: "separate_session",
    name: "Separate session, same project",
  },
  different_project: {
    id: "different_project",
    name: "Different project",
  }
} as const;
export type InteractionMode = keyof typeof INTERACTION_MODE;

export type ConversationSidebar = BaseSidebar<{
  prompt: string;
  initialMessage?: string;
  temperature?: number;
  model?: string;
  goal: string;
  interactionMode: InteractionMode;
  project?: string; // Only if interactionMode is different_project
  showInlineData?: boolean; // Only if interactionMode is same_session
}>;

export type RenderableConversationSidebar = RenderableSidebarOf<ConversationSidebar, {
  // TODO
}>;

// interview sidebar

export type InterviewSidebar = BaseSidebar<{
  description?: string;
  interactionMode: InteractionMode;
  project?: string; // Only if interactionMode is different_project
  interview: string;
}>;

export type RenderableInterviewSidebar = RenderableSidebarOf<InterviewSidebar, {
  // TODO
}>;

// ---

export type RenderableSidebar = RenderableEntityListSidebar | RenderableDataSidebar | RenderableExplanationSidebar | RenderableConversationSidebar | RenderableInterviewSidebar;

export type Sidebar = EntityListSidebar | DataSidebar | ExplanationSidebar | ConversationSidebar | InterviewSidebar;

export interface SidebarDataInfo<S extends RenderableSidebar> {
  getResponseElements: (config: S["config"]) => any[];
  type: S["type"];
  generateData: (config: S["config"], response: any) => Partial<S["data"]>;
}

export const SIDEBAR_DATA_INFO: Record<SidebarType, SidebarDataInfo<RenderableSidebar>> = {
  [SIDEBAR_TYPES.entity_list.id]: ENTITY_LIST_SIDEBAR_DATA_INFO,
};
