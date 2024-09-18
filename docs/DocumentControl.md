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

[src/types/controls.ts:426](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L426)

___

### allowedMimeTypes

• `Optional` **allowedMimeTypes**: `string`[]

we'll manipulate these together, but it's easier if they are defined separately,
as one mime type can have multiple extensions, and one extension can have multiple mime types
e.g.

#### Defined in

[src/types/controls.ts:425](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L425)

___

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:416](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L416)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:418](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L418)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:413](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L413)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:415](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L415)

___

### maxSizeBytes

• `Optional` **maxSizeBytes**: `number`

#### Defined in

[src/types/controls.ts:419](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L419)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[src/types/controls.ts:417](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L417)

___

### type

• **type**: ``"document"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:414](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L414)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/controls.ts#L9)
