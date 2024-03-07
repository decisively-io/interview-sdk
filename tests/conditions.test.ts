import { resolveCondition, resolveElement } from "../src/core/conditions";

describe("Conditions", () => {
  it("1. dates", () => {
    {
      const result = resolveCondition(
        {
          type: "less-than-equals",
          elements: [
            {
              type: "value",
              value: "3",
            },
            {
              type: "value",
              value: "2000-01-01",
            },
          ],
        },
        {},
      );

      expect(result).toBe(false);
    }

    {
      const result = resolveCondition(
        {
          type: "less-than-equals",
          elements: [
            {
              type: "value",
              value: "",
            },
            {
              type: "value",
              value: "2000-01-01",
            },
          ],
        },
        {},
      );

      expect(result).toBe(false);
    }

    {
      const result = resolveCondition(
        {
          type: "equals",
          elements: [
            {
              type: "attribute",
              attributeId: "a",
            },
            {
              type: "value",
              value: "true",
            },
          ],
        },
        { a: true },
      );

      expect(result).toBe(true);
    }
  });
});
