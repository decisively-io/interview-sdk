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
- [labelLength](../wiki/DateControl#labellength)
- [max](../wiki/DateControl#max)
- [min](../wiki/DateControl#min)
- [required](../wiki/DateControl#required)
- [showExplanation](../wiki/DateControl#showexplanation)
- [type](../wiki/DateControl#type)
- [value](../wiki/DateControl#value)

## Properties

### allowManual

• `Optional` **allowManual**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:73

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:75

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:79

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:72

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:67

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:69

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:70

___

### max

• `Optional` **max**: `string`

Maximum date allowed, YYYY-MM-DD

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:83

___

### min

• `Optional` **min**: `string`

Minimum date allowed, YYYY-MM-DD

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:81

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:71

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:84

___

### type

• **type**: ``"date"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:68

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:77
