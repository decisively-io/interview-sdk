# Interface: TypographyControl

Display text to the user. This differs from the text control above, \
which collects text from the user.\
The end-styling of the text is up to the run time.

## Hierarchy

- `BaseControl`

  ↳ **`TypographyControl`**

## Table of contents

### Properties

- [attribute](../wiki/TypographyControl#attribute)
- [columnHeading](../wiki/TypographyControl#columnheading)
- [columnWidth](../wiki/TypographyControl#columnwidth)
- [emoji](../wiki/TypographyControl#emoji)
- [id](../wiki/TypographyControl#id)
- [style](../wiki/TypographyControl#style)
- [text](../wiki/TypographyControl#text)
- [type](../wiki/TypographyControl#type)
- [version](../wiki/TypographyControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:403

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:405

___

### emoji

• `Optional` **emoji**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:401

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:397

___

### style

• **style**: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"subtitle1"`` \| ``"subtitle2"`` \| ``"body1"`` \| ``"body2"`` \| ``"caption"`` \| ``"banner-green"`` \| ``"banner-yellow"`` \| ``"banner-red"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:400

___

### text

• **text**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:399

___

### type

• **type**: ``"typography"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:398

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
