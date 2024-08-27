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
- [exportTimeline](../wiki/SessionInstance#exporttimeline)
- [handleEntityInstances](../wiki/SessionInstance#handleentityinstances)
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

[src/core/init.ts:150](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L150)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:148](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L148)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:135](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L135)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:140](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L140)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:138](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L138)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:139](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L139)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:134](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L134)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:137](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L137)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:161](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L161)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:408](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L408)

___

### data

• `get` **data**(): `Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:412](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L412)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:424](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L424)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:428](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L428)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:432](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L432)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:420](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L420)

___

### project

• `Private` `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:169](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L169)

___

### release

• `Private` `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:165](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L165)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:440](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L440)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:444](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L444)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:436](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L436)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:400](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L400)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:396](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L396)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:404](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L404)

___

### status

• `get` **status**(): ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Returns

``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:392](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L392)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:416](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L416)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:494](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L494)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:212](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L212)

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

[src/core/init.ts:201](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L201)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:501](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L501)

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

[src/core/init.ts:191](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L191)

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

[src/core/init.ts:487](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L487)

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

[src/core/init.ts:470](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L470)

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

[src/core/init.ts:450](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L450)

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

[src/core/init.ts:173](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L173)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:291](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L291)

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

[src/core/init.ts:341](https://github.com/decisively-io/interview-sdk/blob/dacb6de/src/core/init.ts#L341)
