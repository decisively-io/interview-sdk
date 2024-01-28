# Interface: IOptions

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

## Table of contents

### Properties

- [allow\_other](../wiki/IOptions#allow_other)
- [asRadio](../wiki/IOptions#asradio)
- [attribute](../wiki/IOptions#attribute)
- [default](../wiki/IOptions#default)
- [disabled](../wiki/IOptions#disabled)
- [enum\_id](../wiki/IOptions#enum_id)
- [id](../wiki/IOptions#id)
- [label](../wiki/IOptions#label)
- [labelLength](../wiki/IOptions#labellength)
- [options](../wiki/IOptions#options)
- [required](../wiki/IOptions#required)
- [showExplanation](../wiki/IOptions#showexplanation)
- [type](../wiki/IOptions#type)
- [value](../wiki/IOptions#value)

## Properties

### allow\_other

• `Optional` **allow\_other**: ``true``

Allow a user to add their own option, not in the list, in

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:191

___

### asRadio

• `Optional` **asRadio**: ``true``

Display as a series of radio buttons. \
Default display as standart select

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:176

___

### attribute

• **attribute**: `string`

uuid

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:184

___

### default

• `Optional` **default**: `string` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:182

___

### disabled

• `Optional` **disabled**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:180

___

### enum\_id

• **enum\_id**: `string`

uuid, design time only

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:193

___

### id

• **id**: `string`

unique id of the control

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:170

___

### label

• `Optional` **label**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:177

___

### labelLength

• `Optional` **labelLength**: `number`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:178

___

### options

• **options**: { `label`: `string` ; `value`: `string` \| `boolean`  }[]

design and runtime

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:186

___

### required

• `Optional` **required**: ``true``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:179

___

### showExplanation

• `Optional` **showExplanation**: `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:194

___

### type

• **type**: ``"options"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:171

___

### value

• `Optional` **value**: ``null`` \| `string` \| `boolean`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:181
