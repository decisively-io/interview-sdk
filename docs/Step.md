# Interface: Step

## Table of contents

### Properties

- [complete](../wiki/Step#complete)
- [context](../wiki/Step#context)
- [current](../wiki/Step#current)
- [id](../wiki/Step#id)
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

node_modules/@decisively-io/types-interview/dist/core.d.ts:66

___

### context

• **context**: [`Context`](../wiki/Context)

The context of the step

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:62

___

### current

• **current**: `boolean`

Whether the step is the current step of the interview. Only one step is marked current at any time

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:64

___

### id

• **id**: `string`

Unique ID of the screen

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:58

___

### skipped

• **skipped**: `boolean`

True if the screen was skipped due to relevancy or conditional rules. The user cannot navigate to this screen

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:70

___

### steps

• `Optional` **steps**: [`Step`](../wiki/Step)[]

An array of sub-steps

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:74

___

### title

• **title**: `string`

Title of the step. The screen may have a different title, so this title is intended for any menu UI

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:60

___

### visitable

• **visitable**: `boolean`

Whether a user can navigate to this screen. Some screens only exist as grouping of other screens (eg: just a header and some context info).

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:72

___

### visited

• **visited**: `boolean`

Has this step been visited by the user. A screen is marked as visited when either data is submitted from it or the user navigates away from it. A screen is not 'visited' until the user leaves it - so the current screen will always be marked as visited: false (unless it had been previously visited)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:68
