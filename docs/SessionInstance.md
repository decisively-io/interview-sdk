# Interface: SessionInstance

## Hierarchy

- [`Session`](../wiki/Session)

  ↳ **`SessionInstance`**

## Table of contents

### Properties

- [\_api](../wiki/SessionInstance#_api)
- [\_project](../wiki/SessionInstance#_project)
- [back](../wiki/SessionInstance#back)
- [chOnScreenData](../wiki/SessionInstance#chonscreendata)
- [context](../wiki/SessionInstance#context)
- [data](../wiki/SessionInstance#data)
- [externalLoading](../wiki/SessionInstance#externalloading)
- [navigate](../wiki/SessionInstance#navigate)
- [populate](../wiki/SessionInstance#populate)
- [progress](../wiki/SessionInstance#progress)
- [render](../wiki/SessionInstance#render)
- [renderAt](../wiki/SessionInstance#renderat)
- [save](../wiki/SessionInstance#save)
- [screen](../wiki/SessionInstance#screen)
- [sessionId](../wiki/SessionInstance#sessionid)
- [state](../wiki/SessionInstance#state)
- [status](../wiki/SessionInstance#status)
- [steps](../wiki/SessionInstance#steps)
- [submit](../wiki/SessionInstance#submit)

## Properties

### \_api

• **\_api**: `AxiosInstance`

#### Defined in

[src/core/types.ts:18](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L18)

___

### \_project

• **\_project**: `string`

#### Defined in

[src/core/types.ts:19](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L19)

___

### back

• **back**: () => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:24](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L24)

___

### chOnScreenData

• **chOnScreenData**: [`DynamicUpdateFunction`](../wiki/Exports#dynamicupdatefunction)

#### Defined in

[src/core/types.ts:27](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L27)

___

### context

• **context**: [`Context`](../wiki/Context)

#### Inherited from

[Session](../wiki/Session).[context](../wiki/Session#context)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:84

___

### data

• **data**: `Record`<`string`, [`TypedData`](../wiki/TypedData)\> & [`Parent`](../wiki/Parent)

#### Inherited from

[Session](../wiki/Session).[data](../wiki/Session#data)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:85

___

### externalLoading

• `Optional` **externalLoading**: `boolean`

#### Defined in

[src/core/types.ts:28](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L28)

___

### navigate

• **navigate**: (`step`: `string`) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`step`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `string` |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:22](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L22)

___

### populate

• **populate**: (`data`: [`AttributeData`](../wiki/Exports#attributedata)) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`data`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:25](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L25)

___

### progress

• `Optional` **progress**: [`Progress`](../wiki/Progress)

#### Inherited from

[Session](../wiki/Session).[progress](../wiki/Session#progress)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:89

___

### render

• **render**: (`value`: `string`) => `string`

#### Type declaration

▸ (`value`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

##### Returns

`string`

#### Defined in

[src/core/types.ts:23](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L23)

___

### renderAt

• `Optional` **renderAt**: `number`

#### Inherited from

[Session](../wiki/Session).[renderAt](../wiki/Session#renderat)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:90

___

### save

• **save**: (`data`: [`AttributeData`](../wiki/Exports#attributedata)) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`data`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:21](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L21)

___

### screen

• **screen**: [`Screen`](../wiki/Screen)

#### Inherited from

[Session](../wiki/Session).[screen](../wiki/Session#screen)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:88

___

### sessionId

• **sessionId**: `string`

Unique ID of the session

#### Inherited from

[Session](../wiki/Session).[sessionId](../wiki/Session#sessionid)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:82

___

### state

• `Optional` **state**: [`State`](../wiki/State)[]

#### Inherited from

[Session](../wiki/Session).[state](../wiki/Session#state)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:86

___

### status

• **status**: ``"complete"`` \| ``"error"`` \| ``"in-progress"``

#### Inherited from

[Session](../wiki/Session).[status](../wiki/Session#status)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:83

___

### steps

• **steps**: [`Step`](../wiki/Step)[]

#### Inherited from

[Session](../wiki/Session).[steps](../wiki/Session#steps)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:87

___

### submit

• **submit**: (`data`: [`AttributeData`](../wiki/Exports#attributedata), `navigate?`: [`Navigate`](../wiki/Exports#navigate), `overrides?`: [`Overrides`](../wiki/Exports#overrides)) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`data`, `navigate?`, `overrides?`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeData`](../wiki/Exports#attributedata) |
| `navigate?` | [`Navigate`](../wiki/Exports#navigate) |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/types.ts:20](https://github.com/decisively-io/interview-sdk/blob/1c4045a/src/core/types.ts#L20)
