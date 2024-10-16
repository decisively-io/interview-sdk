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

// ---

export type RenderableSidebar = RenderableEntityListSidebar;

export type Sidebar = EntityListSidebar;

export interface SidebarDataInfo<S extends RenderableSidebar> {
  getResponseElements: (config: S["config"]) => any[];
  type: S["type"];
  generateData: (config: S["config"], response: any) => Partial<S["data"]>;
}

export const SIDEBAR_DATA_INFO: Record<SidebarType, SidebarDataInfo<RenderableSidebar>> = {
  [SIDEBAR_TYPES.entity_list.id]: ENTITY_LIST_SIDEBAR_DATA_INFO,
};
