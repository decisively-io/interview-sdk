# Interface: FileControl

**IMPORTANT** This is not currently supported\
Allow a user to upload a file. This metadata is still under construction

## Hierarchy

- `BaseControl`

  ↳ **`FileControl`**

## Table of contents

### Properties

- [attribute](../wiki/FileControl#attribute)
- [file\_type](../wiki/FileControl#file_type)
- [id](../wiki/FileControl#id)
- [label](../wiki/FileControl#label)
- [labelDisplay](../wiki/FileControl#labeldisplay)
- [labelLength](../wiki/FileControl#labellength)
- [max](../wiki/FileControl#max)
- [max\_size](../wiki/FileControl#max_size)
- [required](../wiki/FileControl#required)
- [showExplanation](../wiki/FileControl#showexplanation)
- [type](../wiki/FileControl#type)
- [version](../wiki/FileControl#version)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:292](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L292)

___

### file\_type

• `Optional` **file\_type**: `string`

The types of file allowed (pdf docx etc)

#### Defined in

[src/types/controls.ts:296](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L296)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:285](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L285)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:287](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L287)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:288](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L288)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:289](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L289)

___

### max

• `Optional` **max**: `number`

The max number of files that can be uploaded. Defaults to 1

#### Defined in

[src/types/controls.ts:294](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L294)

___

### max\_size

• `Optional` **max\_size**: `number`

The maximum size of a document, in Mb

#### Defined in

[src/types/controls.ts:298](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L298)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:290](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L290)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:299](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L299)

___

### type

• **type**: ``"file"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:286](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L286)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
