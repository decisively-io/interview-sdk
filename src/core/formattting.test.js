const { formatValue } = require("./formatting");

describe("Formatting Tests", () => {
  it("1. currency", async () => {
    const response = formatValue("34.555757", ["currency"]);

    expect(response).toEqual("$34.56");
  });
  it("2. date", async () => {
    const response = formatValue("2002-01-02T10:00:00.000Z", ["date yyyy-MM-dd"]);
    expect(response).toEqual("2002-01-02");
  });
});
