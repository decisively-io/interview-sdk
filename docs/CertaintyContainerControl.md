# Interface: CertaintyContainerControl<C\>

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

[src/types/controls.ts:481](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L481)

___

### certain

• **certain**: `C`[]

#### Defined in

[src/types/controls.ts:482](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L482)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:485](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L485)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:487](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L487)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:479](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L479)

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:480](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L480)

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

[src/types/controls.ts:483](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L483)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
