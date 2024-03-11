# Decisively Interview SDK

This library provides the base wrapper for interacting with the Decisively Interview SDK. This library does not define the UI controls and interactions necessary for interacting with the API. Use the React Interview SDK to include a pre-built UI component layer that works with this library.

## Interaction Loop

Interacting with the Interview API follows the following outline:

1. Start an interview using a POST command and optionally providing any initial data
2. Navigate through screens in the interview using a PATCH and providing data along the way
3. Eventually your interview will end up in a complete state and a decision report will be fired in the backend.

Note: Unlike the Batch API, the decision report is not sent to the client, and is only streamed into the backend. This is to prevent leaking sensitive information to clients, including the internal rules and data elements. 

## Payload

The payload response from the server is shown below. 

```
{
  status: 'in-progress|complete|error',
  context: {},
  data: {},
  state?: {},
  steps: [],
  screen: {},
  sessionId: 'string',
  progress?: {
    time: 'number', // The time remaining for the interview
    percentage: 'number' // The percentage completed
  }
}
```

- For the data attribute see [Data](./docs/Data.md)
- For the steps attribute see [Steps](./docs/Steps.md)
- For the screen (and contorls) attribute see [Steps](./docs/Steps.md)
- For the context attribute see [Steps](./docs/Context.md)
- For the state attribute see [Steps](./docs/Context.md)

# Examples

- [Autogen](./docs/Examples/Autogen.md) highlights at an API level how to interact with an autogen interview
- [Standard](./docs/Examples/Standard.md) highlights at an API level how to interact with a standard (non-autogen) interview

# Code Reference

## init
```
init = (host: string, path: string | string[] = defaultPath, overrides: AxiosRequestConfig = {})
```
Initialize the SDK and start the interview process. Pass:
- host: The endpoint of the Decisively server
- path: Additional pathing to the server (not the project or release data)
- overrides: Additional axios based configuration to send when talking to the server (useful if you have placed the Decisively Interview SDK behind a proxy, or require additional axios control)

This returns a session control object that has the following commands:

### create
Starts an interview process by calling the API with a POST command. You pass the following arguments:
- project: The id of the project to start
- config: Additional configuration options
  - initialData: Data to start the interview off with (optional)
  - interview: Id of the specific interview to load (if you don't include this the backend will attempt to load the default interview)
  - release: The id of the release of the project to use. You generally shouldn't use this in production as it will force the backend to use a specific release rather than the latest version. 
- newDataCallback: A function that will be called whenever new data is retrieved from the server. Allows you to perform additional actions when the SDK receives information

### load
Loads an existing interview from the server (because the user left and you are now resuming an interview)

### finish
Stops receiving updates about the interview session as the interview is now complete.

## Session
The response from the create and load commands in init is a Session object that allows you to interact with the interview. It has the following commands:

- submit: Send the data collected from the user on this screen and then navigate to the appropriate screen. You will generally provide the id of the next step in the step chain. 
- save: Send the data collected from the user on this screen, but don't navigate to the next screen. 
- navigate: Navigate to a particular screen. Changes to data on the current screen is discarded
- render: Special command you can use to render the text returned from the server. This will replace any dynamic attributes. See [State](./docs/State.md) page

> The Session contains the data returned from the server, but it's the responsibility of the UI implementation to convert and display this to the user on the screen (or use the Decisively React Interview SDK). 

## Advanced Consumption

### Dynamic Interviews

Interaction with the SDK for enabling dynamic interviews requires that:

1. The SDK can push updates to the session to the rendering implementation before a navigation event is initiated by the rendering implementation
2. On-screen updates can flow from the rendering implementation back to the SDK

Both of these directions should be catered for by the rendering implementation in order for dynamic interviews to function.

#### Updates: SDK -{updated session}-> Renderer

The third parameter of `create` takes a callback that is used to push changes to the `SessionInstance` (i.e. a `Partial<SessionInstance>`) back to the rendering implementation.

In reality, this would be pushing a combination of the following properties:

- `externalLoading` Signifies if data is still being fetched
- `renderAt` Is updated every time the session instance changes, and can be _optionally_ used to filter out unnecessary renders. Your implementation may not need this.
- `screen` The updated screen to render
- `state` The is passed back for convenience

#### Updates: Renderer -{updated attribute}-> SDK

The SessionInstance includes a method `chOnScreenData`, which can be used to notify the SDK of changes to an attribute's value.
