# Interface: Step

## Table of contents

### Properties

- [complete](../wiki/Step#complete)
- [context](../wiki/Step#context)
- [current](../wiki/Step#current)
- [id](../wiki/Step#id)
- [sameAsPreviousSidebar](../wiki/Step#sameasprevioussidebar)
- [sidebar](../wiki/Step#sidebar)
- [skipped](../wiki/Step#skipped)
- [steps](../wiki/Step#steps)
- [title](../wiki/Step#title)
- [visitable](../wiki/Step#visitable)
- [visited](../wiki/Step#visited)

## Properties

### complete

• **complete**: `boolean`

Is the screen complete, that is has data been provided for the attributes in this step? A step will also be marked complete only when all of it's sub-steps are complete

#### Defined in

[src/types/core.ts:108](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L108)

___

### context

• **context**: [`Context`](../wiki/Context)

The context of the step

#### Defined in

[src/types/core.ts:104](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L104)

___

### current

• **current**: `boolean`

Whether the step is the current step of the interview. Only one step is marked current at any time

#### Defined in

[src/types/core.ts:106](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L106)

___

### id

• **id**: `string`

Unique ID of the screen

#### Defined in

[src/types/core.ts:100](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L100)

___

### sameAsPreviousSidebar

• `Optional` **sameAsPreviousSidebar**: `boolean`

#### Defined in

[src/types/core.ts:118](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L118)

___

### sidebar

• `Optional` **sidebar**: ``null`` \| [`EntityListSidebar`](../wiki/Exports#entitylistsidebar)

#### Defined in

[src/types/core.ts:119](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L119)

___

### skipped

• **skipped**: `boolean`

True if the screen was skipped due to relevancy or conditional rules. The user cannot navigate to this screen

#### Defined in

[src/types/core.ts:112](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L112)

___

### steps

• `Optional` **steps**: [`Step`](../wiki/Step)[]

An array of sub-steps

#### Defined in

[src/types/core.ts:116](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L116)

___

### title

• **title**: `string`

Title of the step. The screen may have a different title, so this title is intended for any menu UI

#### Defined in

[src/types/core.ts:102](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L102)

___

### visitable

• **visitable**: `boolean`

Whether a user can navigate to this screen. Some screens only exist as grouping of other screens (eg: just a header and some context info).

#### Defined in

[src/types/core.ts:114](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L114)

___

### visited

• **visited**: `boolean`

Has this step been visited by the user. A screen is marked as visited when either data is submitted from it or the user navigates away from it. A screen is not 'visited' until the user leaves it - so the current screen will always be marked as visited: false (unless it had been previously visited)

#### Defined in

[src/types/core.ts:110](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L110)
