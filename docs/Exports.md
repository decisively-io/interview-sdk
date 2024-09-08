# @decisively-io/interview-sdk

## Table of contents

### Classes

- [SessionInstance](../wiki/SessionInstance)

### Interfaces

- [AttributeData](../wiki/AttributeData)
- [BooleanControl](../wiki/BooleanControl)
- [CertaintyContainerControl](../wiki/CertaintyContainerControl)
- [ConditionExpression](../wiki/ConditionExpression)
- [ConditionValue](../wiki/ConditionValue)
- [Context](../wiki/Context)
- [ControlsValue](../wiki/ControlsValue)
- [CurrencyControl](../wiki/CurrencyControl)
- [DataContainerControl](../wiki/DataContainerControl)
- [DateControl](../wiki/DateControl)
- [DateTimeControl](../wiki/DateTimeControl)
- [DocumentControl](../wiki/DocumentControl)
- [EntityControl](../wiki/EntityControl)
- [EntityControlInstance](../wiki/EntityControlInstance)
- [EntityInstance](../wiki/EntityInstance)
- [FileControl](../wiki/FileControl)
- [FormatOptions](../wiki/FormatOptions)
- [ImageControl](../wiki/ImageControl)
- [InterviewProvider](../wiki/InterviewProvider)
- [NumberOfInstancesControl](../wiki/NumberOfInstancesControl)
- [Option](../wiki/Option)
- [OptionsControl](../wiki/OptionsControl)
- [Parent](../wiki/Parent)
- [Progress](../wiki/Progress)
- [RenderableCertaintyContainerControl](../wiki/RenderableCertaintyContainerControl)
- [RenderableDataContainerControl](../wiki/RenderableDataContainerControl)
- [RenderableEntityControl](../wiki/RenderableEntityControl)
- [RenderableRepeatingContainerControl](../wiki/RenderableRepeatingContainerControl)
- [RenderableSwitchContainerControl](../wiki/RenderableSwitchContainerControl)
- [RepeatingContainerControl](../wiki/RepeatingContainerControl)
- [Screen](../wiki/Screen)
- [Session](../wiki/Session)
- [SessionConfig](../wiki/SessionConfig)
- [Simulate](../wiki/Simulate)
- [State](../wiki/State)
- [Step](../wiki/Step)
- [SwitchContainerControl](../wiki/SwitchContainerControl)
- [TextControl](../wiki/TextControl)
- [TimeControl](../wiki/TimeControl)
- [TypographyControl](../wiki/TypographyControl)

### Type Aliases

- [AttributeId](../wiki/Exports#attributeid)
- [AttributeValue](../wiki/Exports#attributevalue)
- [AttributeValues](../wiki/Exports#attributevalues)
- [ConditionType](../wiki/Exports#conditiontype)
- [Control](../wiki/Exports#control)
- [ControlType](../wiki/Exports#controltype)
- [DateControlThreeVariantDate](../wiki/Exports#datecontrolthreevariantdate)
- [DynamicUpdateFunction](../wiki/Exports#dynamicupdatefunction)
- [EntityValue](../wiki/Exports#entityvalue)
- [Formatter](../wiki/Exports#formatter)
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
- [LabelDisplay](../wiki/Exports#labeldisplay)
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

- [applyInstancesToEntityControl](../wiki/Exports#applyinstancestoentitycontrol)
- [back](../wiki/Exports#back)
- [cmpAttributeData](../wiki/Exports#cmpattributedata)
- [containsCurrentStep](../wiki/Exports#containscurrentstep)
- [create](../wiki/Exports#create)
- [createApiInstance](../wiki/Exports#createapiinstance)
- [deriveDefaultControlsValue](../wiki/Exports#derivedefaultcontrolsvalue)
- [exportTimeline](../wiki/Exports#exporttimeline)
- [flatten](../wiki/Exports#flatten)
- [formatDate](../wiki/Exports#formatdate)
- [formatValue](../wiki/Exports#formatvalue)
- [getCurrentStep](../wiki/Exports#getcurrentstep)
- [getDate](../wiki/Exports#getdate)
- [init](../wiki/Exports#init)
- [isAttributeDynamic](../wiki/Exports#isattributedynamic)
- [iterateControls](../wiki/Exports#iteratecontrols)
- [load](../wiki/Exports#load)
- [navigate](../wiki/Exports#navigate-1)
- [render](../wiki/Exports#render)
- [replaceTemplatedText](../wiki/Exports#replacetemplatedtext)
- [simulate](../wiki/Exports#simulate)
- [submit](../wiki/Exports#submit)
- [transformResponse](../wiki/Exports#transformresponse)
- [uuid](../wiki/Exports#uuid)

## Type Aliases

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

### AttributeValues

Ƭ **AttributeValues**: `Record`<[`AttributeId`](../wiki/Exports#attributeid), [`AttributeValue`](../wiki/Exports#attributevalue)\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:15

___

### ConditionType

Ƭ **ConditionType**: ``"equals"`` \| ``"not-equals"`` \| ``"and"`` \| ``"or"`` \| ``"less-than"`` \| ``"less-than-equals"`` \| ``"greater-than"`` \| ``"greater-than-equals"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:513

___

### Control

Ƭ **Control**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`DocumentControl`](../wiki/DocumentControl) \| [`EntityControl`](../wiki/EntityControl) \| [`RepeatingContainerControl`](../wiki/RepeatingContainerControl) \| [`CertaintyContainerControl`](../wiki/CertaintyContainerControl) \| [`SwitchContainerControl`](../wiki/SwitchContainerControl) \| [`DataContainerControl`](../wiki/DataContainerControl)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:528

___

### ControlType

Ƭ **ControlType**: [`Control`](../wiki/Exports#control)[``"type"``]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:529

___

### DateControlThreeVariantDate

Ƭ **DateControlThreeVariantDate**: `string` \| ``"now"``

when we work with min/max/default date in an interview designer, \
we have several possible values that can be assigned to these:
- "now" literal value, which means "right now, this moment \
of time", and this is used when we want to use the date\
at which interview is being filled in by the user
- "YYYY-MM-DD"-like string, i.e. date that is formatted using \
this string and is exactly 10 characters long
- "{{some attribute name}}" - a very special value, that \
references another attribute in the graph. It must not have any\
trailing or leading whitespaces, no whitespaces between left or\
right bracket and the attribute, and have no | (which is an  \
attribute format description, I believe). \
**IMPORTANT** while this is a valid variant for interview designer\
to input, we don't expect BE to respond with this exact value \
when hydrating a Session for an interview runtime,\
instead it will replace this value with "YYYY-MM-DD" formatted \
string, that corresponds to referenced attribute.

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:88

___

### DynamicUpdateFunction

Ƭ **DynamicUpdateFunction**: (`data`: [`AttributeValues`](../wiki/Exports#attributevalues)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

##### Returns

`void`

#### Defined in

[src/core/types.ts:25](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/types.ts#L25)

___

### EntityValue

Ƭ **EntityValue**: [`AttributeValues`](../wiki/Exports#attributevalues) & [`EntityInstance`](../wiki/EntityInstance)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:27

___

### Formatter

Ƭ **Formatter**: ``"currency"`` \| \`date ${string}\` \| ``"date"``

#### Defined in

[src/core/formatting.ts:5](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/formatting.ts#L5)

___

### IBoolean

Ƭ **IBoolean**: [`BooleanControl`](../wiki/BooleanControl)

**`Deprecated`**

Use `BooleanControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:35

___

### IControlsValue

Ƭ **IControlsValue**: [`ControlsValue`](../wiki/ControlsValue)

**`Deprecated`**

Use `ControlValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:536

___

### ICurrency

Ƭ **ICurrency**: [`CurrencyControl`](../wiki/CurrencyControl)

**`Deprecated`**

Use `CurrencyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:68

___

### IDate

Ƭ **IDate**: [`DateControl`](../wiki/DateControl)

**`Deprecated`**

Use `DateControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:120

___

### IDateTime

Ƭ **IDateTime**: [`DateTimeControl`](../wiki/DateTimeControl)

**`Deprecated`**

Use `DateTimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:211

___

### IEntity

Ƭ **IEntity**: [`EntityControl`](../wiki/EntityControl)

**`Deprecated`**

Use `EntityControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:446

___

### IEntityInstance

Ƭ **IEntityInstance**: [`EntityInstance`](../wiki/EntityInstance)

**`Deprecated`**

Use `EntityInstance` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:26

___

### IEntityValue

Ƭ **IEntityValue**: [`EntityValue`](../wiki/Exports#entityvalue)

**`Deprecated`**

Use `EntityValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:31

___

### IFile

Ƭ **IFile**: [`FileControl`](../wiki/FileControl)

**`Deprecated`**

Use `FileControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:293

___

### IImage

Ƭ **IImage**: [`ImageControl`](../wiki/ImageControl)

**`Deprecated`**

Use `ImageControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:311

___

### INumberOfInstances

Ƭ **INumberOfInstances**: [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl)

**`Deprecated`**

Use `NumberOfInstancesControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:346

___

### IOptions

Ƭ **IOptions**: [`OptionsControl`](../wiki/OptionsControl)

**`Deprecated`**

Use `OptionsControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:266

___

### IText

Ƭ **IText**: [`TextControl`](../wiki/TextControl)

**`Deprecated`**

Use `TextControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:379

___

### ITime

Ƭ **ITime**: [`TimeControl`](../wiki/TimeControl)

**`Deprecated`**

Use `TimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:167

___

### ITypography

Ƭ **ITypography**: [`TypographyControl`](../wiki/TypographyControl)

**`Deprecated`**

Use `TypographyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:418

___

### InterviewId

Ƭ **InterviewId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:6

___

### LabelDisplay

Ƭ **LabelDisplay**: ``"automatic"`` \| ``"separate"`` \| ``"inline"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:2

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

[src/core/types.ts:23](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/types.ts#L23)

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

Ƭ **RenderableControl**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`DocumentControl`](../wiki/DocumentControl) \| [`RenderableEntityControl`](../wiki/RenderableEntityControl) \| [`RenderableSwitchContainerControl`](../wiki/RenderableSwitchContainerControl) \| [`RenderableCertaintyContainerControl`](../wiki/RenderableCertaintyContainerControl) \| [`RenderableRepeatingContainerControl`](../wiki/RenderableRepeatingContainerControl) \| [`RenderableDataContainerControl`](../wiki/RenderableDataContainerControl) & { `dynamicAttributes?`: `string`[] ; `loading?`: `boolean`  }

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:523

___

### RenderableControlType

Ƭ **RenderableControlType**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[``"type"``]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:527

___

### ResponseData

Ƭ **ResponseData**: [`AttributeValues`](../wiki/Exports#attributevalues) & [`Parent`](../wiki/Parent)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:19

___

### SessionId

Ƭ **SessionId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:5

___

### SessionObservable

Ƭ **SessionObservable**: `Partial`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:510](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/init.ts#L510)

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
| `CURRENCY` | { `id`: ``"currency"`` = "currency"; `name`: ``"Currency"`` = "Currency" } |
| `CURRENCY.id` | ``"currency"`` |
| `CURRENCY.name` | ``"Currency"`` |
| `DATA_CONTAINER` | { `id`: ``"data_container"`` = "data\_container"; `name`: ``"Data Container"`` = "Data Container" } |
| `DATA_CONTAINER.id` | ``"data_container"`` |
| `DATA_CONTAINER.name` | ``"Data Container"`` |
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

[src/core/constants.ts:1](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/constants.ts#L1)

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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:128

___

### DATE\_TIME\_FORMAT\_12

• `Const` **DATE\_TIME\_FORMAT\_12**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:213

___

### DATE\_TIME\_FORMAT\_24

• `Const` **DATE\_TIME\_FORMAT\_24**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:212

___

### TIME\_FORMAT\_12

• `Const` **TIME\_FORMAT\_12**: ``"h:mm:ss a"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:169

___

### TIME\_FORMAT\_24

• `Const` **TIME\_FORMAT\_24**: ``"HH:mm:ss"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:168

___

### defaultPath

• `Const` **defaultPath**: `string`[]

#### Defined in

[src/core/init.ts:74](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/init.ts#L74)

## Functions

### applyInstancesToEntityControl

▸ **applyInstancesToEntityControl**(`control`, `instances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | [`RenderableEntityControl`](../wiki/RenderableEntityControl) |
| `instances` | `string`[] |

#### Returns

`void`

#### Defined in

[src/core/util.ts:92](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/util.ts#L92)

___

### back

▸ **back**(`api`, `project`, `session`, `overrides?`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:77](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L77)

___

### cmpAttributeData

▸ **cmpAttributeData**(`prev`, `next`): [`AttributeValues`](../wiki/Exports#attributevalues)

Strips out any common attributes between two AttributeValues objects, reporting only the latest changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | [`AttributeValues`](../wiki/Exports#attributevalues) | The previous state of the attributes |
| `next` | [`AttributeValues`](../wiki/Exports#attributevalues) | The current state of the attributes |

#### Returns

[`AttributeValues`](../wiki/Exports#attributevalues)

#### Defined in

[src/core/helpers.ts:44](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/helpers.ts#L44)

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

[src/core/helpers.ts:6](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/helpers.ts#L6)

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

[src/core/api.ts:15](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L15)

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

[src/core/init.ts:32](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/init.ts#L32)

___

### deriveDefaultControlsValue

▸ **deriveDefaultControlsValue**(`controls`, `nested?`): [`ControlsValue`](../wiki/ControlsValue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | [`RenderableControl`](../wiki/Exports#renderablecontrol)[] |
| `nested?` | `boolean` |

#### Returns

[`ControlsValue`](../wiki/ControlsValue)

#### Defined in

[src/core/util.ts:119](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/util.ts#L119)

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

[src/core/api.ts:104](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L104)

___

### flatten

▸ **flatten**(`value`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/core/util.ts:234](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/util.ts#L234)

___

### formatDate

▸ **formatDate**(`argument`, `dateFormat`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | `string` \| `number` \| `Date` |
| `dateFormat` | `string` |
| `options?` | `Object` |
| `options.firstWeekContainsDate?` | `number` |
| `options.locale?` | `Locale` |
| `options.useAdditionalDayOfYearTokens?` | `boolean` |
| `options.useAdditionalWeekYearTokens?` | `boolean` |
| `options.weekStartsOn?` | ``0`` \| ``2`` \| ``3`` \| ``1`` \| ``4`` \| ``5`` \| ``6`` |

#### Returns

`string`

#### Defined in

[src/core/util.ts:225](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/util.ts#L225)

___

### formatValue

▸ **formatValue**(`value`, `options?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AttributeValue`](../wiki/Exports#attributevalue) |
| `options?` | [`FormatOptions`](../wiki/FormatOptions) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/formatting.ts:78](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/formatting.ts#L78)

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

[src/core/helpers.ts:10](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/helpers.ts#L10)

___

### getDate

▸ **getDate**(`value`): `undefined` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| `Date`

#### Defined in

[src/core/formatting.ts:26](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/formatting.ts#L26)

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

[src/core/init.ts:521](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/init.ts#L521)

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

[src/core/helpers.ts:69](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/helpers.ts#L69)

___

### iterateControls

▸ **iterateControls**(`controls`, `func`, `template?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | [`Control`](../wiki/Exports#control)[] |
| `func` | (`control`: [`Control`](../wiki/Exports#control)) => `void` |
| `template?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/util.ts:47](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/util.ts#L47)

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

[src/core/api.ts:31](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L31)

___

### navigate

▸ **navigate**(`api`, `project`, `session`, `step`, `overrides?`): `Promise`<[`Session`](../wiki/Session)\>

Navigate to a specific step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `step` | `string` | The desired step ID |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) | - |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:66](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L66)

___

### render

▸ **render**(`template`, `data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

#### Returns

`string`

#### Defined in

[src/core/placeholders.ts:10](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/placeholders.ts#L10)

___

### replaceTemplatedText

▸ **replaceTemplatedText**(`text`, `replacements`, `state?`, `locale?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `replacements` | [`AttributeValues`](../wiki/Exports#attributevalues) \| `Record`<`string`, `string`\> |
| `state?` | [`State`](../wiki/State)[] |
| `locale?` | `string` |

#### Returns

`string`

#### Defined in

[src/core/helpers.ts:19](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/helpers.ts#L19)

___

### simulate

▸ **simulate**(`api`, `project`, `release`, `session`, `data`): `Promise`<[`AttributeValues`](../wiki/Exports#attributevalues)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `release` | `string` |
| `session` | `string` |
| `data` | `Partial`<[`Simulate`](../wiki/Simulate)\> |

#### Returns

`Promise`<[`AttributeValues`](../wiki/Exports#attributevalues)\>

#### Defined in

[src/core/api.ts:82](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L82)

___

### submit

▸ **submit**(`api`, `project`, `session`, `data`, `navigate`, `overrides?`, `releaseId?`): `Promise`<[`Session`](../wiki/Session)\>

Submit response for current step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) | The data for the current step to submit |
| `navigate` | [`Navigate`](../wiki/Exports#navigate) | The desired navigation after update, defaults to next |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) | Other params to pass through to payload |
| `releaseId?` | `string` | - |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:43](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/api.ts#L43)

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

[src/core/init.ts:59](https://github.com/decisively-io/interview-sdk/blob/3c9f630/src/core/init.ts#L59)

___

### uuid

▸ **uuid**<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OutputBuffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| `V4Options` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:38

▸ **uuid**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `V4Options` |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:37
