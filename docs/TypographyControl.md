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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:417](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L417)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:419](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L419)

___

### emoji

• `Optional` **emoji**: `string`

#### Defined in

[src/types/controls.ts:415](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L415)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:397](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L397)

___

### style

• **style**: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"subtitle1"`` \| ``"subtitle2"`` \| ``"body1"`` \| ``"body2"`` \| ``"caption"`` \| ``"banner-green"`` \| ``"banner-yellow"`` \| ``"banner-red"``

#### Defined in

[src/types/controls.ts:400](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L400)

___

### text

• **text**: `string`

#### Defined in

[src/types/controls.ts:399](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L399)

___

### type

• **type**: ``"typography"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:398](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L398)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
