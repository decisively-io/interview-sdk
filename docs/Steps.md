## Steps

An interview is created with a number of steps, with each step defining a discrete piece of information that needs to be collected from or displayed to a user. Each step can have multiple sub-steps (and so on to any depth), and defines the metadata about the screen that needs to be displayed. 

The Steps data is generally used to build navigation elements on an interview screen (eg: a menu for interview steps). And provides details on previous and upcoming steps to allow for navigation. 

The steps payload is of the form:
```
{
  steps: [{
    id: 'string', // Unique ID of the screen
    title: 'string', // Title of the step. The screen may have a different title, so this title is intended for any menu UI
    context: { // See the context page for more info
      entity: 'string',
      id?: 'string',
      parent?: 'string'
    },
    current: boolean, // Whether the step is the current step of the interview. Only one step is marked current at any time
    complete: boolean, // Is the screen complete, that is has data been provided for the attributes in this step? A step will also be marked complete only when all of it's sub-steps are complete
    visited: boolean, // Has this step been visited by the user. A screen is marked as visited when either data is submitted from it or the user navigates away from it. A screen is not 'visited' until the user leaves it - so the current screen will always be marked as visited: false (unless it had been previously visited)
    skipped: boolean, // True if the screen was skipped due to relevancy or conditional rules. The user cannot navigate to this screen
    visitable: boolean // Whether a user can navigate to this screen. Some screens only exist as grouping of other screens (eg: just a header and some context info). 
    steps: [] // An array of sub-steps (with the same structure)
  }]
}
```

### Entities and Steps

A more unusual aspect of steps is the way entities can change and duplicate steps. Whenever a step is in the context of an entity the backend may duplicate the step so that the user can provide the information that step collects for each instance of that entity. 

For example, lets say we have an interview that collects details about household members on one screen. The next screen then collects information about the vehicles each household member has. This vehicle screen will be repeated for every household member the user provided on the first screen. 

So the steps before providing the househould information would look like: 
```
{
  steps: [{
    'id': '1',
    title: 'Household Details',
    complete: true,
    visited: false,
    current: true
  },{
    id: '2',
    title: 'Vehicles',
    context: {
      entity: 'household_members'
    },
    complete: false,
    visited: false
  }]
}
```

And then after providing the househould information would look like:
```
{
  steps: [{
    'id': '1',
    title: 'Household Details',
    complete: true,
    visited: true,
    current: false
  },{
    id: '2',
    title: 'Vehicles',
    context: {
      entity: 'household_members'
    },
    complete: false,
    visited: false,
    visitable: false,
    steps: [{
      id: '2'
      title: 'Vehicles for Household Member #1',
      context: {
        entity: 'household_members',
        id: '1'
      },
      complete: false,
      current: true,
      visited: false
    }]
  }]
}
```

Here the 'Vehicles' steps has been duplicated for each household member (in this case only one) and then added as a sub-step. 

This duplicating and adding as a sub-step can continue to any depth. 

> It is important to understand this change to the steps as it may require re-deisplaying of menu controls to users to reflect changes. That is, the steps array is dynamic and may change as users move through the interview. 
