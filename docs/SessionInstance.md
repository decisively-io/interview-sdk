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

[src/core/init.ts:135](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L135)

## Properties

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:121](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L121)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:126](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L126)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:124](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L124)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:125](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L125)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:120](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L120)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:123](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L123)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:145](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L145)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:347](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L347)

___

### data

• `get` **data**(): `Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:351](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L351)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:363](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L363)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:367](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L367)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:371](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L371)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:359](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L359)

___

### project

• `Private` `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:153](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L153)

___

### release

• `Private` `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:149](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L149)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:379](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L379)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:383](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L383)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:375](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L375)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:339](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L339)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:335](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L335)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:343](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L343)

___

### status

• `get` **status**(): ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Returns

``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:331](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L331)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:355](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L355)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:419](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L419)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:177](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L177)

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

[src/core/init.ts:170](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L170)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:426](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L426)

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

[src/core/init.ts:412](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L412)

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

[src/core/init.ts:401](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L401)

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

[src/core/init.ts:389](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L389)

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

[src/core/init.ts:157](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L157)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:234](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L234)

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

[src/core/init.ts:282](https://github.com/decisively-io/interview-sdk/blob/78a96ba/src/core/init.ts#L282)
