export interface SidebarTypeInfo {
  id: string;
  name: string;
}

export const SIDEBAR_TYPES = {
  ENTITY_LIST: {
    id: "entity_list",
    name: "Entity List",
  },
} as const satisfies Record<string, SidebarTypeInfo>;
export type SidebarType = (typeof SIDEBAR_TYPES)[keyof typeof SIDEBAR_TYPES]["id"];

interface BaseSidebar<TConfig extends {}> {
  type: SidebarType;
  id?: string;
  config?: TConfig;
  title?: string;
}

type RenderableSidebarOf<TSidebar extends Sidebar, TData extends {}> = TSidebar & {
  data: TData;
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

// ---

export type RenderableSidebar = RenderableEntityListSidebar;

export type Sidebar = EntityListSidebar;
