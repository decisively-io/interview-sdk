# Interface: Screen

## Table of contents

### Properties

- [allAttributes](../wiki/Screen#allattributes)
- [attributes](../wiki/Screen#attributes)
- [buttons](../wiki/Screen#buttons)
- [controls](../wiki/Screen#controls)
- [id](../wiki/Screen#id)
- [sidebars](../wiki/Screen#sidebars)
- [title](../wiki/Screen#title)

## Properties

### allAttributes

• **allAttributes**: `string`[]

#### Defined in

[src/types/core.ts:170](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L170)

___

### attributes

• **attributes**: `string`[]

#### Defined in

[src/types/core.ts:169](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L169)

___

### buttons

• `Optional` **buttons**: [`ScreenButtons`](../wiki/ScreenButtons)

Should the next/back buttons be enabled *

#### Defined in

[src/types/core.ts:167](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L167)

___

### controls

• **controls**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[]

The list of controls to be displayed on the screen

#### Defined in

[src/types/core.ts:163](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L163)

___

### id

• **id**: `string`

Unique ID of the screen

#### Defined in

[src/types/core.ts:161](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L161)

___

### sidebars

• `Optional` **sidebars**: ``null`` \| [`RenderableSidebar`](../wiki/Exports#renderablesidebar)[]

The sidebar to render *

#### Defined in

[src/types/core.ts:165](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L165)

___

### title

• **title**: `string`

The title of the screen. This may differ from the title in the step

#### Defined in

[src/types/core.ts:159](https://github.com/decisively-io/interview-sdk/blob/627ef82666aecd2a7bca80832b00b07c957b7ddc/src/types/core.ts#L159)
