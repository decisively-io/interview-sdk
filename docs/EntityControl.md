# Interface: EntityControl<C\>

Collect information about instances (of an entity) within a tabular structure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | [`Control`](../wiki/Exports#control) |

## Hierarchy

- `BaseControl`

  ↳ **`EntityControl`**

  ↳↳ [`RenderableEntityControl`](../wiki/RenderableEntityControl)

## Table of contents

### Properties

- [attribute](../wiki/EntityControl#attribute)
- [display](../wiki/EntityControl#display)
- [entity](../wiki/EntityControl#entity)
- [entityId](../wiki/EntityControl#entityid)
- [id](../wiki/EntityControl#id)
- [label](../wiki/EntityControl#label)
- [labelDisplay](../wiki/EntityControl#labeldisplay)
- [labelLength](../wiki/EntityControl#labellength)
- [max](../wiki/EntityControl#max)
- [min](../wiki/EntityControl#min)
- [showExplanation](../wiki/EntityControl#showexplanation)
- [template](../wiki/EntityControl#template)
- [type](../wiki/EntityControl#type)
- [value](../wiki/EntityControl#value)
- [version](../wiki/EntityControl#version)

## Properties

### attribute

• `Optional` **attribute**: `string`

#### Inherited from

BaseControl.attribute

#### Defined in

[src/types/controls.ts:8](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L8)

___

### display

• `Optional` **display**: ``"horizontal"`` \| ``"vertical"``

describes single 'row' of entries, each of which has all controls from `template`

#### Defined in

[src/types/controls.ts:441](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L441)

___

### entity

• **entity**: `string`

The name of the entity

#### Defined in

[src/types/controls.ts:438](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L438)

___

### entityId

• `Optional` **entityId**: `string`

#### Defined in

[src/types/controls.ts:448](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L448)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:432](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L432)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:434](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L434)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:435](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L435)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:436](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L436)

___

### max

• `Optional` **max**: `number`

#### Defined in

[src/types/controls.ts:446](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L446)

___

### min

• `Optional` **min**: `number`

min number of instances

#### Defined in

[src/types/controls.ts:445](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L445)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:447](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L447)

___

### template

• **template**: `C`[]

#### Defined in

[src/types/controls.ts:442](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L442)

___

### type

• **type**: ``"entity"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:433](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L433)

___

### value

• `Optional` **value**: [`EntityValue`](../wiki/Exports#entityvalue)[]

#### Defined in

[src/types/controls.ts:443](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L443)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
