# Interface: EntityControl<C\>

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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:426

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:423

___

### entityId

• `Optional` **entityId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:433

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:416

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:418

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:419

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:421

___

### max

• `Optional` **max**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:431

___

### min

• `Optional` **min**: `number`

min number of instances

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:430

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:432

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:420

___

### template

• **template**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:427

___

### type

• **type**: ``"entity"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:417

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:428

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
