import type { BaseSidebar, DescriptionAttribute, RenderableSidebarOf, sidebarType } from "./core";

export type DataSidebar = { type: typeof sidebarType.data } & BaseSidebar<{
  description?: string;
  showAllAttributes?: boolean;
  canModify?: boolean;
  descriptionAttributes?: DescriptionAttribute[];
}>;

export type RenderableDataSidebar = RenderableSidebarOf<
  DataSidebar,
  {
    data: any;
    descriptionAttributes?: DescriptionAttribute[];
  }
>;
