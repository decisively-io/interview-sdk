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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:275

___

### file\_type

• `Optional` **file\_type**: `string`

The types of file allowed (pdf docx etc)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:279

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:267

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:269

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:270

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:272

___

### max

• `Optional` **max**: `number`

The max number of files that can be uploaded. Defaults to 1

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:277

___

### max\_size

• `Optional` **max\_size**: `number`

The maximum size of a document, in Mb

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:281

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:273

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:282

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:271

___

### type

• **type**: ``"file"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:268

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
