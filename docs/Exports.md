# @decisively-io/interview-sdk

## Table of contents

### Interfaces

- [Context](../wiki/Context)
- [IBoolean](../wiki/IBoolean)
- [IControlsValue](../wiki/IControlsValue)
- [ICurrency](../wiki/ICurrency)
- [IDate](../wiki/IDate)
- [IDateTime](../wiki/IDateTime)
- [IEntity](../wiki/IEntity)
- [IEntityInstance](../wiki/IEntityInstance)
- [IFile](../wiki/IFile)
- [IImage](../wiki/IImage)
- [INumberOfInstances](../wiki/INumberOfInstances)
- [IOptions](../wiki/IOptions)
- [IText](../wiki/IText)
- [ITime](../wiki/ITime)
- [ITypography](../wiki/ITypography)
- [InterviewProvider](../wiki/InterviewProvider)
- [Parent](../wiki/Parent)
- [Progress](../wiki/Progress)
- [Screen](../wiki/Screen)
- [Session](../wiki/Session)
- [SessionConfig](../wiki/SessionConfig)
- [SessionInstance](../wiki/SessionInstance)
- [Simulate](../wiki/Simulate)
- [State](../wiki/State)
- [Step](../wiki/Step)
- [TypedData](../wiki/TypedData)

### Type Aliases

- [AttributeData](../wiki/Exports#attributedata)
- [AttributeId](../wiki/Exports#attributeid)
- [AttributeValue](../wiki/Exports#attributevalue)
- [Control](../wiki/Exports#control)
- [DynamicUpdateFunction](../wiki/Exports#dynamicupdatefunction)
- [IEntityValue](../wiki/Exports#ientityvalue)
- [InterviewId](../wiki/Exports#interviewid)
- [Navigate](../wiki/Exports#navigate)
- [NonNestedControl](../wiki/Exports#nonnestedcontrol)
- [Overrides](../wiki/Exports#overrides)
- [ProjectId](../wiki/Exports#projectid)
- [ReleaseId](../wiki/Exports#releaseid)
- [ResponseData](../wiki/Exports#responsedata)
- [SessionId](../wiki/Exports#sessionid)
- [SessionObservable](../wiki/Exports#sessionobservable)
- [StepId](../wiki/Exports#stepid)

### Variables

- [DATE\_FORMAT](../wiki/Exports#date_format)
- [DATE\_TIME\_FORMAT\_12](../wiki/Exports#date_time_format_12)
- [DATE\_TIME\_FORMAT\_24](../wiki/Exports#date_time_format_24)
- [TIME\_FORMAT\_12](../wiki/Exports#time_format_12)
- [TIME\_FORMAT\_24](../wiki/Exports#time_format_24)
- [defaultPath](../wiki/Exports#defaultpath)

### Functions

- [back](../wiki/Exports#back)
- [cmpAttributeData](../wiki/Exports#cmpattributedata)
- [containsCurrentStep](../wiki/Exports#containscurrentstep)
- [create](../wiki/Exports#create)
- [createApiInstance](../wiki/Exports#createapiinstance)
- [getCurrentStep](../wiki/Exports#getcurrentstep)
- [init](../wiki/Exports#init)
- [isAttributeDynamic](../wiki/Exports#isattributedynamic)
- [load](../wiki/Exports#load)
- [navigate](../wiki/Exports#navigate-1)
- [render](../wiki/Exports#render)
- [replaceTemplatedText](../wiki/Exports#replacetemplatedtext)
- [setCurrentInStep](../wiki/Exports#setcurrentinstep)
- [simulate](../wiki/Exports#simulate)
- [submit](../wiki/Exports#submit)
- [transformResponse](../wiki/Exports#transformresponse)

## Type Aliases

### AttributeData

Ƭ **AttributeData**: `Record`<[`AttributeId`](../wiki/Exports#attributeid), [`AttributeValue`](../wiki/Exports#attributevalue)\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:11

___

### AttributeId

Ƭ **AttributeId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:7

___

### AttributeValue

Ƭ **AttributeValue**: `string` \| `number` \| `boolean` \| `Record`<`string`, [`AttributeValue`](../wiki/Exports#attributevalue)\>[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:8

___

### Control

Ƭ **Control**: [`IBoolean`](../wiki/IBoolean) \| [`ICurrency`](../wiki/ICurrency) \| [`IDate`](../wiki/IDate) \| [`ITime`](../wiki/ITime) \| [`IDateTime`](../wiki/IDateTime) \| [`IOptions`](../wiki/IOptions) \| [`IFile`](../wiki/IFile) \| [`IImage`](../wiki/IImage) \| [`INumberOfInstances`](../wiki/INumberOfInstances) \| [`IText`](../wiki/IText) \| [`ITypography`](../wiki/ITypography) \| [`IEntity`](../wiki/IEntity)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:297

___

### DynamicUpdateFunction

Ƭ **DynamicUpdateFunction**: (`data`: [`AttributeData`](../wiki/Exports#attributedata)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

##### Returns

`void`

#### Defined in

[src/core/types.ts:15](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/types.ts#L15)

___

### IEntityValue

Ƭ **IEntityValue**: [`AttributeData`](../wiki/Exports#attributedata) & [`IEntityInstance`](../wiki/IEntityInstance)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:19

___

### InterviewId

Ƭ **InterviewId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:6

___

### Navigate

Ƭ **Navigate**: [`StepId`](../wiki/Exports#stepid) \| `boolean`

Navigation can be step id, or true for next, false for no navigation

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:10

___

### NonNestedControl

Ƭ **NonNestedControl**: `Exclude`<[`Control`](../wiki/Exports#control), [`IEntity`](../wiki/IEntity)\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:276

___

### Overrides

Ƭ **Overrides**: `Record`<`string`, `any`\>

#### Defined in

[src/core/types.ts:13](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/types.ts#L13)

___

### ProjectId

Ƭ **ProjectId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:4

___

### ReleaseId

Ƭ **ReleaseId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:3

___

### ResponseData

Ƭ **ResponseData**: [`AttributeData`](../wiki/Exports#attributedata) & [`Parent`](../wiki/Parent)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:15

___

### SessionId

Ƭ **SessionId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:5

___

### SessionObservable

Ƭ **SessionObservable**: `Partial`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:32](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/types.ts#L32)

___

### StepId

Ƭ **StepId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:2

## Variables

### DATE\_FORMAT

• `Const` **DATE\_FORMAT**: ``"yyyy-MM-dd"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:68

___

### DATE\_TIME\_FORMAT\_12

• `Const` **DATE\_TIME\_FORMAT\_12**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:134

___

### DATE\_TIME\_FORMAT\_24

• `Const` **DATE\_TIME\_FORMAT\_24**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:133

___

### TIME\_FORMAT\_12

• `Const` **TIME\_FORMAT\_12**: ``"h:mm:ss a"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:100

___

### TIME\_FORMAT\_24

• `Const` **TIME\_FORMAT\_24**: ``"HH:mm:ss"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:99

___

### defaultPath

• `Const` **defaultPath**: `string`[]

#### Defined in

[src/core/init.ts:93](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/init.ts#L93)

## Functions

### back

▸ **back**(`api`, `project`, `session`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:46](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L46)

___

### cmpAttributeData

▸ **cmpAttributeData**(`prev`, `next`): [`AttributeData`](../wiki/Exports#attributedata)

Strips out any common attributes between two AttributeData objects, reporting only the latest changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | [`AttributeData`](../wiki/Exports#attributedata) | The previous state of the attributes |
| `next` | [`AttributeData`](../wiki/Exports#attributedata) | The current state of the attributes |

#### Returns

[`AttributeData`](../wiki/Exports#attributedata)

#### Defined in

[src/core/helpers.ts:51](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L51)

___

### containsCurrentStep

▸ **containsCurrentStep**(`s`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |

#### Returns

`boolean`

#### Defined in

[src/core/helpers.ts:18](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L18)

___

### create

▸ **create**(`api`, `project`, `options?`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `options` | [`SessionConfig`](../wiki/SessionConfig) |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:6](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L6)

___

### createApiInstance

▸ **createApiInstance**(`baseURL`, `overrides?`): `AxiosInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `overrides` | `AxiosRequestConfig`<`any`\> |

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:16](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/init.ts#L16)

___

### getCurrentStep

▸ **getCurrentStep**(`s`): ``null`` \| [`Step`](../wiki/Step)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |

#### Returns

``null`` \| [`Step`](../wiki/Step)

#### Defined in

[src/core/helpers.ts:22](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L22)

___

### init

▸ **init**(`host`, `path?`, `overrides?`): [`InterviewProvider`](../wiki/InterviewProvider)

Initialize the SDK

chOnScreenData  : Renderer -{updated attribute}-> SDK
   - (the function never moves, so we can safely give it to the renderer)
newDataCallback : SDK -{updated session}-> Renderer :
   - if using react, the renderer needs to be careful, because unless this function is within
     a HOC, it will be recreated every render, and the SDK will not be able to send updates

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | `string` | `undefined` |
| `path` | `string` \| `string`[] | `defaultPath` |
| `overrides` | `AxiosRequestConfig`<`any`\> | `{}` |

#### Returns

[`InterviewProvider`](../wiki/InterviewProvider)

#### Defined in

[src/core/init.ts:111](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/init.ts#L111)

___

### isAttributeDynamic

▸ **isAttributeDynamic**(`attribId`, `state?`): `boolean`

Checks if an attribId is within the goal or dependency list of a state object.
NOTE: goals with zero dependencies will have themselves in the dependency list,
      but we check both anyway

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribId` | `string`[] |
| `state?` | [`State`](../wiki/State)[] |

#### Returns

`boolean`

`true` if any of the supplied attribIds are dynamic, `false` otherwise

#### Defined in

[src/core/helpers.ts:76](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L76)

___

### load

▸ **load**(`api`, `project`, `session`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:18](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L18)

___

### navigate

▸ **navigate**(`api`, `project`, `session`, `step`): `Promise`<[`Session`](../wiki/Session)\>

Navigate to a specific step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `step` | `string` | The desired step ID |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:41](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L41)

___

### render

▸ **render**(`template`, `data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

#### Returns

`string`

#### Defined in

[src/core/placeholders.ts:11](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/placeholders.ts#L11)

___

### replaceTemplatedText

▸ **replaceTemplatedText**(`obj`, `propNames`, `replacements`, `defaultReplacement?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `propNames` | `string`[] | `undefined` |
| `replacements` | [`AttributeData`](../wiki/Exports#attributedata) \| `Record`<`string`, `string`\> | `undefined` |
| `defaultReplacement` | `string` | `"..."` |

#### Returns

`void`

#### Defined in

[src/core/helpers.ts:31](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L31)

___

### setCurrentInStep

▸ **setCurrentInStep**(`s`, `id`): [`Step`](../wiki/Step)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |
| `id` | `string` |

#### Returns

[`Step`](../wiki/Step)

#### Defined in

[src/core/helpers.ts:6](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/helpers.ts#L6)

___

### simulate

▸ **simulate**(`api`, `project`, `release`, `session`, `data`): `Promise`<[`AttributeData`](../wiki/Exports#attributedata)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `release` | `string` |
| `session` | `string` |
| `data` | `Partial`<[`Simulate`](../wiki/Simulate)\> |

#### Returns

`Promise`<[`AttributeData`](../wiki/Exports#attributedata)\>

#### Defined in

[src/core/api.ts:51](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L51)

___

### submit

▸ **submit**(`api`, `project`, `session`, `data`, `navigate`, `overrides`, `releaseId?`): `Promise`<[`Session`](../wiki/Session)\>

Submit response for current step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) | The data for the current step to submit |
| `navigate` | [`Navigate`](../wiki/Exports#navigate) | The desired navigation after update, defaults to next |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) | Other params to pass through to payload |
| `releaseId?` | `string` | - |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:30](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/api.ts#L30)

___

### transformResponse

▸ **transformResponse**(`session`, `data`): [`ResponseData`](../wiki/Exports#responsedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../wiki/Session) |
| `data` | [`ResponseData`](../wiki/Exports#responsedata) |

#### Returns

[`ResponseData`](../wiki/Exports#responsedata)

#### Defined in

[src/core/init.ts:43](https://github.com/decisively-io/interview-sdk/blob/ede26c3/src/core/init.ts#L43)
