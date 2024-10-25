import type { BaseSidebar, InteractionMode, RenderableSidebarOf, sidebarType } from "./core";

export type InterviewSidebar = { type: typeof sidebarType.interview } & BaseSidebar<{
  description?: string;
  interactionMode: InteractionMode;
  interviewId: string;
  projectId?: string; // Only if interactionMode is different-project
  workspaceId?: string; // Only if interactionMode is different-project
}>;

export type RenderableInterviewSidebar = RenderableSidebarOf<
  InterviewSidebar,
  {}
>;
