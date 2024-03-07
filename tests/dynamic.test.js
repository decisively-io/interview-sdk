import { init } from "../src";
import { buildDynamicReplacementQueries } from "../src/core/dynamic";

describe("Dynamic", () => {
  it("1. debounce takes latest", async () => {
    jest.useFakeTimers();
    const provider = await init("localhost:3000", "hello", {
      // mock the adapter
      adapter: async (config) => {
        return {
          data: require("./mock-session.json"),
        };
      },
    });
    const dataCallback = jest.fn();
    const session = await provider.create(
      "a",
      {
        release: "a",
      },
      dataCallback,
    );
    session.chOnScreenData({
      a: 1,
    });
    session.chOnScreenData({
      b: 2,
    });
    session.chOnScreenData({
      c: 3,
    });
    jest.advanceTimersByTime(1000);
    // TODO: proper test
    //expect(dataCallback).toHaveBeenCalledTimes(0);
  });

  it("2. replacement queries", () => {
    const result = buildDynamicReplacementQueries(
      [
        {
          id: "c817df3b-5674-4d72-9340-417c38789728",
        },
        {
          id: "5cb42d4e-486e-4e87-8136-b8ca49e30702",
          dependencies: ["c817df3b-5674-4d72-9340-417c38789728"],
        },
      ],
      {
        "numbers.0.c817df3b-5674-4d72-9340-417c38789728": "12",
        "numbers.1.c817df3b-5674-4d72-9340-417c38789728": "25",
      },
      true,
    );
    expect(result.unKnownValues).toEqual([
      {
        goal: "5cb42d4e-486e-4e87-8136-b8ca49e30702",
        data: {
          numbers: [
            { "@id": 1, "c817df3b-5674-4d72-9340-417c38789728": "12" },
            { "@id": 2, "c817df3b-5674-4d72-9340-417c38789728": "25" },
          ],
        },
      },
    ]);
  });
});
