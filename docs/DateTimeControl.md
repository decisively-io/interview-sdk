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

[src/types/controls.ts:209](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L209)

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:193](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L193)

___

### date\_max

• `Optional` **date\_max**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

[src/types/controls.ts:201](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L201)

___

### date\_min

• `Optional` **date\_min**: `string`

'YYYY-MM-DD', 'now'

#### Defined in

[src/types/controls.ts:199](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L199)

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

[src/types/controls.ts:197](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L197)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:191](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L191)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:185](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L185)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:187](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L187)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:188](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L188)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:189](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L189)

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

[src/types/controls.ts:211](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L211)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:190](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L190)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

mui picker doesn't have this control

#### Defined in

[src/types/controls.ts:214](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L214)

___

### time\_max

• `Optional` **time\_max**: `string`

'HH:mm:ss'

#### Defined in

[src/types/controls.ts:205](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L205)

___

### time\_min

• `Optional` **time\_min**: `string`

'HH:mm:ss'

#### Defined in

[src/types/controls.ts:203](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L203)

___

### type

• **type**: ``"datetime"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:186](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L186)

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD HH:mm:ss'

#### Defined in

[src/types/controls.ts:195](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L195)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
