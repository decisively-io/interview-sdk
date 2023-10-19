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
- [type](../wiki/ITime#type)
- [value](../wiki/ITime#value)

## Properties

### allowSeconds

• `Optional` **allowSeconds**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:97

___

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:94

___

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:82

___

### default

• `Optional` **default**: `string`

HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:85

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:80

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:75

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:77

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:78

___

### max

• `Optional` **max**: `string`

Maximum time allowed, HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:89

___

### min

• `Optional` **min**: `string`

Minimum time allowed, HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:87

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:96

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:79

___

### type

• **type**: ``"time"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:76

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:83
