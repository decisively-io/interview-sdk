# Interface: TimeControl

Allow a user to enter a time. This should send an ISO time string back to the server ('HH:mm:ss').
Do not send a date component back.

## Hierarchy

- `BaseControl`

  ↳ **`TimeControl`**

## Table of contents

### Properties

- [allowSeconds](../wiki/TimeControl#allowseconds)
- [amPmFormat](../wiki/TimeControl#ampmformat)
- [attribute](../wiki/TimeControl#attribute)
- [default](../wiki/TimeControl#default)
- [disabled](../wiki/TimeControl#disabled)
- [id](../wiki/TimeControl#id)
- [label](../wiki/TimeControl#label)
- [labelLength](../wiki/TimeControl#labellength)
- [max](../wiki/TimeControl#max)
- [min](../wiki/TimeControl#min)
- [minutes\_increment](../wiki/TimeControl#minutes_increment)
- [required](../wiki/TimeControl#required)
- [showExplanation](../wiki/TimeControl#showexplanation)
- [type](../wiki/TimeControl#type)
- [value](../wiki/TimeControl#value)

## Properties

### allowSeconds

• `Optional` **allowSeconds**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:127

___

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:124

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:111

___

### default

• `Optional` **default**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:115

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:109

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:104

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:106

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:107

___

### max

• `Optional` **max**: `string`

Maximum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:119

___

### min

• `Optional` **min**: `string`

Minimum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:117

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:126

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:108

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:128

___

### type

• **type**: ``"time"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:105

___

### value

• `Optional` **value**: ``null`` \| `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:113
