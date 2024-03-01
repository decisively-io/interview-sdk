# @decisively-io/interview-sdk

## Table of contents

### Interfaces

- [BooleanControl](../wiki/BooleanControl)
- [CertaintyContainerControl](../wiki/CertaintyContainerControl)
- [ConditionExpression](../wiki/ConditionExpression)
- [ConditionValue](../wiki/ConditionValue)
- [ConditionalContainerControl](../wiki/ConditionalContainerControl)
- [Context](../wiki/Context)
- [ControlsValue](../wiki/ControlsValue)
- [CurrencyControl](../wiki/CurrencyControl)
- [DateControl](../wiki/DateControl)
- [DateTimeControl](../wiki/DateTimeControl)
- [EntityControl](../wiki/EntityControl)
- [EntityInstance](../wiki/EntityInstance)
- [FileControl](../wiki/FileControl)
- [ImageControl](../wiki/ImageControl)
- [InterviewProvider](../wiki/InterviewProvider)
- [NumberOfInstancesControl](../wiki/NumberOfInstancesControl)
- [Option](../wiki/Option)
- [OptionsControl](../wiki/OptionsControl)
- [Parent](../wiki/Parent)
- [Progress](../wiki/Progress)
- [RepeatingContainerControl](../wiki/RepeatingContainerControl)
- [Screen](../wiki/Screen)
- [Session](../wiki/Session)
- [SessionConfig](../wiki/SessionConfig)
- [SessionInstance](../wiki/SessionInstance)
- [Simulate](../wiki/Simulate)
- [State](../wiki/State)
- [Step](../wiki/Step)
- [SwitchContainerControl](../wiki/SwitchContainerControl)
- [TextControl](../wiki/TextControl)
- [TimeControl](../wiki/TimeControl)
- [TypedData](../wiki/TypedData)
- [TypographyControl](../wiki/TypographyControl)

### Type Aliases

- [AttributeData](../wiki/Exports#attributedata)
- [AttributeId](../wiki/Exports#attributeid)
- [AttributeValue](../wiki/Exports#attributevalue)
- [ConditionType](../wiki/Exports#conditiontype)
- [Control](../wiki/Exports#control)
- [DynamicUpdateFunction](../wiki/Exports#dynamicupdatefunction)
- [EntityValue](../wiki/Exports#entityvalue)
- [IBoolean](../wiki/Exports#iboolean)
- [IControlsValue](../wiki/Exports#icontrolsvalue)
- [ICurrency](../wiki/Exports#icurrency)
- [IDate](../wiki/Exports#idate)
- [IDateTime](../wiki/Exports#idatetime)
- [IEntity](../wiki/Exports#ientity)
- [IEntityInstance](../wiki/Exports#ientityinstance)
- [IEntityValue](../wiki/Exports#ientityvalue)
- [IFile](../wiki/Exports#ifile)
- [IImage](../wiki/Exports#iimage)
- [INumberOfInstances](../wiki/Exports#inumberofinstances)
- [IOptions](../wiki/Exports#ioptions)
- [IText](../wiki/Exports#itext)
- [ITime](../wiki/Exports#itime)
- [ITypography](../wiki/Exports#itypography)
- [InterviewId](../wiki/Exports#interviewid)
- [Navigate](../wiki/Exports#navigate)
- [Overrides](../wiki/Exports#overrides)
- [ProjectId](../wiki/Exports#projectid)
- [ReleaseId](../wiki/Exports#releaseid)
- [RenderableControl](../wiki/Exports#renderablecontrol)
- [RenderableControlType](../wiki/Exports#renderablecontroltype)
- [ResponseData](../wiki/Exports#responsedata)
- [SessionId](../wiki/Exports#sessionid)
- [SessionObservable](../wiki/Exports#sessionobservable)
- [StepId](../wiki/Exports#stepid)

### Variables

- [ControlTypesInfo](../wiki/Exports#controltypesinfo)
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
- [exportTimeline](../wiki/Exports#exporttimeline)
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

### ConditionType

Ƭ **ConditionType**: ``"equals"`` \| ``"not-equals"`` \| ``"and"`` \| ``"or"`` \| ``"less-than"`` \| ``"less-than-equals"`` \| ``"greater-than"`` \| ``"greater-than-equals"`` \| ``"plus"`` \| ``"multiply"`` \| ``"divide"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:400

___

### Control

Ƭ **Control**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`EntityControl`](../wiki/EntityControl) \| [`RepeatingContainerControl`](../wiki/RepeatingContainerControl) \| [`CertaintyContainerControl`](../wiki/CertaintyContainerControl) \| [`SwitchContainerControl`](../wiki/SwitchContainerControl) \| [`ConditionalContainerControl`](../wiki/ConditionalContainerControl)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:412

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

[src/core/types.ts:15](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/types.ts#L15)

___

### EntityValue

Ƭ **EntityValue**: [`AttributeData`](../wiki/Exports#attributedata) & [`EntityInstance`](../wiki/EntityInstance)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:23

___

### IBoolean

Ƭ **IBoolean**: [`BooleanControl`](../wiki/BooleanControl)

**`Deprecated`**

Use `BooleanControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:30

___

### IControlsValue

Ƭ **IControlsValue**: [`ControlsValue`](../wiki/ControlsValue)

**`Deprecated`**

Use `ControlValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:419

___

### ICurrency

Ƭ **ICurrency**: [`CurrencyControl`](../wiki/CurrencyControl)

**`Deprecated`**

Use `CurrencyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:60

___

### IDate

Ƭ **IDate**: [`DateControl`](../wiki/DateControl)

**`Deprecated`**

Use `DateControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:89

___

### IDateTime

Ƭ **IDateTime**: [`DateTimeControl`](../wiki/DateTimeControl)

**`Deprecated`**

Use `DateTimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:174

___

### IEntity

Ƭ **IEntity**: [`EntityControl`](../wiki/EntityControl)

**`Deprecated`**

Use `EntityControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:373

___

### IEntityInstance

Ƭ **IEntityInstance**: [`EntityInstance`](../wiki/EntityInstance)

**`Deprecated`**

Use `EntityInstance` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:22

___

### IEntityValue

Ƭ **IEntityValue**: [`EntityValue`](../wiki/Exports#entityvalue)

**`Deprecated`**

Use `EntityValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:27

___

### IFile

Ƭ **IFile**: [`FileControl`](../wiki/FileControl)

**`Deprecated`**

Use `FileControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:251

___

### IImage

Ƭ **IImage**: [`ImageControl`](../wiki/ImageControl)

**`Deprecated`**

Use `ImageControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:269

___

### INumberOfInstances

Ƭ **INumberOfInstances**: [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl)

**`Deprecated`**

Use `NumberOfInstancesControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:301

___

### IOptions

Ƭ **IOptions**: [`OptionsControl`](../wiki/OptionsControl)

**`Deprecated`**

Use `OptionsControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:226

___

### IText

Ƭ **IText**: [`TextControl`](../wiki/TextControl)

**`Deprecated`**

Use `TextControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:331

___

### ITime

Ƭ **ITime**: [`TimeControl`](../wiki/TimeControl)

**`Deprecated`**

Use `TimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:133

___

### ITypography

Ƭ **ITypography**: [`TypographyControl`](../wiki/TypographyControl)

**`Deprecated`**

Use `TypographyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:347

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

### Overrides

Ƭ **Overrides**: `Record`<`string`, `any`\>

#### Defined in

[src/core/types.ts:13](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/types.ts#L13)

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

### RenderableControl

Ƭ **RenderableControl**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`EntityControl`](../wiki/EntityControl) \| [`ConditionalContainerControl`](../wiki/ConditionalContainerControl)<[`RenderableControl`](../wiki/Exports#renderablecontrol)\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:410

___

### RenderableControlType

Ƭ **RenderableControlType**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[``"type"``]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:411

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

[src/core/types.ts:33](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/types.ts#L33)

___

### StepId

Ƭ **StepId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:2

## Variables

### ControlTypesInfo

• `Const` **ControlTypesInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BOOLEAN` | { `id`: ``"boolean"`` = "boolean"; `name`: ``"Checkbox"`` = "Checkbox" } |
| `BOOLEAN.id` | ``"boolean"`` |
| `BOOLEAN.name` | ``"Checkbox"`` |
| `CERTAINTY_CONTAINER` | { `id`: ``"certainty_container"`` = "certainty\_container"; `name`: ``"Certainty Container"`` = "Certainty Container" } |
| `CERTAINTY_CONTAINER.id` | ``"certainty_container"`` |
| `CERTAINTY_CONTAINER.name` | ``"Certainty Container"`` |
| `CONDITIONAL_CONTAINER` | { `id`: ``"conditional_container"`` = "conditional\_container"; `name`: ``"Conditional Container"`` = "Conditional Container" } |
| `CONDITIONAL_CONTAINER.id` | ``"conditional_container"`` |
| `CONDITIONAL_CONTAINER.name` | ``"Conditional Container"`` |
| `CURRENCY` | { `id`: ``"currency"`` = "currency"; `name`: ``"Currency"`` = "Currency" } |
| `CURRENCY.id` | ``"currency"`` |
| `CURRENCY.name` | ``"Currency"`` |
| `DATE` | { `id`: ``"date"`` = "date"; `name`: ``"Date"`` = "Date" } |
| `DATE.id` | ``"date"`` |
| `DATE.name` | ``"Date"`` |
| `ENTITY` | { `id`: ``"entity"`` = "entity"; `name`: ``"Entity"`` = "Entity" } |
| `ENTITY.id` | ``"entity"`` |
| `ENTITY.name` | ``"Entity"`` |
| `NUMBER_OF_INSTANCES` | { `id`: ``"number_of_instances"`` = "number\_of\_instances"; `name`: ``"Number Of Instances"`` = "Number Of Instances" } |
| `NUMBER_OF_INSTANCES.id` | ``"number_of_instances"`` |
| `NUMBER_OF_INSTANCES.name` | ``"Number Of Instances"`` |
| `OPTIONS` | { `id`: ``"options"`` = "options"; `name`: ``"Select"`` = "Select" } |
| `OPTIONS.id` | ``"options"`` |
| `OPTIONS.name` | ``"Select"`` |
| `RADIO` | { `id`: ``"radio"`` = "radio"; `name`: ``"Radio Buttons"`` = "Radio Buttons" } |
| `RADIO.id` | ``"radio"`` |
| `RADIO.name` | ``"Radio Buttons"`` |
| `REPEATING_CONTAINER` | { `id`: ``"repeating_container"`` = "repeating\_container"; `name`: ``"Repeat Container"`` = "Repeat Container" } |
| `REPEATING_CONTAINER.id` | ``"repeating_container"`` |
| `REPEATING_CONTAINER.name` | ``"Repeat Container"`` |
| `SWITCH_CONTAINER` | { `id`: ``"switch_container"`` = "switch\_container"; `name`: ``"Switch Container"`` = "Switch Container" } |
| `SWITCH_CONTAINER.id` | ``"switch_container"`` |
| `SWITCH_CONTAINER.name` | ``"Switch Container"`` |
| `TEXT` | { `id`: ``"text"`` = "text"; `name`: ``"Text"`` = "Text" } |
| `TEXT.id` | ``"text"`` |
| `TEXT.name` | ``"Text"`` |
| `TIME` | { `id`: ``"time"`` = "time"; `name`: ``"Time"`` = "Time" } |
| `TIME.id` | ``"time"`` |
| `TIME.name` | ``"Time"`` |
| `TYPOGRAPHY` | { `id`: ``"typography"`` = "typography"; `name`: ``"Typography"`` = "Typography" } |
| `TYPOGRAPHY.id` | ``"typography"`` |
| `TYPOGRAPHY.name` | ``"Typography"`` |

#### Defined in

[src/core/constants.ts:1](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/constants.ts#L1)

___

### DATE\_FORMAT

• `Const` **DATE\_FORMAT**: ``"yyyy-MM-dd"``

pretty strange format, because it's from date-fns

**`Link`**

https://date-fns.org/v2.16.1/docs/format. \
For some reason their approach is that dd is "day \
of month" but DD is "day of year" (in dayjs DD is\
"day of month")

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:97

___

### DATE\_TIME\_FORMAT\_12

• `Const` **DATE\_TIME\_FORMAT\_12**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:176

___

### DATE\_TIME\_FORMAT\_24

• `Const` **DATE\_TIME\_FORMAT\_24**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:175

___

### TIME\_FORMAT\_12

• `Const` **TIME\_FORMAT\_12**: ``"h:mm:ss a"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:135

___

### TIME\_FORMAT\_24

• `Const` **TIME\_FORMAT\_24**: ``"HH:mm:ss"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:134

___

### defaultPath

• `Const` **defaultPath**: `string`[]

#### Defined in

[src/core/init.ts:96](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/init.ts#L96)

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

[src/core/api.ts:46](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L46)

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

[src/core/helpers.ts:51](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L51)

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

[src/core/helpers.ts:18](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L18)

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

[src/core/api.ts:6](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L6)

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

[src/core/init.ts:16](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/init.ts#L16)

___

### exportTimeline

▸ **exportTimeline**(`api`, `project`, `session`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/api.ts:66](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L66)

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

[src/core/helpers.ts:22](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L22)

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

[src/core/init.ts:114](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/init.ts#L114)

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

[src/core/helpers.ts:76](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L76)

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

[src/core/api.ts:18](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L18)

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

[src/core/api.ts:41](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L41)

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

[src/core/placeholders.ts:11](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/placeholders.ts#L11)

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

[src/core/helpers.ts:31](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L31)

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

[src/core/helpers.ts:6](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/helpers.ts#L6)

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

[src/core/api.ts:51](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L51)

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

[src/core/api.ts:30](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/api.ts#L30)

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

[src/core/init.ts:43](https://github.com/decisively-io/interview-sdk/blob/8cacc7d/src/core/init.ts#L43)
