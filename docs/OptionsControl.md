# Interface: OptionsControl

Allow a user to select from a predefined list of options (eg: a dropdown or a radio button).
```text
Note: the design time UI shows the options within a single field in the form:
<label>:<value>
<label>:<value>
This should be converted into (and out of) the above format when sending to the server
```
<br/>

```text
Note: the enum_id is only used in design time.
It signifies if the attribute should use a predefined enumeration.
The run time API will detect this and auto populate the options
attribute (and not send the enum_id to the client.
```

## Hierarchy

- `BaseControl`

  ↳ **`OptionsControl`**

## Table of contents

### Properties

- [allow\_other](../wiki/OptionsControl#allow_other)
- [asRadio](../wiki/OptionsControl#asradio)
- [attribute](../wiki/OptionsControl#attribute)
- [default](../wiki/OptionsControl#default)
- [disabled](../wiki/OptionsControl#disabled)
- [enum\_id](../wiki/OptionsControl#enum_id)
- [id](../wiki/OptionsControl#id)
- [label](../wiki/OptionsControl#label)
- [labelDisplay](../wiki/OptionsControl#labeldisplay)
- [labelLength](../wiki/OptionsControl#labellength)
- [options](../wiki/OptionsControl#options)
- [required](../wiki/OptionsControl#required)
- [showExplanation](../wiki/OptionsControl#showexplanation)
- [type](../wiki/OptionsControl#type)
- [value](../wiki/OptionsControl#value)
- [version](../wiki/OptionsControl#version)

## Properties

### allow\_other

• `Optional` **allow\_other**: ``true``

Allow a user to add their own option, not in the list, in

#### Defined in

[src/types/controls.ts:268](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L268)

___

### asRadio

• `Optional` **asRadio**: ``true``

Display as a series of radio buttons. \
Default display as standart select

#### Defined in

[src/types/controls.ts:255](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L255)

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

[src/types/controls.ts:264](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L264)

___

### default

• `Optional` **default**: `string` \| `boolean`

#### Defined in

[src/types/controls.ts:262](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L262)

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

[src/types/controls.ts:260](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L260)

___

### enum\_id

• `Optional` **enum\_id**: `string`

uuid, design time only

#### Defined in

[src/types/controls.ts:270](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L270)

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

[src/types/controls.ts:249](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L249)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/types/controls.ts:256](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L256)

___

### labelDisplay

• `Optional` **labelDisplay**: [`LabelDisplay`](../wiki/Exports#labeldisplay)

#### Defined in

[src/types/controls.ts:257](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L257)

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

[src/types/controls.ts:258](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L258)

___

### options

• `Optional` **options**: [`Option`](../wiki/Option)[]

design and runtime

#### Defined in

[src/types/controls.ts:266](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L266)

___

### required

• `Optional` **required**: ``true``

#### Defined in

[src/types/controls.ts:259](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L259)

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

[src/types/controls.ts:271](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L271)

___

### type

• **type**: ``"options"``

#### Overrides

BaseControl.type

#### Defined in

[src/types/controls.ts:250](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L250)

___

### value

• `Optional` **value**: ``null`` \| `string` \| `boolean`

#### Defined in

[src/types/controls.ts:261](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L261)

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

[src/types/controls.ts:9](https://github.com/decisively-io/interview-sdk/blob/c6fbae0/src/types/controls.ts#L9)
