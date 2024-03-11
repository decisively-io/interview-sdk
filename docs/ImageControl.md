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

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:5

___

### data

• **data**: `string`

The base64 date URI of the image

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:264

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:261

___

### type

• **type**: ``"image"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:262
