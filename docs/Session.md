# Interface: Session

## Hierarchy

- **`Session`**

  ↳ [`SessionInstance`](../wiki/SessionInstance)

## Table of contents

### Properties

- [context](../wiki/Session#context)
- [data](../wiki/Session#data)
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

node_modules/@decisively-io/types-interview/dist/core.d.ts:84

___

### data

• **data**: `Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:85

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:89

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:90

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:88

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:82

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:86

___

### status

• **status**: ``"complete"`` \| ``"error"`` \| ``"in-progress"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:83

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:87
