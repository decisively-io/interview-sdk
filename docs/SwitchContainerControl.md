# Interface: SwitchContainerControl\<C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`SwitchContainerControl`**

  ↳↳ [`RenderableSwitchContainerControl`](../wiki/RenderableSwitchContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/SwitchContainerControl#attribute)
- [columnHeading](../wiki/SwitchContainerControl#columnheading)
- [columnWidth](../wiki/SwitchContainerControl#columnwidth)
- [condition](../wiki/SwitchContainerControl#condition)
- [id](../wiki/SwitchContainerControl#id)
- [kind](../wiki/SwitchContainerControl#kind)
- [outcome\_false](../wiki/SwitchContainerControl#outcome_false)
- [outcome\_true](../wiki/SwitchContainerControl#outcome_true)
- [type](../wiki/SwitchContainerControl#type)
- [version](../wiki/SwitchContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L8)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:543](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L543)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:545](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L545)

___

### condition

• `Optional` **condition**: [`ConditionExpression`](../wiki/ConditionExpression)

#### Defined in

[src/types/controls.ts:540](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L540)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:536](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L536)

___

### kind

• `Optional` **kind**: ``"dynamic"`` \| ``"static"``

#### Defined in

[src/types/controls.ts:541](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L541)

___

### outcome\_false

• **outcome\_false**: `C`[]

#### Defined in

[src/types/controls.ts:539](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L539)

___

### outcome\_true

• **outcome\_true**: `C`[]

#### Defined in

[src/types/controls.ts:538](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L538)

___

### type

• **type**: ``"switch_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:537](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L537)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L9)
