# Namespace: FileCtrlTypesNS

## Table of contents

### Type Aliases

- [OnFileTooBig](../wiki/FileCtrlTypesNS#onfiletoobig)
- [RemoveFile](../wiki/FileCtrlTypesNS#removefile)
- [UploadFile](../wiki/FileCtrlTypesNS#uploadfile)
- [UploadFileArg](../wiki/FileCtrlTypesNS#uploadfilearg)
- [UploadFileRtrn](../wiki/FileCtrlTypesNS#uploadfilertrn)

## Type Aliases

### OnFileTooBig

Ƭ **OnFileTooBig**: (`f`: `File`) => `unknown`

as it is possible to specify max file size, we need to take care of a proper\
communication with a user so that we don't just silently fail. This method \
will serve as a way for lib consumers to override how they want to signalize \
that file is too big.

#### Type declaration

▸ (`f`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `File` |

##### Returns

`unknown`

#### Defined in

[src/types/FileCtrl_types.ts:28](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/FileCtrl_types.ts#L28)

___

### RemoveFile

Ƭ **RemoveFile**: (`ref`: [`UploadFileRtrn`](../wiki/FileCtrlTypesNS#uploadfilertrn)[``"reference"``]) => `Promise`\<`unknown`\>

mainly for when we visit screens that we already submitted or when we recheck\
before final submit (in data container control). But I guess can also be used\
when uploading files and those are in temporary storage (for more general code)

#### Type declaration

▸ (`ref`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`UploadFileRtrn`](../wiki/FileCtrlTypesNS#uploadfilertrn)[``"reference"``] |

##### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/types/FileCtrl_types.ts:20](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/FileCtrl_types.ts#L20)

___

### UploadFile

Ƭ **UploadFile**: (`arg`: [`UploadFileArg`](../wiki/FileCtrlTypesNS#uploadfilearg)) => `Promise`\<[`UploadFileRtrn`](../wiki/FileCtrlTypesNS#uploadfilertrn)\>

#### Type declaration

▸ (`arg`): `Promise`\<[`UploadFileRtrn`](../wiki/FileCtrlTypesNS#uploadfilertrn)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`UploadFileArg`](../wiki/FileCtrlTypesNS#uploadfilearg) |

##### Returns

`Promise`\<[`UploadFileRtrn`](../wiki/FileCtrlTypesNS#uploadfilertrn)\>

#### Defined in

[src/types/FileCtrl_types.ts:13](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/FileCtrl_types.ts#L13)

___

### UploadFileArg

Ƭ **UploadFileArg**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | file contents presented as data uri, e.g. "data:text/plain;base64,qweasdzxc" |
| `name` | `string` | file name, e.g. "test.txt" |

#### Defined in

[src/types/FileCtrl_types.ts:1](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/FileCtrl_types.ts#L1)

___

### UploadFileRtrn

Ƭ **UploadFileRtrn**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | uuid |
| `reference` | `string` | **`Example`** ```ts 'data:id={uuid};base64,{base64-file-name}' ``` |

#### Defined in

[src/types/FileCtrl_types.ts:7](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/FileCtrl_types.ts#L7)
