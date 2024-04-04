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

node_modules/@decisively-io/types-interview/dist/controls.d.ts:219

___

### asRadio

• `Optional` **asRadio**: ``true``

Display as a series of radio buttons. \
Default display as standart select

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:207

___

### attribute

• **attribute**: `string`

uuid

#### Overrides

BaseControl.attribute

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:215

___

### default

• `Optional` **default**: `string` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:213

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:211

___

### enum\_id

• `Optional` **enum\_id**: `string`

uuid, design time only

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:221

___

### id

• **id**: `string`

unique id of the control

#### Overrides

BaseControl.id

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:201

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:208

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:209

___

### options

• `Optional` **options**: [`Option`](../wiki/Option)[]

design and runtime

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:217

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:210

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:222

___

### type

• **type**: ``"options"``

#### Overrides

BaseControl.type

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:202

___

### value

• `Optional` **value**: ``null`` \| `string` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:212

___

### version

• `Optional` **version**: `number`

#### Inherited from

BaseControl.version

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:6
