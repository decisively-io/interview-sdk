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

• **new SessionInstance**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SessionInstanceOptions` |

#### Defined in

[src/core/init.ts:111](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L111)

## Properties

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:97](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L97)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:102](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L102)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:100](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L100)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:101](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L101)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:96](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L96)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:99](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L99)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:121](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L121)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:310](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L310)

___

### data

• `get` **data**(): `Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:314](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L314)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:326](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L326)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:330](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L330)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:334](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L334)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:322](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L322)

___

### project

• `Private` `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:129](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L129)

___

### release

• `Private` `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:125](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L125)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:342](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L342)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:346](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L346)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:338](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L338)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:302](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L302)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:298](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L298)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:306](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L306)

___

### status

• `get` **status**(): ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Returns

``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:294](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L294)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:318](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L318)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:382](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L382)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:153](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L153)

___

### chOnScreenData

▸ **chOnScreenData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

#### Returns

`void`

#### Defined in

[src/core/init.ts:146](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L146)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:389](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L389)

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

[src/core/init.ts:375](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L375)

___

### save

▸ **save**(`data`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:364](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L364)

___

### submit

▸ **submit**(`data`, `navigate?`, `overrides?`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |
| `navigate?` | `any` |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:352](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L352)

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

[src/core/init.ts:133](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L133)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:205](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L205)

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

[src/core/init.ts:245](https://github.com/decisively-io/interview-sdk/blob/335872a/src/core/init.ts#L245)
