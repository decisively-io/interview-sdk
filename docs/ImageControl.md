# Interface: ImageControl

Display an image to the user. This does not collect any information from the user
```text
Note: We may need other attributes to help display the image properly (height, width, stretch?).
Should provide enough to show an image reasonably, but more advanced stuff should really
be done in code in the SDK
```

## Hierarchy

- `BaseControl`

  ↳ **`ImageControl`**

## Table of contents

### Properties

- [attribute](../wiki/ImageControl#attribute)
- [data](../wiki/ImageControl#data)
- [id](../wiki/ImageControl#id)
- [type](../wiki/ImageControl#type)
- [version](../wiki/ImageControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/types/controls.ts#L8)

___

### data

• **data**: `string`

The base64 date URI of the image

#### Defined in

[src/types/controls.ts:347](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/types/controls.ts#L347)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:344](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/types/controls.ts#L344)

___

### type

• **type**: ``"image"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:345](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/types/controls.ts#L345)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/types/controls.ts#L9)
