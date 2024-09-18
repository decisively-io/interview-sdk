# Interface: RenderableEntityControl

Collect information about instances (of an entity) within a tabular structure.

## Hierarchy

- [`EntityControl`](../wiki/EntityControl)\<[`RenderableControl`](../wiki/Exports#renderablecontrol)\>

  ↳ **`RenderableEntityControl`**

## Table of contents

### Properties

- [attribute](../wiki/RenderableEntityControl#attribute)
- [display](../wiki/RenderableEntityControl#display)
- [entity](../wiki/RenderableEntityControl#entity)
- [entityId](../wiki/RenderableEntityControl#entityid)
- [id](../wiki/RenderableEntityControl#id)
- [instances](../wiki/RenderableEntityControl#instances)
- [label](../wiki/RenderableEntityControl#label)
- [labelDisplay](../wiki/RenderableEntityControl#labeldisplay)
- [labelLength](../wiki/RenderableEntityControl#labellength)
- [max](../wiki/RenderableEntityControl#max)
- [min](../wiki/RenderableEntityControl#min)
- [showExplanation](../wiki/RenderableEntityControl#showexplanation)
- [sxForSeparateLabel](../wiki/RenderableEntityControl#sxforseparatelabel)
- [template](../wiki/RenderableEntityControl#template)
- [type](../wiki/RenderableEntityControl#type)
- [value](../wiki/RenderableEntityControl#value)
- [version](../wiki/RenderableEntityControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[attribute](../wiki/EntityControl#attribute)

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L8)

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Inherited from

[EntityControl](../wiki/EntityControl).[display](../wiki/EntityControl#display)

#### Defined in

[src/types/controls.ts:480](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L480)

___

### entity

• **entity**: `string`

The name of the entity

#### Inherited from

[EntityControl](../wiki/EntityControl).[entity](../wiki/EntityControl#entity)

#### Defined in

[src/types/controls.ts:477](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L477)

___

### entityId

• `Optional` **entityId**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[entityId](../wiki/EntityControl#entityid)

#### Defined in

[src/types/controls.ts:487](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L487)

___

### id

• **id**: `string`

unique id of the control

#### Inherited from

[EntityControl](../wiki/EntityControl).[id](../wiki/EntityControl#id)

#### Defined in

[src/types/controls.ts:470](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L470)

___

### instances

• **instances**: [`EntityControlInstance`](../wiki/EntityControlInstance)[]

#### Defined in

[src/types/controls.ts:558](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L558)

___

### label

• `Optional` **label**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[label](../wiki/EntityControl#label)

#### Defined in

[src/types/controls.ts:472](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L472)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelDisplay](../wiki/EntityControl#labeldisplay)

#### Defined in

[src/types/controls.ts:473](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L473)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelLength](../wiki/EntityControl#labellength)

#### Defined in

[src/types/controls.ts:475](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L475)

___

### max

• `Optional` **max**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[max](../wiki/EntityControl#max)

#### Defined in

[src/types/controls.ts:485](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L485)

___

### min

• `Optional` **min**: `number`

min number of instances

#### Inherited from

[EntityControl](../wiki/EntityControl).[min](../wiki/EntityControl#min)

#### Defined in

[src/types/controls.ts:484](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L484)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Inherited from

[EntityControl](../wiki/EntityControl).[showExplanation](../wiki/EntityControl#showexplanation)

#### Defined in

[src/types/controls.ts:486](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L486)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Inherited from

[EntityControl](../wiki/EntityControl).[sxForSeparateLabel](../wiki/EntityControl#sxforseparatelabel)

#### Defined in

[src/types/controls.ts:474](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L474)

___

### template

• **template**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[template](../wiki/EntityControl#template)

#### Defined in

[src/types/controls.ts:481](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L481)

___

### type

• **type**: ``"entity"``

#### Inherited from

[EntityControl](../wiki/EntityControl).[type](../wiki/EntityControl#type)

#### Defined in

[src/types/controls.ts:471](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L471)

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[value](../wiki/EntityControl#value)

#### Defined in

[src/types/controls.ts:482](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L482)

___

### version

• `Optional` **version**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[version](../wiki/EntityControl#version)

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
