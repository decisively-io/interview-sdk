# Interface: IDateTime

Allow a user to enter a date and time in one control. This should send an ISO date time string back to the server ('YYYY-MM-DD HH:mm:ssZ').
It's metadata is basically a merge of the date and time, but with seperate min/max.

## Table of contents

### Properties

- [amPmFormat](../wiki/IDateTime#ampmformat)
- [attribute](../wiki/IDateTime#attribute)
- [date\_max](../wiki/IDateTime#date_max)
- [date\_min](../wiki/IDateTime#date_min)
- [default](../wiki/IDateTime#default)
- [disabled](../wiki/IDateTime#disabled)
- [id](../wiki/IDateTime#id)
- [label](../wiki/IDateTime#label)
- [labelLength](../wiki/IDateTime#labellength)
- [minutes\_increment](../wiki/IDateTime#minutes_increment)
- [required](../wiki/IDateTime#required)
- [time\_max](../wiki/IDateTime#time_max)
- [time\_min](../wiki/IDateTime#time_min)
- [type](../wiki/IDateTime#type)
- [value](../wiki/IDateTime#value)

## Properties

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
 Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:129

___

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:114

___

### date\_max

• `Optional` **date\_max**: `string`

YYYY-MM-DD

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:121

___

### date\_min

• `Optional` **date\_min**: `string`

YYYY-MM-DD

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:119

___

### default

• `Optional` **default**: `string`

YYYY-MM-DD HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:117

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:112

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:107

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:109

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:110

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:131

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:111

___

### time\_max

• `Optional` **time\_max**: `string`

HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:125

___

### time\_min

• `Optional` **time\_min**: `string`

HH:mm:ss

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:123

___

### type

• **type**: ``"datetime"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:108

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:115
