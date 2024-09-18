# Interface: DocumentControl

Denotes when documentation should be supplied/uploaded

## Hierarchy

- `BaseControl`

  ↳ **`DocumentControl`**

## Table of contents

### Properties

- [allowedExtensions](../wiki/DocumentControl#allowedextensions)
- [allowedMimeTypes](../wiki/DocumentControl#allowedmimetypes)
- [attribute](../wiki/DocumentControl#attribute)
- [disabled](../wiki/DocumentControl#disabled)
- [id](../wiki/DocumentControl#id)
- [label](../wiki/DocumentControl#label)
- [maxSizeBytes](../wiki/DocumentControl#maxsizebytes)
- [required](../wiki/DocumentControl#required)
- [type](../wiki/DocumentControl#type)
- [version](../wiki/DocumentControl#version)

## Properties

### allowedExtensions

• `Optional` **allowedExtensions**: `string`[]

#### Defined in

[src/types/controls.ts:435](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L435)

___

### allowedMimeTypes

• `Optional` **allowedMimeTypes**: `string`[]

we'll manipulate these together, but it's easier if they are defined separately,
as one mime type can have multiple extensions, and one extension can have multiple mime types
e.g.

#### Defined in

[src/types/controls.ts:434](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L434)

___

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:425](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L425)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:427](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L427)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:422](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L422)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:424](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L424)

___

### maxSizeBytes

• `Optional` **maxSizeBytes**: `number`

#### Defined in

[src/types/controls.ts:428](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L428)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[src/types/controls.ts:426](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L426)

___

### type

• **type**: ``"document"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:423](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L423)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/controls.ts#L9)
