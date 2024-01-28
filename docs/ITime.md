# Interface: ITime

Allow a user to enter a time. This should send an ISO time string back to the server ('HH:mm:ss').
Do not send a date component back.

## Table of contents

### Properties

- [allowSeconds](../wiki/ITime#allowseconds)
- [amPmFormat](../wiki/ITime#ampmformat)
- [attribute](../wiki/ITime#attribute)
- [default](../wiki/ITime#default)
- [disabled](../wiki/ITime#disabled)
- [id](../wiki/ITime#id)
- [label](../wiki/ITime#label)
- [labelLength](../wiki/ITime#labellength)
- [max](../wiki/ITime#max)
- [min](../wiki/ITime#min)
- [minutes\_increment](../wiki/ITime#minutes_increment)
- [required](../wiki/ITime#required)
- [showExplanation](../wiki/ITime#showexplanation)
- [type](../wiki/ITime#type)
- [value](../wiki/ITime#value)

## Properties

### allowSeconds

• `Optional` **allowSeconds**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:109

___

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:106

___

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:93

___

### default

• `Optional` **default**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:97

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:91

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:86

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:88

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:89

___

### max

• `Optional` **max**: `string`

Maximum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:101

___

### min

• `Optional` **min**: `string`

Minimum time allowed, 'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:99

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:108

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:90

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:110

___

### type

• **type**: ``"time"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:87

___

### value

• `Optional` **value**: ``null`` \| `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:95
