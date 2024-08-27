# Interface: RenderableEntityControl

Collect information about instances (of an entity) within a tabular structure.

## Hierarchy

- [`EntityControl`](../wiki/EntityControl)<[`RenderableControl`](../wiki/Exports#renderablecontrol)\>

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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Inherited from

[EntityControl](../wiki/EntityControl).[display](../wiki/EntityControl#display)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:426

___

### entity

• **entity**: `string`

The name of the entity

#### Inherited from

[EntityControl](../wiki/EntityControl).[entity](../wiki/EntityControl#entity)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:423

___

### entityId

• `Optional` **entityId**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[entityId](../wiki/EntityControl#entityid)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:433

___

### id

• **id**: `string`

unique id of the control

#### Inherited from

[EntityControl](../wiki/EntityControl).[id](../wiki/EntityControl#id)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:416

___

### instances

• **instances**: [`EntityControlInstance`](../wiki/EntityControlInstance)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:486

___

### label

• `Optional` **label**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[label](../wiki/EntityControl#label)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:418

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelDisplay](../wiki/EntityControl#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:419

___

### labelLength

• `Optional` **labelLength**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelLength](../wiki/EntityControl#labellength)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:421

___

### max

• `Optional` **max**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[max](../wiki/EntityControl#max)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:431

___

### min

• `Optional` **min**: `number`

min number of instances

#### Inherited from

[EntityControl](../wiki/EntityControl).[min](../wiki/EntityControl#min)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:430

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Inherited from

[EntityControl](../wiki/EntityControl).[showExplanation](../wiki/EntityControl#showexplanation)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:432

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Inherited from

[EntityControl](../wiki/EntityControl).[sxForSeparateLabel](../wiki/EntityControl#sxforseparatelabel)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:420

___

### template

• **template**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[template](../wiki/EntityControl#template)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:427

___

### type

• **type**: ``"entity"``

#### Inherited from

[EntityControl](../wiki/EntityControl).[type](../wiki/EntityControl#type)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:417

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[value](../wiki/EntityControl#value)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:428

___

### version

• `Optional` **version**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[version](../wiki/EntityControl#version)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
