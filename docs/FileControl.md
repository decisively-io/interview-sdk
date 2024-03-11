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
- [labelLength](../wiki/FileControl#labellength)
- [max](../wiki/FileControl#max)
- [max\_size](../wiki/FileControl#max_size)
- [required](../wiki/FileControl#required)
- [showExplanation](../wiki/FileControl#showexplanation)
- [type](../wiki/FileControl#type)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:239

___

### file\_type

• `Optional` **file\_type**: `string`

The types of file allowed (pdf docx etc)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:243

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:233

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:235

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:236

___

### max

• `Optional` **max**: `number`

The max number of files that can be uploaded. Defaults to 1

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:241

___

### max\_size

• `Optional` **max\_size**: `number`

The maximum size of a document, in Mb

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:245

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:237

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:246

___

### type

• **type**: ``"file"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:234
