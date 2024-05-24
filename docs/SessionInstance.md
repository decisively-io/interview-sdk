# Class: SessionInstance

## Implements

- [`Session`](../wiki/Session)

## Table of contents

### Constructors

- [constructor](../wiki/SessionInstance#constructor)

### Properties

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

[src/core/init.ts:134](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L134)

## Properties

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:120](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L120)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:125](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L125)

___

### options

• `Private` **options**: `Omit`\<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:123](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L123)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:124](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L124)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:119](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L119)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:122](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L122)

## Accessors

### api

• `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:144](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L144)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:346](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L346)

___

### data

• `get` **data**(): `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:350](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L350)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`\<`string`, `string`\>

#### Returns

`undefined` \| `Record`\<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:362](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L362)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:366](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L366)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:370](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L370)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:358](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L358)

___

### project

• `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:152](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L152)

___

### release

• `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:148](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L148)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:378](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L378)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:382](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L382)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:374](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L374)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:338](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L338)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:334](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L334)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:342](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L342)

___

### status

• `get` **status**(): ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Returns

``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:330](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L330)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:354](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L354)

## Methods

### back

▸ **back**(): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:432](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L432)

___

### calculateUnknowns

▸ **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:176](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L176)

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

[src/core/init.ts:169](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L169)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/init.ts:439](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L439)

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

[src/core/init.ts:425](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L425)

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

[src/core/init.ts:408](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L408)

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

[src/core/init.ts:388](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L388)

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

[src/core/init.ts:156](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L156)

___

### updateDynamicValues

▸ **updateDynamicValues**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/init.ts:233](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L233)

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

[src/core/init.ts:281](https://github.com/decisively-io/interview-sdk/blob/f6db7d4fe75725b9f8c20635e596acbe8e6225bb/src/core/init.ts#L281)
