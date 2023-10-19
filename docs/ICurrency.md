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
- [symbol](../wiki/ICurrency#symbol)
- [type](../wiki/ICurrency#type)
- [value](../wiki/ICurrency#value)

## Properties

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:36

___

### default

• `Optional` **default**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:34

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:33

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:28

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:30

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:31

___

### max

• `Optional` **max**: `number`

Maximum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:43

___

### min

• `Optional` **min**: `number`

Minimum number allowed - if not set assume no restriction

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:41

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:32

___

### symbol

• `Optional` **symbol**: `string`

**`Default`**

```ts
'$''
```

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:39

___

### type

• **type**: ``"currency"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:29

___

### value

• `Optional` **value**: ``null`` \| `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:37
