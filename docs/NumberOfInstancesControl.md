# Interface: NumberOfInstancesControl

Collects the number of instances of an entity the user will want. \
This will be used to control the repetition of steps to collect information \
for these instances. See . This should be displayed as a number input field \
or a dropdown (if the max is known and it makes more sense to display that way)\
\
The response to the server at run time is a little different for this control.\
See the link above for more detail.

## Hierarchy

- `BaseControl`

  ↳ **`NumberOfInstancesControl`**

## Table of contents

### Properties

- [attribute](../wiki/NumberOfInstancesControl#attribute)
- [default](../wiki/NumberOfInstancesControl#default)
- [disabled](../wiki/NumberOfInstancesControl#disabled)
- [entity](../wiki/NumberOfInstancesControl#entity)
- [id](../wiki/NumberOfInstancesControl#id)
- [label](../wiki/NumberOfInstancesControl#label)
- [labelDisplay](../wiki/NumberOfInstancesControl#labeldisplay)
- [labelLength](../wiki/NumberOfInstancesControl#labellength)
- [max](../wiki/NumberOfInstancesControl#max)
- [min](../wiki/NumberOfInstancesControl#min)
- [required](../wiki/NumberOfInstancesControl#required)
- [sxForSeparateLabel](../wiki/NumberOfInstancesControl#sxforseparatelabel)
- [template](../wiki/NumberOfInstancesControl#template)
- [type](../wiki/NumberOfInstancesControl#type)
- [value](../wiki/NumberOfInstancesControl#value)
- [version](../wiki/NumberOfInstancesControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### default

• `Optional` **default**: [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:324

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:325

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:329

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:317

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:319

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:320

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:322

___

### max

• `Optional` **max**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:334

___

### min

• `Optional` **min**: `number`

The minimum number of instances. 0 or greater.

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:333

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:323

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:321

___

### template

• `Optional` **template**: [`Control`](../wiki/Exports#control)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:327

___

### type

• **type**: ``"number_of_instances"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:318

___

### value

• `Optional` **value**: ``null`` \| [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:326

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
