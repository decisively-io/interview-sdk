import { init } from "../src";
import { buildDynamicReplacementQueries } from "../src/core/dynamic";

describe("Dynamic", () => {
  it("1. debounce takes latest", async () => {
    jest.useFakeTimers();
    const provider = await init("localhost:3000", "hello", {
      // mock the adapter
      adapter: async (config) => {
        return {
          data: require("./dynamic-session"),
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
      "2f652955-8b64-4001-823a-75d8a04e6f1a": 1,
      "c0b4d98c-262a-461c-ab9c-d8b76c7630a3": 1,
    });
    session.chOnScreenData({
      "2f652955-8b64-4001-823a-75d8a04e6f1a": 2,
      "490391b8-d532-4541-b623-a59ca58b3b94": 3,
    });
    jest.advanceTimersByTime(1000);
    expect(dataCallback).toHaveBeenCalledTimes(3);
    expect(session.internals.userValues).toMatchObject({
      "2f652955-8b64-4001-823a-75d8a04e6f1a": 2,
      "c0b4d98c-262a-461c-ab9c-d8b76c7630a3": 1,
      "490391b8-d532-4541-b623-a59ca58b3b94": 3,
    });
  });

  it("2. " + "replacement queries", () => {
    const result = buildDynamicReplacementQueries(
      {
        screen: {},
        data: {},
        state: [
          {
            id: "c817df3b-5674-4d72-9340-417c38789728",
          },
          {
            id: "5cb42d4e-486e-4e87-8136-b8ca49e30702",
            dependencies: ["c817df3b-5674-4d72-9340-417c38789728"],
          },
        ],
      },
      {
        "numbers.0.c817df3b-5674-4d72-9340-417c38789728": "12",
        "numbers.1.c817df3b-5674-4d72-9340-417c38789728": "25",
      },
    );
    expect(Object.values(result.unknownValues)).toEqual([
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

  it("3. only requests relevant information", async () => {
    const sessionData = {
      context: {
        entity: "global",
      },
      data: {
        "86159399-996a-49e9-89d1-d3214dc71594": {
          type: "auto",
          value: true,
        },
        numbers: [
          {
            "@id": "",
            "c817df3b-5674-4d72-9340-417c38789728": {
              type: "auto",
            },
            "07712027-6266-422f-a74f-1fca0dab2d13": {
              type: "boolean",
            },
          },
        ],
      },
      steps: [
        {
          id: "94744f66-930b-4443-a980-45a02f950271",
          title: "Step 1",
          context: {
            entity: "global",
          },
          current: false,
          complete: true,
          visited: true,
          time_estimate: 0,
          skipped: false,
        },
        {
          id: "5c19765c-0a9a-479e-aca2-e2286bf710bc",
          title: "Step 2",
          context: {
            entity: "global",
          },
          current: true,
          complete: true,
          visited: true,
          time_estimate: 0,
          skipped: false,
        },
        {
          id: "9ff1579c-5a6b-4755-b4f8-2c41c9dab496/768abf7b-7e91-4fa5-b6f1-b1d6268689e5",
          metaId: "9ff1579c-5a6b-4755-b4f8-2c41c9dab496",
          title: "Re-enter",
          context: {
            entity: "numbers",
            id: "768abf7b-7e91-4fa5-b6f1-b1d6268689e5",
          },
          steps: [],
          current: false,
          complete: true,
          visited: true,
          path: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5",
          time_estimate: 0,
          index: 1,
          skipped: false,
        },
        {
          id: "9ff1579c-5a6b-4755-b4f8-2c41c9dab496/6dd7a100-c4b9-4e24-95a4-baa6efee937a",
          metaId: "9ff1579c-5a6b-4755-b4f8-2c41c9dab496",
          title: "Re-enter",
          context: {
            entity: "numbers",
            id: "6dd7a100-c4b9-4e24-95a4-baa6efee937a",
          },
          steps: [],
          current: false,
          complete: false,
          visited: true,
          path: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a",
          time_estimate: 0,
          index: 2,
          skipped: false,
        },
      ],
      state: [
        {
          value: "12",
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
        },
        {
          value: true,
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          dependencies: ["numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728"],
        },
        {
          value: true,
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          dependencies: ["numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad"],
        },
        {
          value: "12",
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
        },
        {
          value: true,
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          dependencies: [
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
          ],
        },
        {
          id: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          dependencies: [
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
          ],
        },
        {
          value: "4",
          id: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
        },
        {
          value: false,
          id: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/07712027-6266-422f-a74f-1fca0dab2d13",
          dependencies: ["numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728"],
        },
        {
          id: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/00d22f36-31db-49d7-ad00-95840e40f55b",
          dependencies: ["numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/e0bddd71-d294-49bd-b760-c1381233cdad"],
        },
        {
          value: 28,
          id: "5cb42d4e-486e-4e87-8136-b8ca49e30702",
          dependencies: [
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
          ],
        },
        {
          value: true,
          id: "86159399-996a-49e9-89d1-d3214dc71594",
          dependencies: [
            "5cb42d4e-486e-4e87-8136-b8ca49e30702",
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
          ],
        },
      ],
      screen: {
        title: "Step 2",
        id: "5c19765c-0a9a-479e-aca2-e2286bf710bc",
        controls: [
          {
            id: "957bd85f-dce3-40f5-bcb0-cdb191bc8e07",
            type: "typography",
            text: "value: 12",
            style: "body1",
            templateText:
              "value: {{numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728}}",
            dynamicAttributes: ["numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728"],
          },
          {
            id: "e9907189-cf83-4362-b68c-c715f4729257",
            type: "text",
            required: true,
            attribute: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            label: "the number's value",
            showExplanation: false,
            value: "12",
          },
          {
            id: "16d77cfc-e842-4b5f-a5f6-bf3d27ff8817",
            createdAt: 1709905106272,
            type: "switch_container",
            attribute: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
            kind: "dynamic",
            condition: {
              type: "equals",
              elements: [
                {
                  type: "attribute",
                  attributeId: "07712027-6266-422f-a74f-1fca0dab2d13",
                },
                {
                  type: "value",
                  value: null,
                },
              ],
            },
            outcome_true: [
              {
                id: "394c56bd-fc0b-48cb-a972-bfd31ffdf55a",
                createdAt: 1709905218073,
                type: "switch_container",
                attribute: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
                kind: "dynamic",
                condition: {
                  type: "equals",
                  elements: [
                    {
                      type: "attribute",
                      attributeId: null,
                    },
                    {
                      type: "value",
                      value: null,
                    },
                  ],
                },
                outcome_true: [
                  {
                    id: "8e4dfd8e-55fb-40de-ade5-433f94a1201a",
                    type: "typography",
                    text: "I'll let you have this number be above 5, for now.",
                    style: "banner-yellow",
                  },
                ],
                outcome_false: [
                  {
                    id: "5380278c-e3dc-42ec-84b0-cd3d705f1155",
                    type: "typography",
                    text: "You've been warned about this. Number's over 5 DO NOT exist.",
                    style: "banner-red",
                  },
                ],
                dynamicAttributes: [
                  "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
                ],
                branch: "true",
              },
              {
                id: "90514a6f-66c3-438b-8450-bfc20d2614ce",
                type: "text",
                required: true,
                attribute: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
                label: "Explain yourself",
                showExplanation: false,
                value: "lasdasd",
              },
            ],
            dynamicAttributes: ["numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13"],
            branch: "true",
          },
          {
            id: "957bd85f-dce3-40f5-bcb0-cdb191bc8e07",
            type: "typography",
            text: "value: 12",
            style: "body1",
            templateText:
              "value: {{numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728}}",
            dynamicAttributes: [
              "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            ],
          },
          {
            id: "e9907189-cf83-4362-b68c-c715f4729257",
            type: "text",
            required: true,
            attribute:
              "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
            label: "the number's value",
            showExplanation: false,
            value: "12",
          },
          {
            id: "16d77cfc-e842-4b5f-a5f6-bf3d27ff8817",
            createdAt: 1709905106272,
            type: "switch_container",
            attribute:
              "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
            kind: "dynamic",
            condition: {
              type: "equals",
              elements: [
                {
                  type: "attribute",
                  attributeId: "07712027-6266-422f-a74f-1fca0dab2d13",
                },
                {
                  type: "value",
                  value: null,
                },
              ],
            },
            outcome_true: [
              {
                id: "394c56bd-fc0b-48cb-a972-bfd31ffdf55a",
                createdAt: 1709905218073,
                type: "switch_container",
                attribute:
                  "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
                kind: "dynamic",
                condition: {
                  type: "equals",
                  elements: [
                    {
                      type: "attribute",
                      attributeId: null,
                    },
                    {
                      type: "value",
                      value: null,
                    },
                  ],
                },
                outcome_true: [
                  {
                    id: "8e4dfd8e-55fb-40de-ade5-433f94a1201a",
                    type: "typography",
                    text: "I'll let you have this number be above 5, for now.",
                    style: "banner-yellow",
                  },
                ],
                outcome_false: [
                  {
                    id: "5380278c-e3dc-42ec-84b0-cd3d705f1155",
                    type: "typography",
                    text: "You've been warned about this. Number's over 5 DO NOT exist.",
                    style: "banner-red",
                  },
                ],
                dynamicAttributes: [
                  "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
                ],
                branch: "false",
              },
              {
                id: "90514a6f-66c3-438b-8450-bfc20d2614ce",
                type: "text",
                required: true,
                attribute:
                  "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
                label: "Explain yourself",
                showExplanation: false,
              },
            ],
            dynamicAttributes: [
              "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
            ],
            branch: "true",
          },
          {
            id: "957bd85f-dce3-40f5-bcb0-cdb191bc8e07",
            type: "typography",
            text: "value: 4",
            style: "body1",
            templateText:
              "value: {{numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728}}",
            dynamicAttributes: ["numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728"],
          },
          {
            id: "e9907189-cf83-4362-b68c-c715f4729257",
            type: "text",
            required: true,
            attribute: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
            label: "the number's value",
            showExplanation: false,
            value: "4",
          },
          {
            id: "16d77cfc-e842-4b5f-a5f6-bf3d27ff8817",
            createdAt: 1709905106272,
            type: "switch_container",
            attribute: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/07712027-6266-422f-a74f-1fca0dab2d13",
            kind: "dynamic",
            condition: {
              type: "equals",
              elements: [
                {
                  type: "attribute",
                  attributeId: "07712027-6266-422f-a74f-1fca0dab2d13",
                },
                {
                  type: "value",
                  value: null,
                },
              ],
            },
            outcome_true: [
              {
                id: "394c56bd-fc0b-48cb-a972-bfd31ffdf55a",
                createdAt: 1709905218073,
                type: "switch_container",
                attribute: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/00d22f36-31db-49d7-ad00-95840e40f55b",
                kind: "dynamic",
                condition: {
                  type: "equals",
                  elements: [
                    {
                      type: "attribute",
                      attributeId: null,
                    },
                    {
                      type: "value",
                      value: null,
                    },
                  ],
                },
                outcome_true: [
                  {
                    id: "8e4dfd8e-55fb-40de-ade5-433f94a1201a",
                    type: "typography",
                    text: "I'll let you have this number be above 5, for now.",
                    style: "banner-yellow",
                  },
                ],
                outcome_false: [
                  {
                    id: "5380278c-e3dc-42ec-84b0-cd3d705f1155",
                    type: "typography",
                    text: "You've been warned about this. Number's over 5 DO NOT exist.",
                    style: "banner-red",
                  },
                ],
                dynamicAttributes: [
                  "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/00d22f36-31db-49d7-ad00-95840e40f55b",
                ],
                branch: "false",
              },
              {
                id: "90514a6f-66c3-438b-8450-bfc20d2614ce",
                type: "text",
                required: true,
                attribute: "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/e0bddd71-d294-49bd-b760-c1381233cdad",
                label: "Explain yourself",
                showExplanation: false,
              },
            ],
            dynamicAttributes: ["numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/07712027-6266-422f-a74f-1fca0dab2d13"],
            branch: "false",
          },
          {
            id: "507241f4-48a2-456e-85b5-341b31a09ab7",
            type: "typography",
            text: "=",
            style: "body1",
          },
          {
            id: "624545be-81dd-4ace-a0f7-6b517ccf1bad",
            type: "typography",
            text: "the answer is 28",
            style: "banner-green",
            templateText: "the answer is {{5cb42d4e-486e-4e87-8136-b8ca49e30702}}",
            dynamicAttributes: ["5cb42d4e-486e-4e87-8136-b8ca49e30702"],
          },
          {
            id: "9ac9937b-6e8c-440e-959f-160871d67c29",
            createdAt: 1709732102358,
            type: "switch_container",
            condition: {
              type: "greater-than",
              elements: [
                {
                  type: "attribute",
                  attributeId: "5cb42d4e-486e-4e87-8136-b8ca49e30702",
                },
                {
                  type: "value",
                  value: "12",
                },
              ],
            },
            outcome_true: [
              {
                id: "e78cf4a1-eb9c-4c4b-afea-9a3ba00787cb",
                type: "typography",
                text: "bigger than 18",
                style: "body1",
              },
            ],
            outcome_false: [
              {
                id: "316ad423-9b2e-4372-9de6-59a28b3dd1a7",
                type: "typography",
                text: "less than 18",
                style: "body1",
              },
            ],
            kind: "dynamic",
            attribute: "86159399-996a-49e9-89d1-d3214dc71594",
            dynamicAttributes: ["86159399-996a-49e9-89d1-d3214dc71594"],
            branch: "true",
          },
        ],
        attributes: [
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/07712027-6266-422f-a74f-1fca0dab2d13",
          "86159399-996a-49e9-89d1-d3214dc71594",
        ],
        allAttributes: [
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad",
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/00d22f36-31db-49d7-ad00-95840e40f55b",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/e0bddd71-d294-49bd-b760-c1381233cdad",
          "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/07712027-6266-422f-a74f-1fca0dab2d13",
          "5cb42d4e-486e-4e87-8136-b8ca49e30702",
          "86159399-996a-49e9-89d1-d3214dc71594",
        ],
        buttons: {
          next: true,
          back: true,
        },
      },
      status: "in-progress",
      progress: {
        percentage: 75,
        time: 15,
      },
      sessionId: "0c3e161d-466a-4922-a40e-1c8e65b0d313",
      goal: "b6a1bf21-6ec4-41e7-a5da-fb0f18231582",
    };

    const provider = init("localhost:3000", "hello", {
      // mock the adapter
      adapter: async (config) => {
        return {
          data: sessionData,
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

    expect(session.internals.replacements).toEqual({
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728": "12",
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13": true,
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b": true,
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/c817df3b-5674-4d72-9340-417c38789728":
        "12",
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/07712027-6266-422f-a74f-1fca0dab2d13": true,
      "numbers/6dd7a100-c4b9-4e24-95a4-baa6efee937a/c817df3b-5674-4d72-9340-417c38789728": "4",
      "5cb42d4e-486e-4e87-8136-b8ca49e30702": 28,
      "86159399-996a-49e9-89d1-d3214dc71594": true,
    });

    session.internals.userValues = {
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad": "asdasdasd",
    };
    await session.calculateUnknowns();
    expect(session.internals.unknownsRequiringSimulate).toEqual({
      "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b": {
        goal: "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/00d22f36-31db-49d7-ad00-95840e40f55b",
        data: {
          "numbers/768abf7b-7e91-4fa5-b6f1-b1d6268689e5/e0bddd71-d294-49bd-b760-c1381233cdad": "asdasdasd",
        },
      },
    });
  });
});
