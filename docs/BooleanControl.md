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
- [readOnly](../wiki/BooleanControl#readonly)
- [required](../wiki/BooleanControl#required)
- [showExplanation](../wiki/BooleanControl#showexplanation)
- [sxForSeparateLabel](../wiki/BooleanControl#sxforseparatelabel)
- [type](../wiki/BooleanControl#type)
- [value](../wiki/BooleanControl#value)
- [version](../wiki/BooleanControl#version)

## Properties

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:35](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L35)

___

### default

• `Optional` **default**: `boolean`

#### Defined in

[src/types/controls.ts:32](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L32)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:31](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L31)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:24](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L24)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:26](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L26)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:27](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L27)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:29](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L29)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:37](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L37)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:30](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L30)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:36](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L36)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:28](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L28)

___

### type

• **type**: ``"boolean"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:25](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L25)

___

### value

• `Optional` **value**: ``null`` \| `boolean`

#### Defined in

[src/types/controls.ts:33](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L33)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
