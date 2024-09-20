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
- [readOnly](../wiki/TimeControl#readonly)
- [required](../wiki/TimeControl#required)
- [showExplanation](../wiki/TimeControl#showexplanation)
- [sxForSeparateLabel](../wiki/TimeControl#sxforseparatelabel)
- [type](../wiki/TimeControl#type)
- [value](../wiki/TimeControl#value)
- [version](../wiki/TimeControl#version)

## Properties

### allowSeconds

• `Optional` **allowSeconds**: ``true``

#### Defined in

[src/types/controls.ts:183](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L183)

___

### amPmFormat

• `Optional` **amPmFormat**: ``true``

Whether to display time with an 'AM/PM' or in 24 hour time.
Regardless of this input the server expects 24 hour time

#### Defined in

[src/types/controls.ts:180](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L180)

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:167](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L167)

___

### default

• `Optional` **default**: `string`

'HH:mm:ss'

#### Defined in

[src/types/controls.ts:171](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L171)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:165](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L165)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:158](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L158)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:160](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L160)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:161](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L161)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:163](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L163)

___

### max

• `Optional` **max**: `string`

Maximum time allowed, 'HH:mm:ss'

#### Defined in

[src/types/controls.ts:175](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L175)

___

### min

• `Optional` **min**: `string`

Minimum time allowed, 'HH:mm:ss'

#### Defined in

[src/types/controls.ts:173](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L173)

___

### minutes\_increment

• `Optional` **minutes\_increment**: `number`

Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60

#### Defined in

[src/types/controls.ts:182](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L182)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:185](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L185)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:164](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L164)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:184](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L184)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:162](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L162)

___

### type

• **type**: ``"time"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:159](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L159)

___

### value

• `Optional` **value**: ``null`` \| `string`

'HH:mm:ss'

#### Defined in

[src/types/controls.ts:169](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L169)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/types/controls.ts#L9)
