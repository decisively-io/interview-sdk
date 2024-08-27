# Interface: BooleanControl

A control to collect a true or false response from a user. Usually rendered as a checkbox.
Note: the control needs to allow for an indeterminate (or uncertain) response - i.e. the
user did not provide an answer. You can't send back undefined as the server will interpret
that as requiring an answer again later. Send back null to mark the question as reviewed
but not
}answered.

## Hierarchy

- `BaseControl`

  ↳ **`BooleanControl`**

## Table of contents

### Properties

- [attribute](../wiki/BooleanControl#attribute)
- [default](../wiki/BooleanControl#default)
- [disabled](../wiki/BooleanControl#disabled)
- [id](../wiki/BooleanControl#id)
- [label](../wiki/BooleanControl#label)
- [labelDisplay](../wiki/BooleanControl#labeldisplay)
- [labelLength](../wiki/BooleanControl#labellength)
- [required](../wiki/BooleanControl#required)
- [showExplanation](../wiki/BooleanControl#showexplanation)
- [sxForSeparateLabel](../wiki/BooleanControl#sxforseparatelabel)
- [type](../wiki/BooleanControl#type)
- [value](../wiki/BooleanControl#value)
- [version](../wiki/BooleanControl#version)

## Properties

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:28

___

### default

• `Optional` **default**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:26

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:25

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:18

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:20

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:21

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:23

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:24

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:29

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:22

___

### type

• **type**: ``"boolean"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:19

___

### value

• `Optional` **value**: ``null`` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:27

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
