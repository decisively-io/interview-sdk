import { RenderableEntityListSidebar, SidebarDataInfo } from "./sidebar";

const ENTITY_LIST_SIDEBAR_DATA_INFO: SidebarDataInfo<RenderableEntityListSidebar> = {
  getResponseElements: (config) =>  [{
    type: "attributes",
    id: `entity_list_${config?.entity}`,
    entities: [config?.entity],
  }],
  type: "entity_list",
  generateData: (response) => {
    const attributes = Array.isArray(response.attributes) ? response.attributes : [response.attributes];
    const entities = attributes.find((attributes) => attributes.id === `entity_list_${response.config.entity}`);
    console.log(entities);

    return {
      entities: []// response.reporting,
    };
  },
}

export default ENTITY_LIST_SIDEBAR_DATA_INFO;