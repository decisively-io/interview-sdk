import type { AttributeData, AttributeId, State, Step } from "@decisively-io/types-interview";
import { produce } from "immer";

// -- step helpers

export const setCurrentInStep = (s: Step, id: Step["id"]): typeof s => {
  return produce(s, (draft) => {
    if (draft.steps !== undefined && draft.steps.length !== 0) {
      draft.steps = draft.steps.map((step) => setCurrentInStep(step, id));
    }

    draft.current = draft.id === id;

    return draft;
  });
};

export const containsCurrentStep = (s: Step): boolean => {
  return Boolean(s.current || s.steps?.some((s) => containsCurrentStep(s)));
};

export const getCurrentStep = (s: Step): typeof s | null => {
  if (s.current) return s;
  if (s.steps === undefined || s.steps.length === 0) return null;

  return s.steps.reduce<typeof s | null>((a, s) => (a === null ? getCurrentStep(s) : a), null);
};

// -- text replacement helpers

export const replaceTemplatedText = (text: string, replacements: AttributeData | Record<string, string>) => {
  return text.replace(/{{(.*?)}}/g, (match: string) => {
    const attributeId = match.replace(/{{(.*?)}}/, "$1");
    const value = replacements[attributeId] ?? "...";
    return typeof value === "string" ? value : String(value);
  });
};

// -- attribute helpers

/**
 * Strips out any common attributes between two AttributeData objects, reporting only the latest changes
 * @param prev The previous state of the attributes
 * @param next The current state of the attributes
 */
export const cmpAttributeData = (prev: AttributeData, next: AttributeData): AttributeData => {
  const ret: AttributeData = {};

  for (const key of Object.keys(next)) {
    if (next[key] !== prev[key]) {
      ret[key] = next[key];
    }
  }

  // unlikely - but test the other way around, in case a value has been removed
  for (const key of Object.keys(prev)) {
    if (next[key] === undefined) {
      ret[key] = -1; // we don't really care about the value, just that there's been a change
    }
  }

  return ret;
};

/**
 * Checks if an attribId is within the goal or dependency list of a state object.
 * NOTE: goals with zero dependencies will have themselves in the dependency list,
 *       but we check both anyway
 * @returns `true` if any of the supplied attribIds are dynamic, `false` otherwise
 */
export const isAttributeDynamic = (attribId: AttributeId[], state?: State[]): boolean => {
  // flatten state object
  const stateFlat = (state ?? []).reduce((acc, cur) => {
    if (!acc.includes(cur.id)) {
      acc.push(cur.id);
    }
    for (const dep of cur.dependencies ?? []) {
      if (!acc.includes(dep)) {
        acc.push(dep);
      }
    }
    return acc;
  }, [] as AttributeId[]);

  return attribId.some((attrib) => stateFlat.includes(attrib));
};
