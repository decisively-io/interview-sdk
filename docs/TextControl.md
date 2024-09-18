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

[src/types/controls.ts:400](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L400)

___

### default

• `Optional` **default**: `string`

#### Defined in

[src/types/controls.ts:398](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L398)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:397](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L397)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:390](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L390)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:392](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L392)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:393](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L393)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:395](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L395)

___

### max

• `Optional` **max**: `number`

The maximum length of the string

#### Defined in

[src/types/controls.ts:403](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L403)

___

### multi

• `Optional` **multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxRows?` | `number` |
| `minRows?` | `number` |

#### Defined in

[src/types/controls.ts:405](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L405)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:410](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L410)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:396](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L396)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:409](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L409)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:394](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L394)

___

### type

• **type**: ``"text"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:391](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L391)

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

[src/types/controls.ts:401](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L401)

___

### variation

• `Optional` **variation**: \{ `type`: ``"email"``  } \| \{ `type`: ``"number"``  }

#### Defined in

[src/types/controls.ts:404](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L404)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L9)
