import type { BaseSidebar, RenderableSidebarOf, sidebarType } from "./core";

export type ExplanationSidebar = { type: typeof sidebarType.explanation } & BaseSidebar<{
  text?: string;
  showAttributeExplanations?: boolean;
}>;

export type RenderableExplanationSidebar = RenderableSidebarOf<
  ExplanationSidebar,
  {
    text?: string; // rendered text from config
  }
>;
