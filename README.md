- [Interview SDK](#interview-sdk)
  - [Development](#development)
  - [Consumption](#consumption)
    - [Dynamic Interviews](#dynamic-interviews)
      - [Updates: SDK -{updated session}-\> Renderer](#updates-sdk--updated-session--renderer)
      - [Updates: Renderer -{updated attribute}-\> SDK](#updates-renderer--updated-attribute--sdk)

# Interview SDK

## Development

```bash
# register the package locally
yarn link

# start the project with typescript watch auto compile
yarn dev
```

In the the target project

```bash
# link and install the package
yarn link @decisively-io/interview-sdk
yarn add @decisively-io/interview-sdk
```

---
## Consumption

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