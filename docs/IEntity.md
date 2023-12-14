# Interface: IEntity

Collect information about instances (of an entity) within a tabular structure.

## Table of contents

### Properties

- [display](../wiki/IEntity#display)
- [entity](../wiki/IEntity#entity)
- [id](../wiki/IEntity#id)
- [label](../wiki/IEntity#label)
- [labelLength](../wiki/IEntity#labellength)
- [max](../wiki/IEntity#max)
- [min](../wiki/IEntity#min)
- [template](../wiki/IEntity#template)
- [type](../wiki/IEntity#type)
- [value](../wiki/IEntity#value)

## Properties

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:290

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:287

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:282

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:284

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:285

___

### max

• `Optional` **max**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:295

___

### min

• `Optional` **min**: `number`

min number of instances

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:294

___

### template

• **template**: [`NonNestedControl`](../wiki/Exports#nonnestedcontrol)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:291

___

### type

• **type**: ``"entity"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:283

___

### value

• `Optional` **value**: [`IEntityValue`](../wiki/Exports#ientityvalue)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:292
