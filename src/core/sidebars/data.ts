import type { BaseSidebar, AttributeInfo, RenderableSidebarOf, sidebarType } from "./core";

export type DataSidebar = { type: typeof sidebarType.data } & BaseSidebar<{
  description?: string;
  showAllAttributes?: boolean;
  canModify?: boolean;
  attributes?: AttributeInfo[];
}>;

export type RenderableDataSidebar = RenderableSidebarOf<
  DataSidebar,
  {
    data: any;
    attributes?: AttributeInfo[];
  }
>;
