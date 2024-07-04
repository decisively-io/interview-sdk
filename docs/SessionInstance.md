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

[src/core/init.ts:135](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L135)

## Properties

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:121](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L121)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:126](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L126)

___

### options

• `Private` **options**: `Omit`<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:124](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L124)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:125](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L125)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:120](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L120)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:123](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L123)

## Accessors

### api

• `Private` `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:145](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L145)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:381](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L381)

___

### data

• `get` **data**(): `Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:385](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L385)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`<`string`, `string`\>

#### Returns

`undefined` \| `Record`<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:397](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L397)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:401](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L401)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:405](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L405)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:393](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L393)

___

### project

• `Private` `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:153](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L153)

___

### release

• `Private` `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:149](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L149)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:413](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L413)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:417](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L417)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:409](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L409)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:373](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L373)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:369](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L369)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:377](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L377)

___

### status

• `get` **status**(): ``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Returns

``"complete"`` \| ``"in-progress"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:365](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L365)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:389](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L389)

## Methods

### back

▸ **back**(): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:467](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L467)

___

### calculateUnknowns

▸ `Private` **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:207](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L207)

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

[src/core/init.ts:199](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L199)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/init.ts:474](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L474)

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

[src/core/init.ts:174](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L174)

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

[src/core/init.ts:460](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L460)

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

[src/core/init.ts:443](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L443)

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

[src/core/init.ts:423](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L423)

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

[src/core/init.ts:157](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L157)

___

### updateDynamicValues

▸ `Private` **updateDynamicValues**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/init.ts:268](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L268)

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

[src/core/init.ts:316](https://github.com/decisively-io/interview-sdk/blob/3794ad3/src/core/init.ts#L316)
