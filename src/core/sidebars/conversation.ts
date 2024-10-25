import type { BaseSidebar, InteractionMode, RenderableSidebarOf, sidebarType } from "./core";

export type ConversationSidebar = { type: typeof sidebarType.conversation } & BaseSidebar<{
  aiOptions: {
    instructions?: string;
    temperature?: number;
    model?: string; // AI model
  };
  initialMessage?: string;
  goal: string;
  interactionMode: InteractionMode;
  projectId?: string; // Only if interactionMode is different-project
  workspaceId?: string; // Only if interactionMode is different-project
  showDataInline?: boolean; // Only if interactionMode is same-session
}>;

export type RenderableConversationSidebar = RenderableSidebarOf<
  ConversationSidebar,
  {}
>;
