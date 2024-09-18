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

[src/types/controls.ts:391](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L391)

___

### default

• `Optional` **default**: `string`

#### Defined in

[src/types/controls.ts:389](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L389)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:388](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L388)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:381](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L381)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:383](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L383)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:384](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L384)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:386](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L386)

___

### max

• `Optional` **max**: `number`

The maximum length of the string

#### Defined in

[src/types/controls.ts:394](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L394)

___

### multi

• `Optional` **multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxRows?` | `number` |
| `minRows?` | `number` |

#### Defined in

[src/types/controls.ts:396](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L396)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:401](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L401)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:387](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L387)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:400](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L400)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:385](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L385)

___

### type

• **type**: ``"text"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:382](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L382)

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

[src/types/controls.ts:392](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L392)

___

### variation

• `Optional` **variation**: \{ `type`: ``"email"``  } \| \{ `type`: ``"number"``  }

#### Defined in

[src/types/controls.ts:395](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L395)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
