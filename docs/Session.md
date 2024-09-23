# Interface: Session

## Implemented by

- [`SessionInstance`](../wiki/SessionInstance)

## Table of contents

### Properties

- [context](../wiki/Session#context)
- [data](../wiki/Session#data)
- [explanations](../wiki/Session#explanations)
- [interactionId](../wiki/Session#interactionid)
- [locale](../wiki/Session#locale)
- [progress](../wiki/Session#progress)
- [renderAt](../wiki/Session#renderat)
- [screen](../wiki/Session#screen)
- [sessionId](../wiki/Session#sessionid)
- [state](../wiki/Session#state)
- [status](../wiki/Session#status)
- [steps](../wiki/Session#steps)

## Properties

### context

• **context**: [`Context`](../wiki/Context)

#### Defined in

[src/types/core.ts:168](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L168)

___

### data

• **data**: `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Defined in

[src/types/core.ts:169](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L169)

___

### explanations

• `Optional` **explanations**: `Record`\<`string`, `string`\>

#### Defined in

[src/types/core.ts:175](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L175)

___

### interactionId

• **interactionId**: `string`

Unique ID of the interaction

#### Defined in

[src/types/core.ts:166](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L166)

___

### locale

• `Optional` **locale**: `string`

#### Defined in

[src/types/core.ts:176](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L176)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

[src/types/core.ts:173](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L173)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

[src/types/core.ts:174](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L174)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

[src/types/core.ts:172](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L172)

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

[src/types/core.ts:164](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L164)

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

[src/types/core.ts:170](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L170)

___

### status

• **status**: ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Defined in

[src/types/core.ts:167](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L167)

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

[src/types/core.ts:171](https://github.com/decisively-io/interview-sdk/blob/8029f4d7290023e428f90f3a3cf1800390136e51/src/types/core.ts#L171)
