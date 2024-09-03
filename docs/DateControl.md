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
- [type](../wiki/DateControl#type)
- [value](../wiki/DateControl#value)
- [version](../wiki/DateControl#version)

## Properties

### allowManual

• `Optional` **allowManual**: ``true``

#### Defined in

[src/types/controls.ts:109](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L109)

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:111](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L111)

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD'

#### Defined in

[src/types/controls.ts:115](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L115)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:108](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L108)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:102](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L102)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:104](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L104)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:105](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L105)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:106](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L106)

___

### max

• `Optional` **max**: `string`

Maximum date allowed

#### Defined in

[src/types/controls.ts:119](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L119)

___

### min

• `Optional` **min**: `string`

Minimum date allowed

#### Defined in

[src/types/controls.ts:117](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L117)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:107](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L107)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:120](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L120)

___

### type

• **type**: ``"date"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:103](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L103)

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD'

#### Defined in

[src/types/controls.ts:113](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L113)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
