# Interface: Session

## Implemented by

- [`SessionInstance`](../wiki/SessionInstance)

## Table of contents

### Properties

- [context](../wiki/Session#context)
- [data](../wiki/Session#data)
- [explanations](../wiki/Session#explanations)
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

node_modules/@decisively-io/types-interview/dist/core.d.ts:92

___

### data

• **data**: `Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:93

___

### explanations

• `Optional` **explanations**: `Record`<`string`, `string`\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:99

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:97

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:98

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:96

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:90

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:94

___

### status

• **status**: ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:91

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:95
