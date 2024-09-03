# Interface: RepeatingContainerControl<C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`RepeatingContainerControl`**

  ↳↳ [`RenderableRepeatingContainerControl`](../wiki/RenderableRepeatingContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/RepeatingContainerControl#attribute)
- [controls](../wiki/RepeatingContainerControl#controls)
- [display](../wiki/RepeatingContainerControl#display)
- [entity](../wiki/RepeatingContainerControl#entity)
- [filter](../wiki/RepeatingContainerControl#filter)
- [id](../wiki/RepeatingContainerControl#id)
- [isFirst](../wiki/RepeatingContainerControl#isfirst)
- [isLast](../wiki/RepeatingContainerControl#islast)
- [showBorders](../wiki/RepeatingContainerControl#showborders)
- [showHeaders](../wiki/RepeatingContainerControl#showheaders)
- [sort](../wiki/RepeatingContainerControl#sort)
- [type](../wiki/RepeatingContainerControl#type)
- [version](../wiki/RepeatingContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### controls

• **controls**: `C`[]

#### Defined in

[src/types/controls.ts:475](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L475)

___

### display

• `Optional` **display**: ``"list"`` \| ``"table"``

if `display` is `undefined` we should assume `"list"`

#### Defined in

[src/types/controls.ts:463](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L463)

___

### entity

• **entity**: `string`

#### Defined in

[src/types/controls.ts:461](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L461)

___

### filter

• `Optional` **filter**: ``null`` \| `string`

`filter` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

[src/types/controls.ts:465](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L465)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:459](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L459)

___

### isFirst

• `Optional` **isFirst**: `boolean`

indicates if this is the first instance of a repeating series (calculated at runtime)

#### Defined in

[src/types/controls.ts:473](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L473)

___

### isLast

• `Optional` **isLast**: `boolean`

#### Defined in

[src/types/controls.ts:474](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L474)

___

### showBorders

• `Optional` **showBorders**: `boolean`

`showBorders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

[src/types/controls.ts:469](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L469)

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

`showHeaders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

[src/types/controls.ts:471](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L471)

___

### sort

• `Optional` **sort**: ``null`` \| `string`

`sort` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

[src/types/controls.ts:467](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L467)

___

### type

• **type**: ``"repeating_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:460](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L460)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
