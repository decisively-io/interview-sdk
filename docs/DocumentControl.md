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

[src/types/controls.ts:440](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L440)

___

### allowedMimeTypes

• `Optional` **allowedMimeTypes**: `string`[]

we'll manipulate these together, but it's easier if they are defined separately,
as one mime type can have multiple extensions, and one extension can have multiple mime types
e.g.

#### Defined in

[src/types/controls.ts:439](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L439)

___

### attribute

• **attribute**: `string`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:430](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L430)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:432](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L432)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:427](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L427)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:429](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L429)

___

### maxSizeBytes

• `Optional` **maxSizeBytes**: `number`

#### Defined in

[src/types/controls.ts:433](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L433)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[src/types/controls.ts:431](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L431)

___

### type

• **type**: ``"document"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:428](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L428)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/4eec9a19760741f59f131856d1e1811e232ea805/src/types/controls.ts#L9)
