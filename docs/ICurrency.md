# Interface: ICurrency

A number input for inputting currency values. This should:
- Show the currency symbol
- Allow only numbers to be inputted. There is no restriction on the number of decimal places
- Negative numbers are allowed (unless the min is set to 0)

## Table of contents

### Properties

- [attribute](../wiki/ICurrency#attribute)
- [default](../wiki/ICurrency#default)
- [disabled](../wiki/ICurrency#disabled)
- [id](../wiki/ICurrency#id)
- [label](../wiki/ICurrency#label)
- [labelLength](../wiki/ICurrency#labellength)
- [max](../wiki/ICurrency#max)
- [min](../wiki/ICurrency#min)
- [required](../wiki/ICurrency#required)
- [showExplanation](../wiki/ICurrency#showexplanation)
- [symbol](../wiki/ICurrency#symbol)
- [type](../wiki/ICurrency#type)
- [value](../wiki/ICurrency#value)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:37

___

### default

• `Optional` **default**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:35

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:34

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:29

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:31

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:32

___

### max

• `Optional` **max**: `number`

Maximum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:44

___

### min

• `Optional` **min**: `number`

Minimum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:42

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:33

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:45

___

### symbol

• `Optional` **symbol**: `string`

**`Default`**

```ts
'$''
```

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:40

___

### type

• **type**: ``"currency"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:30

___

### value

• `Optional` **value**: ``null`` \| `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:38
