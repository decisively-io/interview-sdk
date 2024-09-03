# Interface: BooleanControl

A control to collect a true or false response from a user. Usually rendered as a checkbox.
Note: the control needs to allow for an indeterminate (or uncertain) response - i.e. the
user did not provide an answer. You can't send back undefined as the server will interpret
that as requiring an answer again later. Send back null to mark the question as reviewed
but not
}answered.

## Hierarchy

- `BaseControl`

  ↳ **`BooleanControl`**

## Table of contents

### Properties

- [attribute](../wiki/BooleanControl#attribute)
- [default](../wiki/BooleanControl#default)
- [disabled](../wiki/BooleanControl#disabled)
- [id](../wiki/BooleanControl#id)
- [label](../wiki/BooleanControl#label)
- [labelDisplay](../wiki/BooleanControl#labeldisplay)
- [labelLength](../wiki/BooleanControl#labellength)
- [required](../wiki/BooleanControl#required)
- [showExplanation](../wiki/BooleanControl#showexplanation)
- [type](../wiki/BooleanControl#type)
- [value](../wiki/BooleanControl#value)
- [version](../wiki/BooleanControl#version)

## Properties

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:34](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L34)

___

### default

• `Optional` **default**: `boolean`

#### Defined in

[src/types/controls.ts:31](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L31)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:30](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L30)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:24](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L24)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:26](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L26)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:27](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L27)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:28](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L28)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:29](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L29)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:35](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L35)

___

### type

• **type**: ``"boolean"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:25](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L25)

___

### value

• `Optional` **value**: ``null`` \| `boolean`

#### Defined in

[src/types/controls.ts:32](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L32)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
