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
- [sxForSeparateLabel](../wiki/FileControl#sxforseparatelabel)
- [type](../wiki/FileControl#type)
- [version](../wiki/FileControl#version)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:312](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L312)

___

### file\_type

• `Optional` **file\_type**: `string`

The types of file allowed (pdf docx etc)

#### Defined in

[src/types/controls.ts:316](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L316)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:304](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L304)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:306](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L306)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:307](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L307)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:309](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L309)

___

### max

• `Optional` **max**: `number`

The max number of files that can be uploaded. Defaults to 1

#### Defined in

[src/types/controls.ts:314](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L314)

___

### max\_size

• `Optional` **max\_size**: `number`

The maximum size of a document, in Mb

#### Defined in

[src/types/controls.ts:318](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L318)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:310](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L310)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:319](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L319)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:308](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L308)

___

### type

• **type**: ``"file"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:305](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L305)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/4a50c8c/src/types/controls.ts#L9)
