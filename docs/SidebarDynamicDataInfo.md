# Interface: SidebarDynamicDataInfo\<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`RenderableSidebar`](../wiki/Exports#renderablesidebar) |

## Table of contents

### Properties

- [generateData](../wiki/SidebarDynamicDataInfo#generatedata)
- [getResponseElements](../wiki/SidebarDynamicDataInfo#getresponseelements)
- [type](../wiki/SidebarDynamicDataInfo#type)

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

[src/core/sidebars/sidebar.ts:185](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/core/sidebars/sidebar.ts#L185)

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

[src/core/sidebars/sidebar.ts:183](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/core/sidebars/sidebar.ts#L183)

___

### type

• **type**: `S`[``"type"``]

#### Defined in

[src/core/sidebars/sidebar.ts:184](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/core/sidebars/sidebar.ts#L184)
