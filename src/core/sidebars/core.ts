export interface SidebarTypeInfo {
  id: string;
  name: string;
}

export type SidebarType = "entity_list" | "data" | "explanation" | "conversation" | "interview";

export const sidebarType: { [K in SidebarType]: K } = {
  conversation: "conversation",
  data: "data",
  entity_list: "entity_list",
  explanation: "explanation",
  interview: "interview",
};

/** this generally corresponds to data type we work with during interview design time */
export interface BaseSidebar<TConfig extends {}> {
  id: string;
  title: string;
  /** anything configured at design time */
  config?: TConfig;
}

/** this is what will get rendered during interview run time */
export type RenderableSidebarOf<TSidebar extends BaseSidebar<object>, TData extends {}> = TSidebar & {
  data: TData;
  dynamicAttributes?: string[];
  loading?: boolean;
};

export interface DescriptionAttribute {
  value: string;
  label?: string;
}

export interface SidebarDataInfo<S extends RenderableSidebarOf<BaseSidebar<object>, object>> {
  getResponseElements: (config: S["config"]) => any[];
  type: SidebarType;
  generateData: (config: S["config"], response: any) => Partial<S["data"]>;
}

export const INTERACTION_MODE = {
  "same-session": {
    id: "same-session",
    name: "Within same session",
  },
  "new-session": {
    id: "new-session",
    name: "New session, same project",
  },
  "different-project": {
    id: "different-project",
    name: "Different project",
  },
} as const;
export type InteractionMode = keyof typeof INTERACTION_MODE;
