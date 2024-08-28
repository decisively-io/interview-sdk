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
- [labelDisplay](../wiki/TimeControl#labeldisplay)
- [labelLength](../wiki/TimeControl#labellength)
- [max](../wiki/TimeControl#max)
- [min](../wiki/TimeControl#min)
- [minutes\_increment](../wiki/TimeControl#minutes_increment)
- [required](../wiki/TimeControl#required)
- [showExplanation](../wiki/TimeControl#showexplanation)
- [type](../wiki/TimeControl#type)
- [value](../wiki/TimeControl#value)
- [version](../wiki/TimeControl#version)

## Properties

### allowSeconds

• `Optional` **allowSeconds**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:153

___

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:150

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:137

___

### default

• `Optional` **default**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:141

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:135

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:129

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:131

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:132

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:133

___

### max

• `Optional` **max**: `string`

Maximum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:145

___

### min

• `Optional` **min**: `string`

Minimum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:143

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:152

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:134

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:154

___

### type

• **type**: ``"time"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:130

___

### value

• `Optional` **value**: ``null`` \| `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:139

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
