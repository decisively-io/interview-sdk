# Interface: DateControl

Allow a user to enter a date. This should send an ISO date string back to the server ('YYYY-MM-DD').
Do not send a time component back.

## Hierarchy

- `BaseControl`

  ↳ **`DateControl`**

## Table of contents

### Properties

- [allowManual](../wiki/DateControl#allowmanual)
- [attribute](../wiki/DateControl#attribute)
- [default](../wiki/DateControl#default)
- [disabled](../wiki/DateControl#disabled)
- [id](../wiki/DateControl#id)
- [label](../wiki/DateControl#label)
- [labelDisplay](../wiki/DateControl#labeldisplay)
- [labelLength](../wiki/DateControl#labellength)
- [max](../wiki/DateControl#max)
- [min](../wiki/DateControl#min)
- [required](../wiki/DateControl#required)
- [showExplanation](../wiki/DateControl#showexplanation)
- [sxForSeparateLabel](../wiki/DateControl#sxforseparatelabel)
- [type](../wiki/DateControl#type)
- [value](../wiki/DateControl#value)
- [version](../wiki/DateControl#version)

## Properties

### allowManual

• `Optional` **allowManual**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:101

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:103

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:107

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:100

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:93

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:95

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:96

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:98

___

### max

• `Optional` **max**: `string`

Maximum date allowed

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:111

___

### min

• `Optional` **min**: `string`

Minimum date allowed

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:109

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:99

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:112

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:97

___

### type

• **type**: ``"date"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:94

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:105

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
