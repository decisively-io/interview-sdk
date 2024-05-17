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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:344

___

### default

• `Optional` **default**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:342

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:341

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:335

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:337

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:338

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:339

___

### max

• `Optional` **max**: `number`

The maximum length of the string

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:347

___

### multi

• `Optional` **multi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxRows?` | `number` |
| `minRows?` | `number` |

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:353

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:340

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:357

___

### type

• **type**: ``"text"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:336

___

### value

• `Optional` **value**: ``null`` \| `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:345

___

### variation

• `Optional` **variation**: \{ `type`: ``"email"``  } \| \{ `type`: ``"number"``  }

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:348

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
