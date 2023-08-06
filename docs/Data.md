# Data

The data attributes defines the payload the server will expect back from the client when submitting data for the interview. Interview implementations will take this data payload, apply the values collected from the UI and send back to the server. The data attribute will differ for each screen request and project, as the attributes required will change. The data attribute has the form:

```
{
  '@parent': '<parent path>', 
  'guid': {
    type: 'auto|text|number|currency|date|datetime|time',
    value: any
  },
  'entity': [] // to represent the server wants the number of instances to be returned OR
  'entity': [{
    '@id': '',
    'guid': {
      type: 'auto|text|number|currency|date|datetime|time',
      value: any
    }
  }]
}
```
Where the 'guid' will be represented as the actual guid of the attribute being collected and 'entity' would be the entity name being collected. 

## Example

For example, the data payload for a page collecting two attributes on the global object may look like:
```
{
  '1f871412-a67b-11ec-b909-0242ac120002': {
    type: 'auto'
  },
  'ede2d428-a8aa-11ec-b909-0242ac120002': {
    type: 'text'
  }
}
```
Here the server is looking for a response like this:
```
{
  '1f871412-a67b-11ec-b909-0242ac120002': 'Value 1',
  'ede2d428-a8aa-11ec-b909-0242ac120002': 'Value 2'
}
```
Basically you remove the metadata (the type object) and replace with the value collected by the client. 

> Important: Not providing an attribute in the payload will mark that attribute as 'Unknown' in the graph and may result in it being requested again in the interview (unless it's value is required). It is generally better to provide the attribute and use 'null' (to represent 'Uncertain') or some other value when the user has not filled out a field

## Entity Example

Assume a project contains the following entities: vehicles ➝ household_members➝ global (that is, the interview asks about the vehicles owned by household members). The data payload for requesting an attribute on the household_member could have two forms depending on the context of the page. 

Eg: if the context of the page was on the global (eg: context = { type: 'global'} ) the data payload from the server could be:
```
{
  'household_members': [{
    '@id': '',
    '1f871412-a67b-11ec-b909-0242ac120002': { type: 'auto'}
  }]
}
And a valid response would be:
{
  'household_members': [{
    '@id': '1',
    '1f871412-a67b-11ec-b909-0242ac120002': 'Some Value'
  },{
    '@id': 2,
    '1f871412-a67b-11ec-b909-0242ac120002': 'Some Value 2'
  }]
}
```
> Note here that the @id was replaced with an actual id and the guid value was replaced. And multiple instances were provided in one go by duplicating the array.
The id can be any string of letters and/or numbers, but cannot be '0' or contain '/' or '.' or quotes

The above is most likely to occur when the screen has a relationship/entity control. However it may be that the screen is in the context of one of these household instances. In which case the data attribute from the server could be:
```
{
  '@parent': 'household_member/1',
  '1f871412-a67b-11ec-b909-0242ac120002': { type: 'auto' }
}
```
In this case the path to the instance we are changing is provided in the @parent attribute. This information would also be contained in the context (it would be: { type: 'household_member', 'id': 1 )

A valid response would be:
```
{
  '@parent': 'household_member/1',
  '1f871412-a67b-11ec-b909-0242ac120002': 'Some Value'
}
```

## Sub-Entity
Given the above project you can also make changes to a sub-entity. So to update the information for a vehicle (belonging to a household member) the data attribute from the server could be:
```
{
  '@parent': 'household_member/1',
  vehicles: [{
    '@id': '',
    '1f871412-a67b-11ec-b909-0242ac120002': { type: 'auto'}
  }]
}
```
Or the following depending on the context of the screen (see above)
```
{
  '@parent': 'household_member/1/vehicles/1',
  '1f871412-a67b-11ec-b909-0242ac120002': { type: 'auto'}
}
```
The responses will act similar to those listed previously, just with the parent being a longer string. 

## Number of instances
Entities can be collected in two ways: either all together in a relationship/entity control or by collecting the number of elements up front and then collecting information across multiple screens (in context). 

To collect the number of instances the server will respond with a page containing a 'number_of_instances' control. The data attribute would be:
```
{
  'household_members': []
}
```
Here the household_members is provided as an empty array (as opposed to previously where an id and other attributes may have been provided). This is to signify that the server wants the information on the number of instances first. To do so you need to generate ids for each of the instances you want to create and then send the following:
```{
  'household_members': [{
    '@id': 1
  },{
    '@id': 2
  }]
}
```
Repeating the id object for each of the instances. IDs must be unique, and follow the restrictions listed previously. 