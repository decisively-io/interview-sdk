## Context

The context attribute defines the context that the attributes within the screen exist within (whether they belong to the global object, or a sub-entity). The context has the following form:

```{
  entity: 'string',
  id?: 'string',
  parent?: 'string'
}
```

- entity defines the entity that the screen belongs to. Either 'global' for the global object or the name of the entity (eg: 'household_member')
- id defines the id of the instance of the entity that is being referred to. For instance, if a project had an entity called 'household_member' the id would be used to determine which instance of the household_member is being referred to. This field will only appear when the entity is not 'global'
- parent defines the parent path (if present) to the specific instance. For instance the below payload provides the context for the vehicle with id 1 for the household member 1 for a project containing vehicles that belong to household members:

```
{
  entity: 'vehicles',
  id: '1',
  parent: 'household_member/1'
}
```

The parent is of the form <parent entity>/<parent index> repeated for every parent up the global object (though global is never included in a parent path). 

Context can be used to determine how attributes should be requested from the server, though the 'data' attribute has automatically included the context in the correct form for this. 