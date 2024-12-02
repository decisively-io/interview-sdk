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

[src/core/sidebars/sidebar.ts:177](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/core/sidebars/sidebar.ts#L177)

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

[src/core/sidebars/sidebar.ts:175](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/core/sidebars/sidebar.ts#L175)

___

### type

• **type**: `S`[``"type"``]

#### Defined in

[src/core/sidebars/sidebar.ts:176](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/core/sidebars/sidebar.ts#L176)
