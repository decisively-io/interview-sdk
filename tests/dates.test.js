import { getDate } from "../src";

describe("Dates", () => {
  it("1. parse", () => {
    expect(getDate("2017-01-01")).toEqual(new Date(2017, 0, 1));
    expect(getDate("2017-01-01T00:00:00")).toEqual(new Date(2017, 0, 1));

    // bad parses
    expect(getDate("1")).toEqual(undefined);
  });
});
