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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:397

___

### allowedMimeTypes

• `Optional` **allowedMimeTypes**: `string`[]

we'll manipulate these together, but it's easier if they are defined separately,
as one mime type can have multiple extensions, and one extension can have multiple mime types
e.g.

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:396

___

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:387

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:389

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:384

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:386

___

### maxSizeBytes

• `Optional` **maxSizeBytes**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:390

___

### required

• `Optional` **required**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:388

___

### type

• **type**: ``"document"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:385

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:7
