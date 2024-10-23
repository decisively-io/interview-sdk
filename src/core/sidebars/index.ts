import type { ConversationSidebar, RenderableConversationSidebar } from "./conversation";
import type { SidebarDataInfo, SidebarType, SidebarTypeInfo } from "./core";
import type { DataSidebar, RenderableDataSidebar } from "./data";
import ENTITY_LIST_SIDEBAR_DATA_INFO, { type EntityListSidebar, type RenderableEntityListSidebar } from "./entityList";
import type { ExplanationSidebar, RenderableExplanationSidebar } from "./explanation";
import type { InterviewSidebar, RenderableInterviewSidebar } from "./interview";

export type Sidebar = EntityListSidebar | DataSidebar | ExplanationSidebar | ConversationSidebar | InterviewSidebar;

export type RenderableSidebar =
  | RenderableEntityListSidebar
  | RenderableDataSidebar
  | RenderableExplanationSidebar
  | RenderableConversationSidebar
  | RenderableInterviewSidebar;

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
} as const satisfies Record<SidebarType, SidebarTypeInfo>;

export const SIDEBAR_DATA_INFO: Partial<Record<SidebarType, SidebarDataInfo<any>>> = {
  [SIDEBAR_TYPES.entity_list.id]: ENTITY_LIST_SIDEBAR_DATA_INFO,
};

export * from "./core";
