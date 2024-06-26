# Interface: CurrencyControl

A number input for inputting currency values. This should:
- Show the currency symbol
- Allow only numbers to be inputted. There is no restriction on the number of decimal places
- Negative numbers are allowed (unless the min is set to 0)

## Hierarchy

- `BaseControl`

  ↳ **`CurrencyControl`**

## Table of contents

### Properties

- [attribute](../wiki/CurrencyControl#attribute)
- [default](../wiki/CurrencyControl#default)
- [disabled](../wiki/CurrencyControl#disabled)
- [id](../wiki/CurrencyControl#id)
- [label](../wiki/CurrencyControl#label)
- [labelDisplay](../wiki/CurrencyControl#labeldisplay)
- [labelLength](../wiki/CurrencyControl#labellength)
- [max](../wiki/CurrencyControl#max)
- [min](../wiki/CurrencyControl#min)
- [required](../wiki/CurrencyControl#required)
- [showExplanation](../wiki/CurrencyControl#showexplanation)
- [symbol](../wiki/CurrencyControl#symbol)
- [type](../wiki/CurrencyControl#type)
- [value](../wiki/CurrencyControl#value)
- [version](../wiki/CurrencyControl#version)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:51

___

### default

• `Optional` **default**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:49

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:48

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:42

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:44

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:45

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:46

___

### max

• `Optional` **max**: `number`

Maximum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:58

___

### min

• `Optional` **min**: `number`

Minimum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:56

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:47

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:59

___

### symbol

• `Optional` **symbol**: `string`

**`Default`**

```ts
'$''
```

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:54

___

### type

• **type**: ``"currency"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:43

___

### value

• `Optional` **value**: ``null`` \| `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:52

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
