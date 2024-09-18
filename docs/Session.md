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

[src/types/core.ts:139](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L139)

___

### data

• **data**: `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Defined in

[src/types/core.ts:140](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L140)

___

### explanations

• `Optional` **explanations**: `Record`\<`string`, `string`\>

#### Defined in

[src/types/core.ts:146](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L146)

___

### interactionId

• **interactionId**: `string`

#### Defined in

[src/types/core.ts:137](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L137)

___

### locale

• `Optional` **locale**: `string`

#### Defined in

[src/types/core.ts:147](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L147)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Defined in

[src/types/core.ts:144](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L144)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Defined in

[src/types/core.ts:145](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L145)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Defined in

[src/types/core.ts:143](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L143)

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Defined in

[src/types/core.ts:136](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L136)

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Defined in

[src/types/core.ts:141](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L141)

___

### status

• **status**: ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Defined in

[src/types/core.ts:138](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L138)

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Defined in

[src/types/core.ts:142](https://github.com/decisively-io/interview-sdk/blob/af9aa08fe36010caf4221082fb0b23e871b5758c/src/types/core.ts#L142)
