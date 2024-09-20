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

• **new SessionInstance**(`options`): [`SessionInstance`](../wiki/SessionInstance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SessionInstanceOptions` |

#### Returns

[`SessionInstance`](../wiki/SessionInstance)

#### Defined in

[src/core/init.ts:140](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L140)

## Properties

### debug

• `Private` **debug**: `boolean`

#### Defined in

[src/core/init.ts:138](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L138)

___

### externalLoading

• **externalLoading**: `boolean` = `false`

#### Defined in

[src/core/init.ts:125](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L125)

___

### internals

• `Private` **internals**: `SessionInternal`

#### Defined in

[src/core/init.ts:130](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L130)

___

### options

• `Private` **options**: `Omit`\<`SessionInstanceOptions`, ``"session"``\>

#### Defined in

[src/core/init.ts:128](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L128)

___

### processedScreen

• `Private` **processedScreen**: `undefined` \| [`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:129](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L129)

___

### renderAt

• **renderAt**: `number`

#### Implementation of

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

[src/core/init.ts:124](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L124)

___

### session

• `Private` **session**: [`Session`](../wiki/Session)

#### Defined in

[src/core/init.ts:127](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L127)

## Accessors

### api

• `get` **api**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:151](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L151)

___

### context

• `get` **context**(): [`Context`](../wiki/Context)

#### Returns

[`Context`](../wiki/Context)

#### Implementation of

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

[src/core/init.ts:399](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L399)

___

### data

• `get` **data**(): `Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Returns

`Record`\<`string`, [`AttributeData`](../wiki/AttributeData)\> & [`Parent`](../wiki/Parent)

#### Implementation of

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

[src/core/init.ts:403](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L403)

___

### explanations

• `get` **explanations**(): `undefined` \| `Record`\<`string`, `string`\>

#### Returns

`undefined` \| `Record`\<`string`, `string`\>

#### Implementation of

[Session](../wiki/Session).[explanations](../wiki/Session#explanations)

#### Defined in

[src/core/init.ts:415](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L415)

___

### graph

• `get` **graph**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:419](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L419)

• `set` **graph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:423](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L423)

___

### interactionId

• `get` **interactionId**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[interactionId](../wiki/Session#interactionid)

#### Defined in

[src/core/init.ts:163](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L163)

___

### progress

• `get` **progress**(): `undefined` \| [`Progress`](../wiki/Progress)

#### Returns

`undefined` \| [`Progress`](../wiki/Progress)

#### Implementation of

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

[src/core/init.ts:411](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L411)

___

### project

• `get` **project**(): `string`

#### Returns

`string`

#### Defined in

[src/core/init.ts:159](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L159)

___

### release

• `get` **release**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/init.ts:155](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L155)

___

### report

• `get` **report**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:431](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L431)

• `set` **report**(`report`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `report` | `any` |

#### Returns

`void`

#### Defined in

[src/core/init.ts:435](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L435)

___

### reporting

• `get` **reporting**(): `any`

#### Returns

`any`

#### Defined in

[src/core/init.ts:427](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L427)

___

### screen

• `get` **screen**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Implementation of

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

[src/core/init.ts:391](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L391)

___

### sessionId

• `get` **sessionId**(): `string`

Unique ID of the session

#### Returns

`string`

#### Implementation of

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

[src/core/init.ts:387](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L387)

___

### state

• `get` **state**(): `undefined` \| [`State`](../wiki/State)[]

#### Returns

`undefined` \| [`State`](../wiki/State)[]

#### Implementation of

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

[src/core/init.ts:395](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L395)

___

### status

• `get` **status**(): ``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Returns

``"in-progress"`` \| ``"complete"`` \| ``"error"``

#### Implementation of

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

[src/core/init.ts:383](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L383)

___

### steps

• `get` **steps**(): [`Step`](../wiki/Step)[]

#### Returns

[`Step`](../wiki/Step)[]

#### Implementation of

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

[src/core/init.ts:407](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L407)

## Methods

### back

▸ **back**(): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:488](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L488)

___

### calculateUnknowns

▸ **calculateUnknowns**(): `void`

#### Returns

`void`

#### Defined in

[src/core/init.ts:208](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L208)

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

[src/core/init.ts:197](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L197)

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

[src/core/init.ts:453](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L453)

___

### exportTimeline

▸ **exportTimeline**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/init.ts:495](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L495)

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

[src/core/init.ts:187](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L187)

___

### makeScreenCopy

▸ **makeScreenCopy**(): [`Screen`](../wiki/Screen)

#### Returns

[`Screen`](../wiki/Screen)

#### Defined in

[src/core/init.ts:286](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L286)

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

[src/core/init.ts:481](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L481)

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

[src/core/init.ts:470](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L470)

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

[src/core/init.ts:441](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L441)

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

[src/core/init.ts:167](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L167)

___

### updateDynamicValues

▸ **updateDynamicValues**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/init.ts:290](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L290)

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

[src/core/init.ts:332](https://github.com/decisively-io/interview-sdk/blob/788cba6cb7809c4413e7442a2858cfe86092535b/src/core/init.ts#L332)
