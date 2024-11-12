# Interface: SidebarDataInfo\<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`RenderableSidebar`](../wiki/Exports#renderablesidebar) |

## Table of contents

### Properties

- [generateData](../wiki/SidebarDataInfo#generatedata)
- [getResponseElements](../wiki/SidebarDataInfo#getresponseelements)
- [type](../wiki/SidebarDataInfo#type)

## Properties

### generateData

• **generateData**: (`config`: `S`[``"config"``], `response`: `any`) => `Partial`\<`S`[``"data"``]\>

#### Type declaration

▸ (`config`, `response`): `Partial`\<`S`[``"data"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `S`[``"config"``] |
| `response` | `any` |

##### Returns

`Partial`\<`S`[``"data"``]\>

#### Defined in

[src/core/sidebars/sidebar.ts:60](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/sidebars/sidebar.ts#L60)

___

### getResponseElements

• **getResponseElements**: (`config`: `S`[``"config"``]) => `any`[]

#### Type declaration

▸ (`config`): `any`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `S`[``"config"``] |

##### Returns

`any`[]

#### Defined in

[src/core/sidebars/sidebar.ts:58](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/sidebars/sidebar.ts#L58)

___

### type

• **type**: `S`[``"type"``]

#### Defined in

[src/core/sidebars/sidebar.ts:59](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/sidebars/sidebar.ts#L59)
