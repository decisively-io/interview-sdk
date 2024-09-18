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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L8)

___

### controls

• **controls**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[controls](../wiki/RepeatingContainerControl#controls)

#### Defined in

[src/types/controls.ts:514](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L514)

___

### display

• `Optional` **display**: ``"list"`` \| ``"table"``

if `display` is `undefined` we should assume `"list"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[display](../wiki/RepeatingContainerControl#display)

#### Defined in

[src/types/controls.ts:502](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L502)

___

### entity

• **entity**: `string`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[entity](../wiki/RepeatingContainerControl#entity)

#### Defined in

[src/types/controls.ts:500](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L500)

___

### filter

• `Optional` **filter**: ``null`` \| `string`

`filter` is an attributeId and is only relevant when `display` is `"table"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[filter](../wiki/RepeatingContainerControl#filter)

#### Defined in

[src/types/controls.ts:504](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L504)

___

### id

• **id**: `string`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[id](../wiki/RepeatingContainerControl#id)

#### Defined in

[src/types/controls.ts:498](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L498)

___

### isFirst

• `Optional` **isFirst**: `boolean`

indicates if this is the first instance of a repeating series (calculated at runtime)

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[isFirst](../wiki/RepeatingContainerControl#isfirst)

#### Defined in

[src/types/controls.ts:512](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L512)

___

### isLast

• `Optional` **isLast**: `boolean`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[isLast](../wiki/RepeatingContainerControl#islast)

#### Defined in

[src/types/controls.ts:513](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L513)

___

### showBorders

• `Optional` **showBorders**: `boolean`

`showBorders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[showBorders](../wiki/RepeatingContainerControl#showborders)

#### Defined in

[src/types/controls.ts:508](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L508)

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

`showHeaders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[showHeaders](../wiki/RepeatingContainerControl#showheaders)

#### Defined in

[src/types/controls.ts:510](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L510)

___

### sort

• `Optional` **sort**: ``null`` \| `string`

`sort` is an attributeId and is only relevant when `display` is `"table"`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[sort](../wiki/RepeatingContainerControl#sort)

#### Defined in

[src/types/controls.ts:506](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L506)

___

### type

• **type**: ``"repeating_container"``

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[type](../wiki/RepeatingContainerControl#type)

#### Defined in

[src/types/controls.ts:499](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L499)

___

### version

• `Optional` **version**: `number`

#### Inherited from

[RepeatingContainerControl](../wiki/RepeatingContainerControl).[version](../wiki/RepeatingContainerControl#version)

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
