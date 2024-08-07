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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:448

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:450

___

### condition

• `Optional` **condition**: [`ConditionExpression`](../wiki/ConditionExpression)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:445

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:441

___

### kind

• `Optional` **kind**: ``"dynamic"`` \| ``"static"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:446

___

### outcome\_false

• **outcome\_false**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:444

___

### outcome\_true

• **outcome\_true**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:443

___

### type

• **type**: ``"switch_container"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:442

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
