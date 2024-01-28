# Interface: INumberOfInstances

Collects the number of instances of an entity the user will want. \
This will be used to control the repetition of steps to collect information \
for these instances. See . This should be displayed as a number input field \
or a dropdown (if the max is known and it makes more sense to display that way)\
\
The response to the server at run time is a little different for this control.\
See the link above for more detail.

## Table of contents

### Properties

- [default](../wiki/INumberOfInstances#default)
- [disabled](../wiki/INumberOfInstances#disabled)
- [entity](../wiki/INumberOfInstances#entity)
- [id](../wiki/INumberOfInstances#id)
- [label](../wiki/INumberOfInstances#label)
- [labelLength](../wiki/INumberOfInstances#labellength)
- [max](../wiki/INumberOfInstances#max)
- [min](../wiki/INumberOfInstances#min)
- [type](../wiki/INumberOfInstances#type)
- [value](../wiki/INumberOfInstances#value)

## Properties

### default

• `Optional` **default**: [`IEntityInstance`](../wiki/IEntityInstance)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:246

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:247

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:250

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:242

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:244

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:245

___

### max

• `Optional` **max**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:255

___

### min

• **min**: `number`

The minimum number of instances. 0 or greater.

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:254

___

### type

• **type**: ``"number_of_instances"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:243

___

### value

• `Optional` **value**: ``null`` \| [`IEntityInstance`](../wiki/IEntityInstance)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:248
