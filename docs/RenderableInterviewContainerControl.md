# Interface: RenderableInterviewContainerControl

Allows for an interview to be embedded within another interview

## Hierarchy

- [`InterviewContainerControl`](../wiki/InterviewContainerControl)

  ↳ **`RenderableInterviewContainerControl`**

## Table of contents

### Properties

- [attribute](../wiki/RenderableInterviewContainerControl#attribute)
- [id](../wiki/RenderableInterviewContainerControl#id)
- [initialData](../wiki/RenderableInterviewContainerControl#initialdata)
- [interviewRef](../wiki/RenderableInterviewContainerControl#interviewref)
- [label](../wiki/RenderableInterviewContainerControl#label)
- [labelDisplay](../wiki/RenderableInterviewContainerControl#labeldisplay)
- [required](../wiki/RenderableInterviewContainerControl#required)
- [showExplanation](../wiki/RenderableInterviewContainerControl#showexplanation)
- [type](../wiki/RenderableInterviewContainerControl#type)
- [version](../wiki/RenderableInterviewContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `undefined`

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[attribute](../wiki/InterviewContainerControl#attribute)

#### Defined in

[src/types/controls.ts:595](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L595)

___

### id

• **id**: `string`

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[id](../wiki/InterviewContainerControl#id)

#### Defined in

[src/types/controls.ts:6](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L6)

___

### initialData

• `Optional` **initialData**: `string`

optional JSON string

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[initialData](../wiki/InterviewContainerControl#initialdata)

#### Defined in

[src/types/controls.ts:593](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L593)

___

### interviewRef

• **interviewRef**: `Object`

may point to interviews from different workspaces and/or projects

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `interactionMode` | ``"same-session"`` \| ``"new-session"`` \| ``"different-project"`` | available options will vary depending on whether the interview is within the same project or not |
| `interviewId` | `string` | - |
| `projectId` | `string` | only specify the project ID and not the release because we'll always take the latest |
| `workspaceId` | `string` | - |

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[interviewRef](../wiki/InterviewContainerControl#interviewref)

#### Defined in

[src/types/controls.ts:584](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L584)

___

### label

• `Optional` **label**: `string`

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[label](../wiki/InterviewContainerControl#label)

#### Defined in

[src/types/controls.ts:579](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L579)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[labelDisplay](../wiki/InterviewContainerControl#labeldisplay)

#### Defined in

[src/types/controls.ts:580](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L580)

___

### required

• `Optional` **required**: ``true``

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[required](../wiki/InterviewContainerControl#required)

#### Defined in

[src/types/controls.ts:581](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L581)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[showExplanation](../wiki/InterviewContainerControl#showexplanation)

#### Defined in

[src/types/controls.ts:582](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L582)

___

### type

• **type**: ``"interview_container"``

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[type](../wiki/InterviewContainerControl#type)

#### Defined in

[src/types/controls.ts:578](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L578)

___

### version

• `Optional` **version**: `number`

#### Inherited from

[InterviewContainerControl](../wiki/InterviewContainerControl).[version](../wiki/InterviewContainerControl#version)

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/88201aefe0053753c57ed3533baaa60dd3f28a04/src/types/controls.ts#L9)
