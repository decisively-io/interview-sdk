# Interface: TextControl

Collects text from the user.

## Hierarchy

- `BaseControl`

  ↳ **`TextControl`**

## Table of contents

### Properties

- [attribute](../wiki/TextControl#attribute)
- [default](../wiki/TextControl#default)
- [disabled](../wiki/TextControl#disabled)
- [id](../wiki/TextControl#id)
- [label](../wiki/TextControl#label)
- [labelDisplay](../wiki/TextControl#labeldisplay)
- [labelLength](../wiki/TextControl#labellength)
- [max](../wiki/TextControl#max)
- [multi](../wiki/TextControl#multi)
- [required](../wiki/TextControl#required)
- [showExplanation](../wiki/TextControl#showexplanation)
- [type](../wiki/TextControl#type)
- [value](../wiki/TextControl#value)
- [variation](../wiki/TextControl#variation)
- [version](../wiki/TextControl#version)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:374](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L374)

___

### default

• `Optional` **default**: `string`

#### Defined in

[src/types/controls.ts:372](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L372)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:371](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L371)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:365](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L365)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:367](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L367)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:368](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L368)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:369](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L369)

___

### max

• `Optional` **max**: `number`

The maximum length of the string

#### Defined in

[src/types/controls.ts:377](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L377)

___

### multi

• `Optional` **multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxRows?` | `number` |
| `minRows?` | `number` |

#### Defined in

[src/types/controls.ts:379](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L379)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:370](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L370)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:383](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L383)

___

### type

• **type**: ``"text"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:366](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L366)

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

[src/types/controls.ts:375](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L375)

___

### variation

• `Optional` **variation**: { `type`: ``"email"``  } \| { `type`: ``"number"``  }

#### Defined in

[src/types/controls.ts:378](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L378)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
