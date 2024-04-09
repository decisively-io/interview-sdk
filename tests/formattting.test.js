const { formatValue } = require("../src/core/formatting");
const { replaceTemplatedText } = require("../src");

describe("Formatting Tests", () => {
  it("1. currency", async () => {
    const response = formatValue("34.555757", { formatters: ["currency"] });

    expect(response).toEqual("$34.56");
  });
  it("2. date", async () => {
    const response = formatValue("2002-01-02T10:00:00.000Z", { formatters: ["date yyyy-MM-dd"] });
    expect(response).toEqual("2002-01-02");
  });
  it("3. date with spaces", async () => {
    const response = formatValue("2002-01-02T10:00:00.000Z", { formatters: ["date do LLLL"] });
    expect(response).toEqual("2nd January");
  });

  it("4. template with formatting", () => {
    {
      const text = replaceTemplatedText("value is: {{a|currency}}", {
        a: "12",
      });

      expect(text).toEqual("value is: $12.00");
    }

    {
      const text = replaceTemplatedText("value is: {{a|currency}}", {
        a: "12.123",
      });

      expect(text).toEqual("value is: $12.12");
    }

    {
      const text = replaceTemplatedText("value is: {{a|date do LLLL}}", {
        a: "2000-01-01",
      });
      expect(text).toEqual("value is: 1st January");
    }

    {
      const text = replaceTemplatedText("value is: {{a|date}}", {
        a: "2000-01-01 23:12",
      });
      expect(text).toEqual("value is: 01/01/2000 11:12 PM");
    }

    {
      const text = replaceTemplatedText("value is: {{a|date}}", {
        a: "2000-01-01",
      });
      expect(text).toEqual("value is: 01/01/2000");
    }
  });
});

describe("Formatting with type hint", () => {
  it("1. data type hint", async () => {
    expect(
      replaceTemplatedText(
        "hello: {{marital_status/1/2106dc13-8b21-4467-8f54-0c1bbfe1e303}}",
        {
          "marital_status/1/2106dc13-8b21-4467-8f54-0c1bbfe1e303": "2000-01-01",
        },
        [{ id: "marital_status/1/2106dc13-8b21-4467-8f54-0c1bbfe1e303", type: "date" }],
      ),
    ).toEqual("hello: 01/01/2000");
  });

  it("2. bug", () => {
    expect(
      replaceTemplatedText(
        "hello: {{a}} & {{b}}",
        {
          a: "2002-01-02T10:00:00.000Z",
          b: "2002-01-02T10:00:00.000",
        },
        [
          { id: "a", type: "date" },
          { id: "b", type: "date" },
        ],
      ),
    ).toEqual("hello: 02/01/2002 & 02/01/2002");
  });
});
