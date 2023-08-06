# State

> Warning: State does not currently support sub entities, parents and other advanced topics. The API may slightly change as those are added

The state attribute provides the values and additional information about attributes that will be displayed on the screen, but may require checking with the server for the latest information (aka: Dynamic Attributes). These are usually attributes contained within a {{ }} (usually in a typography, but can occur in other places). 

Example: You may want to design an interview screen that collects a bunch of information and displays the calculated result of that information all on one screen. Assume the rule graph is of the form:
a3 = a1 + a2

You interview design may look like:
```javascript
{
  controls: [{
    type: 'text',
    attribute: 'a1',
  },{
    type: 'text',
    attribute: 'a2'
  },{
    type: 'typography',
    style: 'body1',
    text: 'Total result {{a3}}'
  }]
}
```
The intention is to display the result of a3 within the label (eg: replacing the {{ }} with the actual value. The challenge is that a3 can't be calculated by the client locally, it requires the server to provide this information. Whilst, the calculation of a3 is simple, we don't want calculations being sent to the client (it could reveal internal rules) and the calculation of a3 may require other data not on the screen (eg: collected pervasively) to leveraged. 

To facilitate this, the server will send down a state attribute to provide information about the attributes on the screen that need to be updated remotely. So for the above interview the state will look like:
```javascript
[
  {
    id: 'a3',
    dependencies: ['a1', 'a2'],
  }
]
```
This tells the client that a) the a3 attribute is used somewhere on the screen and b) that it's value depends on the values of a1 and a2. If the value of a1 and a2 on the client UI are updated then a response should be sent to the server to get the new value of a3. 

This is facilitated by the session mode on the server with additional parameters. To get the updated data send the following:
```javascript
GET: decisionapi/session/<modelId>?session=1
{
   goal: 'a3',
   mode: 'api',
   save: false, // This prevents the changes you are making being preserved in the graph
   data: {
    a1: 4,
    a2: 5
   } 
}
```

In this scenario the server would then send back the following:
```javascript
{
  sessionId: 1,
  outcome: 9
}
```
Templating
You'll notice that when dynamic attributes are provided they will be returned in the form {{attribute id}}This is to signify that the client side should render the value of this field using the value from the state. Eg: {{a3}} should be replaced with the value of the a3 state value (`state[a3].value`). 

The templating engine will never provide anything more complex than this (at this stage) - so no filters, helpers etc. How to process in the client is left to the SDK to implement. A suggestion would be to do a simple regex check:
```javascript
var render = (template, data) => {
	return template.replace(/{{(.*?)}}/g, (match) => {
		return data[match.split(/{{|}}/).filter(Boolean)[0].trim()]
	})
}
```