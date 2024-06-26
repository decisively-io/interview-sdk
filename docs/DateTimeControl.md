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
- [labelDisplay](../wiki/DateTimeControl#labeldisplay)
- [labelLength](../wiki/DateTimeControl#labellength)
- [minutes\_increment](../wiki/DateTimeControl#minutes_increment)
- [required](../wiki/DateTimeControl#required)
- [showExplanation](../wiki/DateTimeControl#showexplanation)
- [time\_max](../wiki/DateTimeControl#time_max)
- [time\_min](../wiki/DateTimeControl#time_min)
- [type](../wiki/DateTimeControl#type)
- [value](../wiki/DateTimeControl#value)
- [version](../wiki/DateTimeControl#version)

## Properties

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
 Regardless of this input the server expects 24 hour time

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:192

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:176

___

### date\_max

• `Optional` **date\_max**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:184

___

### date\_min

• `Optional` **date\_min**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:182

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:180

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:174

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:168

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:170

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:171

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:172

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:194

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:173

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

mui picker doesn't have this control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:196

___

### time\_max

• `Optional` **time\_max**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:188

___

### time\_min

• `Optional` **time\_min**: `string`

'HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:186

___

### type

• **type**: ``"datetime"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:169

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:178

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
