# Interface: InterviewProvider

## Table of contents

### Properties

- [create](../wiki/InterviewProvider#create)
- [finish](../wiki/InterviewProvider#finish)
- [load](../wiki/InterviewProvider#load)

## Properties

### create

• **create**: (`project`: `string`, `config`: [`SessionConfig`](../wiki/SessionConfig), `newDataCallback?`: `NewDataCallback`) => `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`project`, `config`, `newDataCallback?`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |
| `config` | [`SessionConfig`](../wiki/SessionConfig) |
| `newDataCallback?` | `NewDataCallback` |

##### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:74](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L74)

___

### finish

• **finish**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/core/init.ts:76](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L76)

___

### load

• **load**: (`project`: `string`, `sessionId`: `string`, `interactionId?`: `string`) => `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`project`, `sessionId`, `interactionId?`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |
| `sessionId` | `string` |
| `interactionId?` | `string` |

##### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:75](https://github.com/decisively-io/interview-sdk/blob/de8f2ee69dbcb31d956f391c52b0e0db7d4d25b4/src/core/init.ts#L75)
