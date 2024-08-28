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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### controls

• **controls**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:427

___

### display

• `Optional` **display**: ``"list"`` \| ``"table"``

if `display` is `undefined` we should assume `"list"`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:415

___

### entity

• **entity**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:413

___

### filter

• `Optional` **filter**: ``null`` \| `string`

`filter` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:417

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:411

___

### isFirst

• `Optional` **isFirst**: `boolean`

indicates if this is the first instance of a repeating series (calculated at runtime)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:425

___

### isLast

• `Optional` **isLast**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:426

___

### showBorders

• `Optional` **showBorders**: `boolean`

`showBorders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:421

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

`showHeaders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:423

___

### sort

• `Optional` **sort**: ``null`` \| `string`

`sort` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:419

___

### type

• **type**: ``"repeating_container"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:412

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
