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

[src/types/controls.ts:534](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L534)

___

### certain

• **certain**: `C`[]

#### Defined in

[src/types/controls.ts:535](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L535)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:538](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L538)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:540](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L540)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:532](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L532)

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:533](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L533)

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

[src/types/controls.ts:536](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L536)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/controls.ts#L9)
