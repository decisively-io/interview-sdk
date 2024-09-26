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
- [readOnly](../wiki/CurrencyControl#readonly)
- [required](../wiki/CurrencyControl#required)
- [showExplanation](../wiki/CurrencyControl#showexplanation)
- [sxForSeparateLabel](../wiki/CurrencyControl#sxforseparatelabel)
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

[src/types/controls.ts:72](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L72)

___

### default

• `Optional` **default**: `number`

#### Defined in

[src/types/controls.ts:70](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L70)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:69](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L69)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:62](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L62)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:64](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L64)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:65](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L65)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:67](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L67)

___

### max

• `Optional` **max**: `number`

Maximum number allowed - if not set assume no restriction

#### Defined in

[src/types/controls.ts:79](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L79)

___

### min

• `Optional` **min**: `number`

Minimum number allowed - if not set assume no restriction

#### Defined in

[src/types/controls.ts:77](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L77)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:81](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L81)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:68](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L68)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:80](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L80)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:66](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L66)

___

### symbol

• `Optional` **symbol**: `string`

**`Default`**

```ts
'$''
```

#### Defined in

[src/types/controls.ts:75](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L75)

___

### type

• **type**: ``"currency"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:63](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L63)

___

### value

• `Optional` **value**: ``null`` \| `number`

#### Defined in

[src/types/controls.ts:73](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L73)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/types/controls.ts#L9)
