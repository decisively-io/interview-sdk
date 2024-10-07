# Interface: DataContainerControl

## Hierarchy

- `BaseControl`

  ↳ **`DataContainerControl`**

  ↳↳ [`RenderableDataContainerControl`](../wiki/RenderableDataContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/DataContainerControl#attribute)
- [columns](../wiki/DataContainerControl#columns)
- [controls](../wiki/DataContainerControl#controls)
- [id](../wiki/DataContainerControl#id)
- [label](../wiki/DataContainerControl#label)
- [type](../wiki/DataContainerControl#type)
- [version](../wiki/DataContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L8)

___

### columns

• **columns**: `number`

#### Defined in

[src/types/controls.ts:560](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L560)

___

### controls

• **controls**: ([`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`DocumentControl`](../wiki/DocumentControl))[]

#### Defined in

[src/types/controls.ts:561](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L561)

___

### id

• **id**: `string`

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:557](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L557)

___

### label

• **label**: `string`

#### Defined in

[src/types/controls.ts:559](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L559)

___

### type

• **type**: ``"data_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:558](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L558)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/77d32c1ca407f93925481973bd6e1fbe32ee8c59/src/types/controls.ts#L9)
