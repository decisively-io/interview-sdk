import { init } from "../src";

describe("Response", () => {
  it("1. adds @parent", async () => {
    jest.useFakeTimers();

    const adapaterCallback = jest.fn();
    const provider = await init("localhost:3000", "hello", {
      // mock the adapter
      adapter: async (config) => {
        adapaterCallback(config);
        return {
          data: require("./response-session.json"),
        };
      },
    });
    const session = await provider.create(
      "a",
      {
        release: "a",
      },
      () => {},
    );

    await session.save({
      test: "test"
    })

    expect(adapaterCallback).toHaveBeenNthCalledWith(2, expect.objectContaining({
      data: JSON.stringify({
        data: {
          test: "test",
          "@parent": "individual/b12aa10e-acf7-46ca-82f0-b622233be29f",
        }
      })
    }))

  });

});