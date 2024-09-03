# Interface: RenderableEntityControl

Collect information about instances (of an entity) within a tabular structure.

## Hierarchy

- [`EntityControl`](../wiki/EntityControl)<[`RenderableControl`](../wiki/Exports#renderablecontrol)\>

  ↳ **`RenderableEntityControl`**

## Table of contents

### Properties

- [attribute](../wiki/RenderableEntityControl#attribute)
- [display](../wiki/RenderableEntityControl#display)
- [entity](../wiki/RenderableEntityControl#entity)
- [entityId](../wiki/RenderableEntityControl#entityid)
- [id](../wiki/RenderableEntityControl#id)
- [instances](../wiki/RenderableEntityControl#instances)
- [label](../wiki/RenderableEntityControl#label)
- [labelDisplay](../wiki/RenderableEntityControl#labeldisplay)
- [labelLength](../wiki/RenderableEntityControl#labellength)
- [max](../wiki/RenderableEntityControl#max)
- [min](../wiki/RenderableEntityControl#min)
- [showExplanation](../wiki/RenderableEntityControl#showexplanation)
- [template](../wiki/RenderableEntityControl#template)
- [type](../wiki/RenderableEntityControl#type)
- [value](../wiki/RenderableEntityControl#value)
- [version](../wiki/RenderableEntityControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[attribute](../wiki/EntityControl#attribute)

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Inherited from

[EntityControl](../wiki/EntityControl).[display](../wiki/EntityControl#display)

#### Defined in

[src/types/controls.ts:441](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L441)

___

### entity

• **entity**: `string`

The name of the entity

#### Inherited from

[EntityControl](../wiki/EntityControl).[entity](../wiki/EntityControl#entity)

#### Defined in

[src/types/controls.ts:438](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L438)

___

### entityId

• `Optional` **entityId**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[entityId](../wiki/EntityControl#entityid)

#### Defined in

[src/types/controls.ts:448](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L448)

___

### id

• **id**: `string`

unique id of the control

#### Inherited from

[EntityControl](../wiki/EntityControl).[id](../wiki/EntityControl#id)

#### Defined in

[src/types/controls.ts:432](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L432)

___

### instances

• **instances**: [`EntityControlInstance`](../wiki/EntityControlInstance)[]

#### Defined in

[src/types/controls.ts:511](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L511)

___

### label

• `Optional` **label**: `string`

#### Inherited from

[EntityControl](../wiki/EntityControl).[label](../wiki/EntityControl#label)

#### Defined in

[src/types/controls.ts:434](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L434)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelDisplay](../wiki/EntityControl#labeldisplay)

#### Defined in

[src/types/controls.ts:435](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L435)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[labelLength](../wiki/EntityControl#labellength)

#### Defined in

[src/types/controls.ts:436](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L436)

___

### max

• `Optional` **max**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[max](../wiki/EntityControl#max)

#### Defined in

[src/types/controls.ts:446](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L446)

___

### min

• `Optional` **min**: `number`

min number of instances

#### Inherited from

[EntityControl](../wiki/EntityControl).[min](../wiki/EntityControl#min)

#### Defined in

[src/types/controls.ts:445](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L445)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Inherited from

[EntityControl](../wiki/EntityControl).[showExplanation](../wiki/EntityControl#showexplanation)

#### Defined in

[src/types/controls.ts:447](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L447)

___

### template

• **template**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[template](../wiki/EntityControl#template)

#### Defined in

[src/types/controls.ts:442](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L442)

___

### type

• **type**: ``"entity"``

#### Inherited from

[EntityControl](../wiki/EntityControl).[type](../wiki/EntityControl#type)

#### Defined in

[src/types/controls.ts:433](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L433)

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Inherited from

[EntityControl](../wiki/EntityControl).[value](../wiki/EntityControl#value)

#### Defined in

[src/types/controls.ts:443](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L443)

___

### version

• `Optional` **version**: `number`

#### Inherited from

[EntityControl](../wiki/EntityControl).[version](../wiki/EntityControl#version)

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
