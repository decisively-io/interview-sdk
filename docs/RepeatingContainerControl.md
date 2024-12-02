# Interface: RepeatingContainerControl\<C\>

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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L8)

___

### controls

• **controls**: `C`[]

#### Defined in

[src/types/controls.ts:528](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L528)

___

### display

• `Optional` **display**: ``"list"`` \| ``"table"``

if `display` is `undefined` we should assume `"list"`

#### Defined in

[src/types/controls.ts:516](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L516)

___

### entity

• **entity**: `string`

#### Defined in

[src/types/controls.ts:514](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L514)

___

### filter

• `Optional` **filter**: ``null`` \| `string`

`filter` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

[src/types/controls.ts:518](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L518)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:512](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L512)

___

### isFirst

• `Optional` **isFirst**: `boolean`

indicates if this is the first instance of a repeating series (calculated at runtime)

#### Defined in

[src/types/controls.ts:526](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L526)

___

### isLast

• `Optional` **isLast**: `boolean`

#### Defined in

[src/types/controls.ts:527](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L527)

___

### showBorders

• `Optional` **showBorders**: `boolean`

`showBorders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

[src/types/controls.ts:522](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L522)

___

### showHeaders

• `Optional` **showHeaders**: `boolean`

`showHeaders` is only relevant when `display` is `"table"` and is defaulted to `true` if not set

#### Defined in

[src/types/controls.ts:524](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L524)

___

### sort

• `Optional` **sort**: ``null`` \| `string`

`sort` is an attributeId and is only relevant when `display` is `"table"`

#### Defined in

[src/types/controls.ts:520](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L520)

___

### type

• **type**: ``"repeating_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:513](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L513)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/749d289f90b45ddcdd893b59a564a1efcab35fcb/src/types/controls.ts#L9)
