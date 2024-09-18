# Interface: Context

Defines the context that the attributes within the screen exist within (whether they belong to the global object, or a sub-entity)

## Table of contents

### Properties

- [entity](../wiki/Context#entity)
- [id](../wiki/Context#id)
- [parent](../wiki/Context#parent)

## Properties

### entity

• **entity**: `string`

Entity defines the entity that the screen belongs to. Either 'global' for the global object or the name of the entity

#### Defined in

[src/types/core.ts:72](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L72)

___

### id

• `Optional` **id**: `string`

Defines the id of the instance of the entity that is being referred to. For instance, if a project had an entity called 'household_member' the id would be used to determine which instance of the household_member is being referred to. This field will only appear when the entity is not 'global'

#### Defined in

[src/types/core.ts:74](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L74)

___

### parent

• `Optional` **parent**: `string`

Defines the parent path (if present) to the specific instance. The parent is of the form \<parent entity\>/\<parent index\> repeated for every parent up the global object (though global is never included in a parent path)

#### Defined in

[src/types/core.ts:76](https://github.com/decisively-io/interview-sdk/blob/919a52acaf4d23d3a6e65e9ac2647b658082e269/src/types/core.ts#L76)
