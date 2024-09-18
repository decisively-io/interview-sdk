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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L8)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:455](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L455)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:457](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L457)

___

### emoji

• `Optional` **emoji**: `string`

#### Defined in

[src/types/controls.ts:453](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L453)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:435](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L435)

___

### style

• **style**: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"subtitle1"`` \| ``"subtitle2"`` \| ``"body1"`` \| ``"body2"`` \| ``"caption"`` \| ``"banner-green"`` \| ``"banner-yellow"`` \| ``"banner-red"``

#### Defined in

[src/types/controls.ts:438](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L438)

___

### text

• **text**: `string`

#### Defined in

[src/types/controls.ts:437](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L437)

___

### type

• **type**: ``"typography"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:436](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L436)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
