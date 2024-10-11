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
- [readOnly](../wiki/TextControl#readonly)
- [required](../wiki/TextControl#required)
- [showExplanation](../wiki/TextControl#showexplanation)
- [sxForSeparateLabel](../wiki/TextControl#sxforseparatelabel)
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

[src/types/controls.ts:405](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L405)

___

### default

• `Optional` **default**: `string`

#### Defined in

[src/types/controls.ts:403](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L403)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:402](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L402)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:395](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L395)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:397](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L397)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:398](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L398)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:400](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L400)

___

### max

• `Optional` **max**: `number`

The maximum length of the string

#### Defined in

[src/types/controls.ts:408](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L408)

___

### multi

• `Optional` **multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxRows?` | `number` |
| `minRows?` | `number` |

#### Defined in

[src/types/controls.ts:410](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L410)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:415](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L415)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:401](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L401)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:414](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L414)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:399](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L399)

___

### type

• **type**: ``"text"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:396](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L396)

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

[src/types/controls.ts:406](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L406)

___

### variation

• `Optional` **variation**: \{ `type`: ``"email"``  } \| \{ `type`: ``"number"``  }

#### Defined in

[src/types/controls.ts:409](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L409)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L9)
