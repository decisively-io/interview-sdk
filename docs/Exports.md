# @decisively-io/interview-sdk

## Table of contents

### Interfaces

- [SessionConfig](../wiki/SessionConfig)
- [SessionInstance](../wiki/SessionInstance)

### Type Aliases

- [DynamicUpdateFunction](../wiki/Exports#dynamicupdatefunction)
- [Overrides](../wiki/Exports#overrides)
- [SessionObservable](../wiki/Exports#sessionobservable)

### Variables

- [defaultPath](../wiki/Exports#defaultpath)

### Functions

- [cmpAttributeData](../wiki/Exports#cmpattributedata)
- [containsCurrentStep](../wiki/Exports#containscurrentstep)
- [create](../wiki/Exports#create)
- [createApiInstance](../wiki/Exports#createapiinstance)
- [getCurrentStep](../wiki/Exports#getcurrentstep)
- [init](../wiki/Exports#init)
- [isAttributeDynamic](../wiki/Exports#isattributedynamic)
- [load](../wiki/Exports#load)
- [navigate](../wiki/Exports#navigate)
- [render](../wiki/Exports#render)
- [replaceTemplatedText](../wiki/Exports#replacetemplatedtext)
- [setCurrentInStep](../wiki/Exports#setcurrentinstep)
- [simulate](../wiki/Exports#simulate)
- [submit](../wiki/Exports#submit)
- [transformResponse](../wiki/Exports#transformresponse)

## Type Aliases

### DynamicUpdateFunction

Ƭ **DynamicUpdateFunction**: (`data`: `AttributeData`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `AttributeData` |

##### Returns

`void`

#### Defined in

[src/core/types.ts:15](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/types.ts#L15)

___

### Overrides

Ƭ **Overrides**: `Record`<`string`, `any`\>

#### Defined in

[src/core/types.ts:13](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/types.ts#L13)

___

### SessionObservable

Ƭ **SessionObservable**: `Partial`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:31](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/types.ts#L31)

## Variables

### defaultPath

• `Const` **defaultPath**: `string`[]

#### Defined in

[src/core/init.ts:132](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/init.ts#L132)

## Functions

### cmpAttributeData

▸ **cmpAttributeData**(`prev`, `next`): `AttributeData`

Strips out any common attributes between two AttributeData objects, reporting only the latest changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | `AttributeData` | The previous state of the attributes |
| `next` | `AttributeData` | The current state of the attributes |

#### Returns

`AttributeData`

#### Defined in

[src/core/helpers.ts:57](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L57)

___

### containsCurrentStep

▸ **containsCurrentStep**(`s`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `Step` |

#### Returns

`boolean`

#### Defined in

[src/core/helpers.ts:20](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L20)

___

### create

▸ **create**(`api`, `project`, `options?`): `Promise`<`Session`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `options` | [`SessionConfig`](../wiki/SessionConfig) |

#### Returns

`Promise`<`Session`\>

#### Defined in

[src/core/api.ts:6](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/api.ts#L6)

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

[src/core/init.ts:44](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/init.ts#L44)

___

### getCurrentStep

▸ **getCurrentStep**(`s`): ``null`` \| `Step`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `Step` |

#### Returns

``null`` \| `Step`

#### Defined in

[src/core/helpers.ts:24](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L24)

___

### init

▸ **init**(`host`, `path?`, `overrides?`): `Object`

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

`Object`

| Name | Type |
| :------ | :------ |
| `create` | (`project`: `string`, `config`: [`SessionConfig`](../wiki/SessionConfig), `newDataCallback?`: (`data`: `any`) => `void`) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\> |
| `finish` | () => `void` |
| `load` | (`project`: `string`, `sessionId`: `string`) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\> |

#### Defined in

[src/core/init.ts:143](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/init.ts#L143)

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
| `state?` | `State`[] |

#### Returns

`boolean`

`true` if any of the supplied attribIds are dynamic, `false` otherwise

#### Defined in

[src/core/helpers.ts:83](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L83)

___

### load

▸ **load**(`api`, `project`, `session`): `Promise`<`Session`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<`Session`\>

#### Defined in

[src/core/api.ts:18](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/api.ts#L18)

___

### navigate

▸ **navigate**(`api`, `project`, `session`, `step`): `Promise`<`Session`\>

Navigate to a specific step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `step` | `string` | The desired step ID |

#### Returns

`Promise`<`Session`\>

#### Defined in

[src/core/api.ts:41](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/api.ts#L41)

___

### render

▸ **render**(`template`, `data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |
| `data` | `AttributeData` |

#### Returns

`string`

#### Defined in

[src/core/placeholders.ts:11](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/placeholders.ts#L11)

___

### replaceTemplatedText

▸ **replaceTemplatedText**(`obj`, `propNames`, `replacements`, `defaultReplacement?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `any` | `undefined` |
| `propNames` | `string`[] | `undefined` |
| `replacements` | `AttributeData` \| `Record`<`string`, `string`\> | `undefined` |
| `defaultReplacement` | `string` | `'...'` |

#### Returns

`void`

#### Defined in

[src/core/helpers.ts:36](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L36)

___

### setCurrentInStep

▸ **setCurrentInStep**(`s`, `id`): `Step`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `Step` |
| `id` | `string` |

#### Returns

`Step`

#### Defined in

[src/core/helpers.ts:7](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/helpers.ts#L7)

___

### simulate

▸ **simulate**(`api`, `project`, `release`, `session`, `data`): `Promise`<`AttributeData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `release` | `string` |
| `session` | `string` |
| `data` | `Partial`<`Simulate`\> |

#### Returns

`Promise`<`AttributeData`\>

#### Defined in

[src/core/api.ts:46](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/api.ts#L46)

___

### submit

▸ **submit**(`api`, `project`, `session`, `data`, `navigate`, `overrides`, `releaseId?`): `Promise`<`Session`\>

Submit response for current step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `data` | `AttributeData` | The data for the current step to submit |
| `navigate` | `Navigate` | The desired navigation after update, defaults to next |
| `overrides` | [`Overrides`](../wiki/Exports#overrides) | Other params to pass through to payload |
| `releaseId?` | `string` | - |

#### Returns

`Promise`<`Session`\>

#### Defined in

[src/core/api.ts:30](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/api.ts#L30)

___

### transformResponse

▸ **transformResponse**(`session`, `data`): `ResponseData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | `Session` |
| `data` | `ResponseData` |

#### Returns

`ResponseData`

#### Defined in

[src/core/init.ts:75](https://github.com/decisively-io/interview-sdk/blob/7896046/src/core/init.ts#L75)
