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

[src/types/controls.ts:529](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L529)

___

### certain

• **certain**: `C`[]

#### Defined in

[src/types/controls.ts:530](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L530)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:533](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L533)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:535](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L535)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:527](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L527)

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:528](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L528)

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

[src/types/controls.ts:531](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L531)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L9)
