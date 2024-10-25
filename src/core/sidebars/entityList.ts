import type { BaseSidebar, AttributeInfo, RenderableSidebarOf, SidebarDataInfo, sidebarType } from "./core";

export type EntityListSidebar = { type: typeof sidebarType.entity_list } & BaseSidebar<{
  entity: string;
  titleAttribute?: string;
  descriptionAttributes?: AttributeInfo[];
}>;

export type RenderableEntityListSidebar = RenderableSidebarOf<
  EntityListSidebar,
  {
    entities: any[];
    titleAttributeDescription?: string;
    descriptionAttributes?: AttributeInfo[];
  }
>;

const ENTITY_LIST_SIDEBAR_DATA_INFO: SidebarDataInfo<RenderableEntityListSidebar> = {
  getResponseElements: (config) => [
    {
      type: "attributes",
      id: `entity_list_${config?.entity}`,
      entities: [config?.entity],
      useDescription: true,
    },
  ],
  type: "entity_list",
  generateData: (config, response) => {
    if (!config?.entity) {
      return {};
    }
    const attributes = Array.isArray(response.reporting) ? response.reporting : [response.reporting];
    const entities = attributes.find((attributes: any) => attributes.id === `entity_list_${config.entity}`);

    return {
      entities: entities?.[config.entity] ?? [],
    };
  },
};

export default ENTITY_LIST_SIDEBAR_DATA_INFO;
