# Interface: InterviewProvider

## Table of contents

### Properties

- [create](../wiki/InterviewProvider#create)
- [finish](../wiki/InterviewProvider#finish)
- [load](../wiki/InterviewProvider#load)

## Properties

### create

• **create**: (`project`: `string`, `config`: [`SessionConfig`](../wiki/SessionConfig), `newDataCallback?`: `NewDataCallback`) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`project`, `config`, `newDataCallback?`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |
| `config` | [`SessionConfig`](../wiki/SessionConfig) |
| `newDataCallback?` | `NewDataCallback` |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:79](https://github.com/decisively-io/interview-sdk/blob/00b4a6d/src/core/init.ts#L79)

___

### finish

• **finish**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/core/init.ts:81](https://github.com/decisively-io/interview-sdk/blob/00b4a6d/src/core/init.ts#L81)

___

### load

• **load**: (`project`: `string`, `sessionId`: `string`) => `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Type declaration

▸ (`project`, `sessionId`): `Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `string` |
| `sessionId` | `string` |

##### Returns

`Promise`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:80](https://github.com/decisively-io/interview-sdk/blob/00b4a6d/src/core/init.ts#L80)
