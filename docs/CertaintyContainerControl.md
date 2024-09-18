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

[src/types/controls.ts:528](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L528)

___

### certain

• **certain**: `C`[]

#### Defined in

[src/types/controls.ts:529](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L529)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:532](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L532)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:534](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L534)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:526](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L526)

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:527](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L527)

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

[src/types/controls.ts:530](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L530)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/19c4f70cce9e8197103d83c7fc3c34bc1d672377/src/types/controls.ts#L9)
