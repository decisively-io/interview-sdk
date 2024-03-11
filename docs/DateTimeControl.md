# Interface: DateTimeControl

Allow a user to enter a date and time in one control. This should send an ISO date time string back to the server ('YYYY-MM-DD HH:mm:ssZ').
It's metadata is basically a merge of the date and time, but with seperate min/max.

## Hierarchy

- `BaseControl`

  ↳ **`DateTimeControl`**

## Table of contents

### Properties

- [amPmFormat](../wiki/DateTimeControl#ampmformat)
- [attribute](../wiki/DateTimeControl#attribute)
- [date\_max](../wiki/DateTimeControl#date_max)
- [date\_min](../wiki/DateTimeControl#date_min)
- [default](../wiki/DateTimeControl#default)
- [disabled](../wiki/DateTimeControl#disabled)
- [id](../wiki/DateTimeControl#id)
- [label](../wiki/DateTimeControl#label)
- [labelLength](../wiki/DateTimeControl#labellength)
- [minutes\_increment](../wiki/DateTimeControl#minutes_increment)
- [required](../wiki/DateTimeControl#required)
- [showExplanation](../wiki/DateTimeControl#showexplanation)
- [time\_max](../wiki/DateTimeControl#time_max)
- [time\_min](../wiki/DateTimeControl#time_min)
- [type](../wiki/DateTimeControl#type)
- [value](../wiki/DateTimeControl#value)

## Properties

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
 Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:165

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:149

___

### date\_max

• `Optional` **date\_max**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:157

___

### date\_min

• `Optional` **date\_min**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:155

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:153

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:147

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:142

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:144

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:145

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:167

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:146

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

mui picker doesn't have this control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:169

___

### time\_max

• `Optional` **time\_max**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:161

___

### time\_min

• `Optional` **time\_min**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:159

___

### type

• **type**: ``"datetime"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:143

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:151
