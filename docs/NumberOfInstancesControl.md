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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### default

• `Optional` **default**: [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

[src/types/controls.ts:344](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L344)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:345](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L345)

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

[src/types/controls.ts:349](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L349)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:338](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L338)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:340](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L340)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:341](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L341)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:342](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L342)

___

### max

• `Optional` **max**: `number`

#### Defined in

[src/types/controls.ts:354](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L354)

___

### min

• `Optional` **min**: `number`

The minimum number of instances. 0 or greater.

#### Defined in

[src/types/controls.ts:353](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L353)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:343](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L343)

___

### template

• `Optional` **template**: [`Control`](../wiki/Exports#control)[]

#### Defined in

[src/types/controls.ts:347](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L347)

___

### type

• **type**: ``"number_of_instances"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:339](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L339)

___

### value

• `Optional` **value**: ``null`` \| [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

[src/types/controls.ts:346](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L346)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
