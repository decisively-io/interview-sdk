# Class: SessionInstance

## Implements

- [`Session`](../wiki/Session)

## Table of contents

### Constructors

- [constructor](../wiki/SessionInstance#constructor)

### Properties

- [debug](../wiki/SessionInstance#debug)
- [externalLoading](../wiki/SessionInstance#externalloading)
- [index](../wiki/SessionInstance#index)
- [internals](../wiki/SessionInstance#internals)
- [onFileTooBig](../wiki/SessionInstance#onfiletoobig)
- [options](../wiki/SessionInstance#options)
- [processedScreen](../wiki/SessionInstance#processedscreen)
- [removeFile](../wiki/SessionInstance#removefile)
- [renderAt](../wiki/SessionInstance#renderat)
- [session](../wiki/SessionInstance#session)
- [uploadFile](../wiki/SessionInstance#uploadfile)

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

• **new SessionInstance**(`options`): [`SessionInstance`](../wiki/SessionInstance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SessionInstanceOptions` |

#### Returns

[`SessionInstance`](../wiki/SessionInstance)

#### Defined in

[src/core/init.ts:154](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L154)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:150](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L150)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:136](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L136)

___

### index

• **index**: `undefined` \| `string`[]

#### Defined in

[src/core/init.ts:152](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L152)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:141](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L141)

___

### onFileTooBig

• **onFileTooBig**: [`OnFileTooBig`](../wiki/FileCtrlTypesNS#onfiletoobig)

#### Defined in

[src/core/init.ts:583](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L583)

___

### options

• `Private` **options**: `Omit`\<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:139](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L139)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:140](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L140)

___

### removeFile

• **removeFile**: [`RemoveFile`](../wiki/FileCtrlTypesNS#removefile)

#### Defined in

[src/core/init.ts:564](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L564)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:135](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L135)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:138](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L138)

___

### uploadFile

• **uploadFile**: [`UploadFile`](../wiki/FileCtrlTypesNS#uploadfile)

#### Defined in

[src/core/init.ts:558](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L558)

## Accessors

### api

• `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:170](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L170)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:456](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L456)

___

### data

• `get` **data**(): `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:460](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L460)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`\<`string`, `string`\>

#### Returns

`undefined` \| `Record`\<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:472](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L472)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:476](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L476)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:480](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L480)

___

### interactionId

• `get` **interactionId**(): `string`

Unique ID of the interaction

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[interactionId](../wiki/Session#interactionid)

#### Defined in

[src/core/init.ts:182](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L182)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:468](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L468)

___

### project

• `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:178](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L178)

___

### release

• `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:174](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L174)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:488](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L488)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:492](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L492)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:484](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L484)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:448](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L448)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:444](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L444)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:452](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L452)

___

### status

• `get` **status**(): ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Returns

``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:440](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L440)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:464](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L464)

## Methods

### back

▸ **back**(): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:545](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L545)

___

### calculateUnknowns

▸ **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:227](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L227)

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

[src/core/init.ts:216](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L216)

___

### chat

▸ **chat**(`goal`, `message`, `interactionId?`, `overrides?`): `Promise`\<[`ChatResponse`](../wiki/ChatResponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `goal` | `string` |
| `message` | `string` |
| `interactionId?` | ``null`` \| `string` |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`\<[`ChatResponse`](../wiki/ChatResponse)\>

#### Defined in

[src/core/init.ts:510](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L510)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/init.ts:552](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L552)

___

### handleEntityInstances

▸ **handleEntityInstances**(`data`): `void`

All entity controls have a template property but we need to actually duplicate it into an `instances` array
in order for dynamic text processing to work

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:206](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L206)

___

### makeScreenCopy

▸ **makeScreenCopy**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:316](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L316)

___

### navigate

▸ **navigate**(`step`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `string` |

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:538](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L538)

___

### save

▸ **save**(`data`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:527](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L527)

___

### submit

▸ **submit**(`data`, `navigate?`, `overrides?`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |
| `navigate?` | `any` |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:498](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L498)

___

### triggerUpdate

▸ **triggerUpdate**(`update`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `update` | `Partial`\<\{ `externalLoading`: `boolean` ; `screen`: [`Screen`](../wiki/Screen)  }\> |

#### Returns

`void`

#### Defined in

[src/core/init.ts:186](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L186)

___

### updateDynamicValues

▸ **updateDynamicValues**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/init.ts:320](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L320)

___

### updateSession

▸ **updateSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../wiki/Session) |

#### Returns

`void`

#### Defined in

[src/core/init.ts:388](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L388)
