# Interface: EntityControl\<C\>

Collect information about instances (of an entity) within a tabular structure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`EntityControl`**

  ↳↳ [`RenderableEntityControl`](../wiki/RenderableEntityControl)

## Table of contents

### Properties

- [attribute](../wiki/EntityControl#attribute)
- [display](../wiki/EntityControl#display)
- [entity](../wiki/EntityControl#entity)
- [entityId](../wiki/EntityControl#entityid)
- [id](../wiki/EntityControl#id)
- [label](../wiki/EntityControl#label)
- [labelDisplay](../wiki/EntityControl#labeldisplay)
- [labelLength](../wiki/EntityControl#labellength)
- [max](../wiki/EntityControl#max)
- [min](../wiki/EntityControl#min)
- [showExplanation](../wiki/EntityControl#showexplanation)
- [sxForSeparateLabel](../wiki/EntityControl#sxforseparatelabel)
- [template](../wiki/EntityControl#template)
- [type](../wiki/EntityControl#type)
- [value](../wiki/EntityControl#value)
- [version](../wiki/EntityControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L8)

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Defined in

[src/types/controls.ts:489](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L489)

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

[src/types/controls.ts:486](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L486)

___

### entityId

• `Optional` **entityId**: `string`

#### Defined in

[src/types/controls.ts:496](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L496)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:479](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L479)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:481](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L481)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:482](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L482)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:484](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L484)

___

### max

• `Optional` **max**: `number`

#### Defined in

[src/types/controls.ts:494](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L494)

___

### min

• `Optional` **min**: `number`

min number of instances

#### Defined in

[src/types/controls.ts:493](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L493)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:495](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L495)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:483](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L483)

___

### template

• **template**: `C`[]

#### Defined in

[src/types/controls.ts:490](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L490)

___

### type

• **type**: ``"entity"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:480](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L480)

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Defined in

[src/types/controls.ts:491](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L491)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/8f7e4477d688e71f550587a1ff3e071ac92d0276/src/types/controls.ts#L9)
