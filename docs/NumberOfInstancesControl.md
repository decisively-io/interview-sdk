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
- [readOnly](../wiki/NumberOfInstancesControl#readonly)
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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L8)

___

### default

• `Optional` **default**: [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

[src/types/controls.ts:365](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L365)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:366](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L366)

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

[src/types/controls.ts:370](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L370)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:358](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L358)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:360](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L360)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:361](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L361)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:363](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L363)

___

### max

• `Optional` **max**: `number`

#### Defined in

[src/types/controls.ts:375](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L375)

___

### min

• `Optional` **min**: `number`

The minimum number of instances. 0 or greater.

#### Defined in

[src/types/controls.ts:374](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L374)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:376](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L376)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:364](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L364)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:362](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L362)

___

### template

• `Optional` **template**: [`Control`](../wiki/Exports#control)[]

#### Defined in

[src/types/controls.ts:368](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L368)

___

### type

• **type**: ``"number_of_instances"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:359](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L359)

___

### value

• `Optional` **value**: ``null`` \| [`EntityInstance`](../wiki/EntityInstance)[]

#### Defined in

[src/types/controls.ts:367](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L367)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L9)
