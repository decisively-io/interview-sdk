# Interface: SwitchContainerControl<C\>

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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:498](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L498)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:500](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L500)

___

### condition

• `Optional` **condition**: [`ConditionExpression`](../wiki/ConditionExpression)

#### Defined in

[src/types/controls.ts:495](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L495)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:491](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L491)

___

### kind

• `Optional` **kind**: ``"dynamic"`` \| ``"static"``

#### Defined in

[src/types/controls.ts:496](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L496)

___

### outcome\_false

• **outcome\_false**: `C`[]

#### Defined in

[src/types/controls.ts:494](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L494)

___

### outcome\_true

• **outcome\_true**: `C`[]

#### Defined in

[src/types/controls.ts:493](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L493)

___

### type

• **type**: ``"switch_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:492](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L492)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
