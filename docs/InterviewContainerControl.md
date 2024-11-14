# Interface: InterviewContainerControl

Allows for an interview to be embedded within another interview

## Hierarchy

- `BaseControl`

  ↳ **`InterviewContainerControl`**

  ↳↳ [`RenderableInterviewContainerControl`](../wiki/RenderableInterviewContainerControl)

## Table of contents

### Properties

- [attribute](../wiki/InterviewContainerControl#attribute)
- [id](../wiki/InterviewContainerControl#id)
- [initialData](../wiki/InterviewContainerControl#initialdata)
- [interviewRef](../wiki/InterviewContainerControl#interviewref)
- [label](../wiki/InterviewContainerControl#label)
- [labelDisplay](../wiki/InterviewContainerControl#labeldisplay)
- [required](../wiki/InterviewContainerControl#required)
- [showExplanation](../wiki/InterviewContainerControl#showexplanation)
- [type](../wiki/InterviewContainerControl#type)
- [version](../wiki/InterviewContainerControl#version)

## Properties

### attribute

• `Optional` **attribute**: `undefined`

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:595](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L595)

___

### id

• **id**: `string`

#### Inherited from

BaseControl.id

#### Defined in

[src/types/controls.ts:6](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L6)

___

### initialData

• `Optional` **initialData**: `string`

optional JSON string

#### Defined in

[src/types/controls.ts:593](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L593)

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

#### Defined in

[src/types/controls.ts:584](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L584)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:579](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L579)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:580](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L580)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:581](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L581)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:582](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L582)

___

### type

• **type**: ``"interview_container"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:578](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L578)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/7ff582e2e1b882fdedb5de2863fed60488554378/src/types/controls.ts#L9)
