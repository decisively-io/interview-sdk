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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L8)

___

### columnHeading

• `Optional` **columnHeading**: `string`

`columnHeading` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:461](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L461)

___

### columnWidth

• `Optional` **columnWidth**: `number`

`columnWidth` is relevant only when nested within a repeat_container, and will otherwise be ignored

#### Defined in

[src/types/controls.ts:463](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L463)

___

### emoji

• `Optional` **emoji**: `string`

#### Defined in

[src/types/controls.ts:459](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L459)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:441](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L441)

___

### style

• **style**: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"`` \| ``"subtitle1"`` \| ``"subtitle2"`` \| ``"body1"`` \| ``"body2"`` \| ``"caption"`` \| ``"banner-green"`` \| ``"banner-yellow"`` \| ``"banner-red"``

#### Defined in

[src/types/controls.ts:444](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L444)

___

### text

• **text**: `string`

#### Defined in

[src/types/controls.ts:443](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L443)

___

### type

• **type**: ``"typography"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:442](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L442)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/f6a9e1544070264c0422ae6f4514bc6f150675b7/src/types/controls.ts#L9)
