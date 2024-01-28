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
- [showExplanation](../wiki/IEntity#showexplanation)
- [template](../wiki/IEntity#template)
- [type](../wiki/IEntity#type)
- [value](../wiki/IEntity#value)

## Properties

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:308

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:305

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:300

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:302

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:303

___

### max

• `Optional` **max**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:313

___

### min

• `Optional` **min**: `number`

min number of instances

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:312

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:314

___

### template

• **template**: [`Control`](../wiki/Exports#control)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:309

___

### type

• **type**: ``"entity"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:301

___

### value

• `Optional` **value**: [`IEntityValue`](../wiki/Exports#ientityvalue)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:310
