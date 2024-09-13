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

[src/core/init.ts:69](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/core/init.ts#L69)

___

### finish

• **finish**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/core/init.ts:71](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/core/init.ts#L71)

___

### load

• **load**: (`project`: `string`, `sessionId`: `string`) => `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`project`, `sessionId`): `Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |
| `sessionId` | `string` |

##### Returns

`Promise`\<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:70](https://github.com/decisively-io/interview-sdk/blob/770bbcca93a518c7b415ad9d9ccd638fa2cf2acf/src/core/init.ts#L70)
