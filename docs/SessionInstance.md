# Class: SessionInstance

## Implements

- [`Session`](../wiki/Session)

## Table of contents

### Constructors

- [constructor](../wiki/SessionInstance#constructor)

### Properties

- [debug](../wiki/SessionInstance#debug)
- [externalLoading](../wiki/SessionInstance#externalloading)
- [internals](../wiki/SessionInstance#internals)
- [options](../wiki/SessionInstance#options)
- [processedScreen](../wiki/SessionInstance#processedscreen)
- [renderAt](../wiki/SessionInstance#renderat)
- [session](../wiki/SessionInstance#session)

### Accessors

- [api](../wiki/SessionInstance#api)
- [context](../wiki/SessionInstance#context)
- [data](../wiki/SessionInstance#data)
- [explanations](../wiki/SessionInstance#explanations)
- [graph](../wiki/SessionInstance#graph)
- [progress](../wiki/SessionInstance#progress)
- [project](../wiki/SessionInstance#project)
- [release](../wiki/SessionInstance#release)
- [report](../wiki/SessionInstance#report)
- [reporting](../wiki/SessionInstance#reporting)
- [screen](../wiki/SessionInstance#screen)
- [sessionId](../wiki/SessionInstance#sessionid)
- [state](../wiki/SessionInstance#state)
- [status](../wiki/SessionInstance#status)
- [steps](../wiki/SessionInstance#steps)

### Methods

- [back](../wiki/SessionInstance#back)
- [calculateUnknowns](../wiki/SessionInstance#calculateunknowns)
- [chOnScreenData](../wiki/SessionInstance#chonscreendata)
- [chat](../wiki/SessionInstance#chat)
- [exportTimeline](../wiki/SessionInstance#exporttimeline)
- [handleEntityInstances](../wiki/SessionInstance#handleentityinstances)
- [makeScreenCopy](../wiki/SessionInstance#makescreencopy)
- [navigate](../wiki/SessionInstance#navigate)
- [save](../wiki/SessionInstance#save)
- [submit](../wiki/SessionInstance#submit)
- [triggerUpdate](../wiki/SessionInstance#triggerupdate)
- [updateDynamicValues](../wiki/SessionInstance#updatedynamicvalues)
- [updateSession](../wiki/SessionInstance#updatesession)

## Constructors

### constructor

• **new SessionInstance**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SessionInstanceOptions` |

#### Defined in

[src/core/init.ts:152](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L152)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:150](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L150)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:137](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L137)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:142](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L142)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:140](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L140)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:141](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L141)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:136](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L136)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:139](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L139)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:163](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L163)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:413](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L413)

___

### data

• `get` **data**(): `Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:417](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L417)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:429](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L429)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:433](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L433)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:437](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L437)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:425](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L425)

___

### project

• `Private` `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:171](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L171)

___

### release

• `Private` `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:167](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L167)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:445](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L445)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:449](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L449)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:441](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L441)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:405](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L405)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:401](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L401)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:409](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L409)

___

### status

• `get` **status**(): ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Returns

``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:397](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L397)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:421](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L421)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:506](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L506)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:214](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L214)

___

### chOnScreenData

▸ **chOnScreenData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

#### Returns

`void`

#### Defined in

[src/core/init.ts:203](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L203)

___

### chat

▸ **chat**(`message`, `overrides?`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:475](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L475)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:513](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L513)

___

### handleEntityInstances

▸ `Private` **handleEntityInstances**(`data`): `void`

All entity controls have a template property but we need to actually duplicate it into an `instances` array
in order for dynamic text processing to work

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:193](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L193)

___

### makeScreenCopy

▸ `Private` **makeScreenCopy**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:292](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L292)

___

### navigate

▸ **navigate**(`step`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `string` |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:499](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L499)

___

### save

▸ **save**(`data`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:482](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L482)

___

### submit

▸ **submit**(`data`, `navigate?`, `overrides?`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |
| `navigate?` | `any` |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:455](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L455)

___

### triggerUpdate

▸ `Private` **triggerUpdate**(`update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | `Partial`<{ `externalLoading`: `boolean` ; `screen`: [`Screen`](../wiki/Screen)  }\> |

#### Returns

`void`

#### Defined in

[src/core/init.ts:175](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L175)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:296](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L296)

___

### updateSession

▸ `Private` **updateSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../wiki/Session) |

#### Returns

`void`

#### Defined in

[src/core/init.ts:346](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/core/init.ts#L346)
