# Autogen - Travel Compensation

> The travel compensation interview demonstrates a simple interview process, with no embedded steps, no entities, but includes alternate layouts. If you do not have the Travel Compensation demo in your tenancy - contact Decisively Support. 

An autogen interview is one where the system generates one question at a time to the user, until the goal is complete. You can access autogen by either passing no interview param to a release with no default interview, or by passing autogen: true to the creation API

## Start
Call the Decision API with a POST command to create an interview. No interviews are defined at the moment so it will default to an autogen interview (otherwise pass `autogen: true`). Eg: your command should be:
```
URL: <POST> <url>/decisionapi/<modelId>?interview=3
Body: {
  mode: 'interview2.0',
  autogen: true
}
```

The response will be the following:
```javascript
{
   "status": "in-progress",
   "context": {
    "entity": "global"
   },
   "data": {
    "a8e92d7a-4971-4efc-a34d-f532bdd7bf48": {
     "type": "text"
    }
   },
   "stages": [
    {
     "id": "auto_step_a8e92d7a-4971-4efc-a34d-f532bdd7bf48",
     "title": "The departure country",
     "context": {
      "entity": "global"
     },
     "current": true,
     "complete": false,
     "visited": false,
     "steps": []
    }
   ],
   "screen": {
    "id": "auto_screen_a8e92d7a-4971-4efc-a34d-f532bdd7bf48",
    "title": "The departure country",
    "controls": [
     {
      "id": "d4113b6f-4418-4fee-a1e4-e72db7e755ae",
      "label": "The departure country",
      "type": "text",
      "attribute": "a8e92d7a-4971-4efc-a34d-f532bdd7bf48"
     }
    ]
   },
   "sessionId": 1
}
```
The response provides the following:

- status: The current status of the session. Either 'in-progress', 'complete', or 'error'
context: The context (if any) of the current screen. This provides information on whether the screen is collecting information for an instance of an entity. In this model this will always just be {entity: 'global'} as the travel comp graph has no sub-entities. See the   page for more examples
- data: This provides the information the server expects back from the client in response to this page. In this case it is looking for a response object that will contain an object with a key of a8e92d7a-4971-4efc-a34d-f532bdd7bf48 and a text response. You'll see in our expected response what that looks like. This data object can be more complex and contain arrays, parent references etc. 
- stages: The steps that the interview will take as it progresses through the questions. For an autogen interview the future steps cannot be determined at this stage, as each question relies on the response to the previous. The steps will continue to grow as the interview progresses. Normal interviews do not have this behaviour and the steps will be mostly static (except for 'relevant' steps). 
- screen: The details of the actual screen to display. This contains metadata such as the title of the screen and the controls to display.
- sessionId:The id of the current interview session. You will use this in any responses so that the backend knows which session you are changing values for

## Continue
We respond to the server to progress the interview to the next step by providing a valid data object. The server had already provided what that data structure should look like, so our response will be
```
URL: <PATCH> <url>/decisionapi/<modelId>?session=<session id>
Body: {
  mode: 'interview2.0',
  data: {
    'a8e92d7a-4971-4efc-a34d-f532bdd7bf48': 'France'
  }
}
```
The response from the server will look similar to the previous response, but:
- The data payload will now reference the next piece of information the system needs to make a determination
- The stages payload will now include the previous page we visited and now this one (for the arrival country)
- The screen will reflect the information that needs to be collected for this next piece of information

You would continue with this autogen interview in much the same way, until sufficient information has been collected to determine a goal (or an error because the graph can't find a solution given the information provided). This final screen will have the following response (in the screen attribute)
```javascript
"screen": {
  "title": "Interview Complete",
  "id": "complete_screen",
  "controls": [{
    "type": "label",
    "text": "Thank you"
  }]
}
```
This is the default complete screen provided as part of the platform. In normal interviews this screen can be overriden and additional controls can be applied. It will always have the 'complete_screen' id. 
