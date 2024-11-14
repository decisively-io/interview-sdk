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

[src/types/core.ts:186](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L186)

___

### data

• **data**: `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Defined in

[src/types/core.ts:187](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L187)

___

### explanations

• `Optional` **explanations**: `Record`\<`string`, `string`\>

#### Defined in

[src/types/core.ts:193](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L193)

___

### interactionId

• **interactionId**: `string`

Unique ID of the interaction

#### Defined in

[src/types/core.ts:184](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L184)

___

### locale

• `Optional` **locale**: `string`

#### Defined in

[src/types/core.ts:194](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L194)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

[src/types/core.ts:191](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L191)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

[src/types/core.ts:192](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L192)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

[src/types/core.ts:190](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L190)

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

[src/types/core.ts:182](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L182)

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

[src/types/core.ts:188](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L188)

___

### status

• **status**: ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Defined in

[src/types/core.ts:185](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L185)

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

[src/types/core.ts:189](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/core.ts#L189)
