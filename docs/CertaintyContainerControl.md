# Interface: CertaintyContainerControl\<C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`CertaintyContainerControl`**

  ↳↳ [`RenderableCertaintyContainerControl`](../wiki/RenderableCertaintyContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/CertaintyContainerControl#attribute)
- [certain](../wiki/CertaintyContainerControl#certain)
- [columnHeading](../wiki/CertaintyContainerControl#columnheading)
- [columnWidth](../wiki/CertaintyContainerControl#columnwidth)
- [id](../wiki/CertaintyContainerControl#id)
- [type](../wiki/CertaintyContainerControl#type)
- [uncertain](../wiki/CertaintyContainerControl#uncertain)
- [version](../wiki/CertaintyContainerControl#version)

## Properties

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:520](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L520)

___

### certain

• **certain**: `C`[]

#### Defined in

[src/types/controls.ts:521](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L521)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:524](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L524)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:526](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L526)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:518](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L518)

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:519](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L519)

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

[src/types/controls.ts:522](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L522)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
