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

[src/types/controls.ts:63](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L63)

___

### default

• `Optional` **default**: `number`

#### Defined in

[src/types/controls.ts:61](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L61)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:60](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L60)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:53](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L53)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:55](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L55)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:56](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L56)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:58](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L58)

___

### max

• `Optional` **max**: `number`

Maximum number allowed - if not set assume no restriction

#### Defined in

[src/types/controls.ts:70](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L70)

___

### min

• `Optional` **min**: `number`

Minimum number allowed - if not set assume no restriction

#### Defined in

[src/types/controls.ts:68](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L68)

___

### readOnly

• `Optional` **readOnly**: `boolean`

#### Defined in

[src/types/controls.ts:72](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L72)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:59](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L59)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:71](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L71)

___

### sxForSeparateLabel

• `Optional` **sxForSeparateLabel**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/controls.ts:57](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L57)

___

### symbol

• `Optional` **symbol**: `string`

**`Default`**

```ts
'$''
```

#### Defined in

[src/types/controls.ts:66](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L66)

___

### type

• **type**: ``"currency"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:54](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L54)

___

### value

• `Optional` **value**: ``null`` \| `number`

#### Defined in

[src/types/controls.ts:64](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L64)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
