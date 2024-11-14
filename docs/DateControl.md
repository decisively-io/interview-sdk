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
- [readOnly](../wiki/DateControl#readonly)
- [required](../wiki/DateControl#required)
- [showExplanation](../wiki/DateControl#showexplanation)
- [sxForSeparateLabel](../wiki/DateControl#sxforseparatelabel)
- [type](../wiki/DateControl#type)
- [value](../wiki/DateControl#value)
- [version](../wiki/DateControl#version)

## Properties

### allowManual

• `Optional` **allowManual**: ``true``

#### Defined in

[src/types/controls.ts:123](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L123)

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:125](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L125)

___

### default

• `Optional` **default**: `string`

'YYYY-MM-DD'

#### Defined in

[src/types/controls.ts:129](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L129)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:122](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L122)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:115](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L115)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:117](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L117)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:118](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L118)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:120](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L120)

___

### max

• `Optional` **max**: `string`

Maximum date allowed

#### Defined in

[src/types/controls.ts:133](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L133)

___

### min

• `Optional` **min**: `string`

Minimum date allowed

#### Defined in

[src/types/controls.ts:131](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L131)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:135](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L135)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:121](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L121)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:134](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L134)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:119](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L119)

___

### type

• **type**: ``"date"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:116](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L116)

___

### value

• `Optional` **value**: ``null`` \| `string`

'YYYY-MM-DD'

#### Defined in

[src/types/controls.ts:127](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L127)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L9)
