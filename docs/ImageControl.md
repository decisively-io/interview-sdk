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

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L8)

___

### data

• **data**: `string`

The base64 date URI of the image

#### Defined in

[src/types/controls.ts:339](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L339)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:336](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L336)

___

### type

• **type**: ``"image"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:337](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L337)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/types/controls.ts#L9)
