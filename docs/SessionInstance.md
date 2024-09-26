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
- [interactionId](../wiki/SessionInstance#interactionid)
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

[src/core/init.ts:143](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L143)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:141](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L141)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:127](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L127)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:132](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L132)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:130](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L130)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:131](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L131)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:126](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L126)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:129](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L129)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:154](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L154)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:440](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L440)

___

### data

• `get` **data**(): `Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:444](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L444)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:456](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L456)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:460](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L460)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:464](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L464)

___

### interactionId

• `get` **interactionId**(): `string`

Unique ID of the interaction

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[interactionId](../wiki/Session#interactionid)

#### Defined in

[src/core/init.ts:166](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L166)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:452](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L452)

___

### project

• `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:162](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L162)

___

### release

• `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:158](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L158)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:472](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L472)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:476](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L476)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:468](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L468)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:432](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L432)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:428](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L428)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:436](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L436)

___

### status

• `get` **status**(): ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Returns

``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:424](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L424)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:448](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L448)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:529](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L529)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:211](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L211)

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

[src/core/init.ts:200](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L200)

___

### chat

▸ **chat**(`goal`, `message`, `interactionId?`, `overrides?`): `Promise`<[`ChatResponse`](../wiki/ChatResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goal` | `string` |
| `message` | `string` |
| `interactionId?` | ``null`` \| `string` |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`ChatResponse`](../wiki/ChatResponse)\>

#### Defined in

[src/core/init.ts:494](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L494)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:536](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L536)

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

[src/core/init.ts:190](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L190)

___

### makeScreenCopy

▸ `Private` **makeScreenCopy**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:300](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L300)

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

[src/core/init.ts:522](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L522)

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

[src/core/init.ts:511](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L511)

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

[src/core/init.ts:482](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L482)

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

[src/core/init.ts:170](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L170)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:304](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L304)

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

[src/core/init.ts:372](https://github.com/decisively-io/interview-sdk/blob/6c5a6e0/src/core/init.ts#L372)
