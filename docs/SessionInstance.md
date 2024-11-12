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
- [canProgress](../wiki/SessionInstance#canprogress)
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

[src/core/init.ts:157](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L157)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:153](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L153)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:138](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L138)

___

### index

• **index**: `undefined` \| `string`[]

#### Defined in

[src/core/init.ts:155](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L155)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:143](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L143)

___

### onFileTooBig

• **onFileTooBig**: [`OnFileTooBig`](../wiki/FileCtrlTypesNS#onfiletoobig)

#### Defined in

[src/core/init.ts:600](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L600)

___

### options

• `Private` **options**: `Omit`\<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:141](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L141)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:142](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L142)

___

### removeFile

• **removeFile**: [`RemoveFile`](../wiki/FileCtrlTypesNS#removefile)

#### Defined in

[src/core/init.ts:581](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L581)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:137](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L137)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:140](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L140)

___

### uploadFile

• **uploadFile**: [`UploadFile`](../wiki/FileCtrlTypesNS#uploadfile)

#### Defined in

[src/core/init.ts:575](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L575)

## Accessors

### api

• `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:173](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L173)

___

### canProgress

• `get` **canProgress**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/init.ts:451](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L451)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:473](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L473)

___

### data

• `get` **data**(): `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:477](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L477)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`\<`string`, `string`\>

#### Returns

`undefined` \| `Record`\<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:489](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L489)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:493](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L493)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:497](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L497)

___

### interactionId

• `get` **interactionId**(): `string`

Unique ID of the interaction

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[interactionId](../wiki/Session#interactionid)

#### Defined in

[src/core/init.ts:185](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L185)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:485](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L485)

___

### project

• `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:181](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L181)

___

### release

• `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:177](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L177)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:505](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L505)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:509](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L509)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:501](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L501)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:465](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L465)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:461](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L461)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:469](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L469)

___

### status

• `get` **status**(): ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Returns

``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:457](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L457)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:481](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L481)

## Methods

### back

▸ **back**(): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:562](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L562)

___

### calculateUnknowns

▸ **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:230](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L230)

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

[src/core/init.ts:219](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L219)

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

[src/core/init.ts:527](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L527)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/init.ts:569](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L569)

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

[src/core/init.ts:209](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L209)

___

### makeScreenCopy

▸ **makeScreenCopy**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:314](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L314)

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

[src/core/init.ts:555](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L555)

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

[src/core/init.ts:544](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L544)

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

[src/core/init.ts:515](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L515)

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

[src/core/init.ts:189](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L189)

___

### updateDynamicValues

▸ **updateDynamicValues**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/init.ts:318](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L318)

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

[src/core/init.ts:393](https://github.com/decisively-io/interview-sdk/blob/446690b60c81e927aa0482c392a4609421447e92/src/core/init.ts#L393)
