# Interface: CertaintyContainerControl\<C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`CertaintyContainerControl`**

  ↳↳ [`RenderableCertaintyContainerControl`](../wiki/RenderableCertaintyContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/CertaintyContainerControl#attribute)
- [certain](../wiki/CertaintyContainerControl#certain)
- [columnHeading](../wiki/CertaintyContainerControl#columnheading)
- [columnWidth](../wiki/CertaintyContainerControl#columnwidth)
- [id](../wiki/CertaintyContainerControl#id)
- [type](../wiki/CertaintyContainerControl#type)
- [uncertain](../wiki/CertaintyContainerControl#uncertain)
- [version](../wiki/CertaintyContainerControl#version)

## Properties

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:432

___

### certain

• **certain**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:433

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:436

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:438

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:430

___

### type

• **type**: ``"certainty_container"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:431

___

### uncertain

• **uncertain**: `C`[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:434

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
