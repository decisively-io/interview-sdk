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

[src/types/core.ts:162](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L162)

___

### data

• **data**: `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Defined in

[src/types/core.ts:163](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L163)

___

### explanations

• `Optional` **explanations**: `Record`\<`string`, `string`\>

#### Defined in

[src/types/core.ts:169](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L169)

___

### interactionId

• **interactionId**: `string`

Unique ID of the interaction

#### Defined in

[src/types/core.ts:160](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L160)

___

### locale

• `Optional` **locale**: `string`

#### Defined in

[src/types/core.ts:170](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L170)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

[src/types/core.ts:167](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L167)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

[src/types/core.ts:168](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L168)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

[src/types/core.ts:166](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L166)

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

[src/types/core.ts:158](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L158)

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

[src/types/core.ts:164](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L164)

___

### status

• **status**: ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Defined in

[src/types/core.ts:161](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L161)

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

[src/types/core.ts:165](https://github.com/decisively-io/interview-sdk/blob/d46fabdc06b3374be895c52fe9624c00f5646b37/src/types/core.ts#L165)
