# Interface: RenderableRepeatingContainerControl

## Hierarchy

- [`RepeatingContainerControl`](../wiki/RepeatingContainerControl)\<[`RenderableControl`](../wiki/Exports#renderablecontrol)\>

  ↳ **`RenderableRepeatingContainerControl`**

## Table of contents

### Properties

- [attribute](../wiki/RenderableRepeatingContainerControl#attribute)
- [controls](../wiki/RenderableRepeatingContainerControl#controls)
- [display](../wiki/RenderableRepeatingContainerControl#display)
- [entity](../wiki/RenderableRepeatingContainerControl#entity)
- [filter](../wiki/RenderableRepeatingContainerControl#filter)
- [id](../wiki/RenderableRepeatingContainerControl#id)
- [isFirst](../wiki/RenderableRepeatingContainerControl#isfirst)
- [isLast](../wiki/RenderableRepeatingContainerControl#islast)
- [showBorders](../wiki/RenderableRepeatingContainerControl#showborders)
- [showHeaders](../wiki/RenderableRepeatingContainerControl#showheaders)
- [sort](../wiki/RenderableRepeatingContainerControl#sort)
- [type](../wiki/RenderableRepeatingContainerControl#type)
- [version](../wiki/RenderableRepeatingContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[attribute](../wiki/RepeatingContainerControl#attribute)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### controls

• **controls**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[controls](../wiki/RepeatingContainerControl#controls)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:427

___

### display

• `Optional` **display**: ``"list"`` \| ``"table"``

if `display` is `undefined` we should assume `"list"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[display](../wiki/RepeatingContainerControl#display)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:415

___

### entity

• **entity**: `string`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[entity](../wiki/RepeatingContainerControl#entity)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:413

___

### filter

• `Optional` **filter**: ``null`` \| `string`

`filter` is an attributeId and is only relevant when `display` is `"table"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[filter](../wiki/RepeatingContainerControl#filter)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:417

___

### id

• **id**: `string`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[id](../wiki/RepeatingContainerControl#id)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:411

___

### isFirst

• `Optional` **isFirst**: `boolean`

indicates if this is the first instance of a repeating series (calculated at runtime)

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[isFirst](../wiki/RepeatingContainerControl#isfirst)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:425

___

### isLast

• `Optional` **isLast**: `boolean`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[isLast](../wiki/RepeatingContainerControl#islast)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:426

___

### showBorders

• `Optional` **showBorders**: `boolean`

`showBorders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[showBorders](../wiki/RepeatingContainerControl#showborders)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:421

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

`showHeaders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[showHeaders](../wiki/RepeatingContainerControl#showheaders)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:423

___

### sort

• `Optional` **sort**: ``null`` \| `string`

`sort` is an attributeId and is only relevant when `display` is `"table"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[sort](../wiki/RepeatingContainerControl#sort)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:419

___

### type

• **type**: ``"repeating_container"``

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[type](../wiki/RepeatingContainerControl#type)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:412

___

### version

• `Optional` **version**: `number`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[version](../wiki/RepeatingContainerControl#version)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
