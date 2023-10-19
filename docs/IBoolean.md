# Interface: IBoolean

A control to collect a true or false response from a user. Usually rendered as a checkbox.
Note: the control needs to allow for an indeterminate (or uncertain) response - i.e. the
user did not provide an answer. You can't send back undefined as the server will interpret
that as requiring an answer again later. Send back null to mark the question as reviewed
but not answered.

## Table of contents

### Properties

- [attribute](../wiki/IBoolean#attribute)
- [default](../wiki/IBoolean#default)
- [disabled](../wiki/IBoolean#disabled)
- [id](../wiki/IBoolean#id)
- [label](../wiki/IBoolean#label)
- [labelLength](../wiki/IBoolean#labellength)
- [required](../wiki/IBoolean#required)
- [type](../wiki/IBoolean#type)
- [value](../wiki/IBoolean#value)

## Properties

### attribute

• **attribute**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:18

___

### default

• `Optional` **default**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:16

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:15

___

### id

• **id**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:10

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:12

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:13

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:14

___

### type

• **type**: ``"boolean"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:11

___

### value

• `Optional` **value**: ``null`` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:17
