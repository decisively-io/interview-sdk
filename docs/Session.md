# Interface: Session

## Implemented by

- [`SessionInstance`](../wiki/SessionInstance)

## Table of contents

### Properties

- [context](../wiki/Session#context)
- [data](../wiki/Session#data)
- [explanations](../wiki/Session#explanations)
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

[src/types/core.ts:113](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L113)

___

### data

• **data**: `Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Defined in

[src/types/core.ts:114](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L114)

___

### explanations

• `Optional` **explanations**: `Record`<`string`, `string`\>

#### Defined in

[src/types/core.ts:120](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L120)

___

### locale

• `Optional` **locale**: `string`

#### Defined in

[src/types/core.ts:121](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L121)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

[src/types/core.ts:118](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L118)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

[src/types/core.ts:119](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L119)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

[src/types/core.ts:117](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L117)

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

[src/types/core.ts:111](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L111)

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

[src/types/core.ts:115](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L115)

___

### status

• **status**: ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Defined in

[src/types/core.ts:112](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L112)

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

[src/types/core.ts:116](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/core.ts#L116)
