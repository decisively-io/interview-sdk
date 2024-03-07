import { AttributeData, ProjectId, ReleaseId, SessionId, Simulate, State } from "@decisively-io/types-interview";
import { AxiosInstance } from "axios";
import set from "lodash.set";
import { simulate } from "./api";

export interface DynamicReplacementQueries {
  knownValues: AttributeData;
  unKnownValues: Partial<Simulate>[];
}

/**
 * Builds a list of known values, and a list of requests to be made against the API for unknown values
 * @param state Is the interview state for the current step
 * @param attribValues Is the data entered by the user (and any static attribute values)
 * @param ignoreEmpty Set to `true` in order to discard empty values from `attribValues`. This could happen \
 *                    if the user has entered a value into an input, then deleted it
 * @returns A list of known values, plus preformed requests to be made against the API for the unknown values
 */
export const buildDynamicReplacementQueries = (state: State[], attribValues: AttributeData, ignoreEmpty: boolean): DynamicReplacementQueries => {
  const knownValues: AttributeData = { ...attribValues };
  const unKnownValues: Partial<Simulate>[] = [];

  if (ignoreEmpty) {
    // remove all empty known values
    for (const key of Object.keys(knownValues)) {
      if (knownValues[key] === "") {
        delete knownValues[key];
      }
    }
  }

  for (const stateObj of state) {
    if (knownValues[stateObj.id] === undefined && stateObj.value) {
      knownValues[stateObj.id] = stateObj.value;
    }
  }

  const knownKeys = Object.keys(knownValues);
  for (const stateObj of state) {
    const { id: goal, dependencies } = stateObj;
    if (goal) {
      if (dependencies && dependencies.length > 0) {
        const data: AttributeData = {};
        if (attribValues["@parent"]) data["@parent"] = attribValues["@parent"];
        const dependenciesKnown = dependencies.every((dep) => {
          const value = knownValues[dep];
          if (value !== undefined) {
            set(data, dep, value);
            return true;
          }

          let hasAnyMatch = false;
          // in the case of entity controls the dep will be the global as we have no instances yet, therefore also check for a global match
          for (const key of knownKeys) {
            const match = key.endsWith(dep);
            if (match) {
              hasAnyMatch = true;
              const parts = key.split(".");
              const idParts = [];
              while (parts.length > 1) {
                idParts.push(parts.shift());
                const index = parts.shift();
                idParts.push(index);
                set(data, `${idParts.join(".")}.@id`, parseInt(index as any) + 1);
              }
              set(data, key, knownValues[key]);
            }
          }
          return hasAnyMatch;
        });
        if (dependenciesKnown) {
          unKnownValues.push({
            goal,
            data,
          });
        }
      }
    }
  }

  // remove requests where the goal already has a value, or was entered directly by the user
  const unKnownValuesFin = unKnownValues.filter((it) => {
    return attribValues[it.goal!] === undefined;
  });

  return {
    knownValues, // the known values
    unKnownValues: unKnownValuesFin, // the requests to be made against the API
  };
};

/**
 * Given an interview session's current state, plus the known attribute values,
 * gives us a flat object of `Record<goal, value>` for all the dynamic attributes
 */
export const simulateUnknowns = async (unKnownValues: Partial<Simulate>[], api: AxiosInstance, project: ProjectId, release: ReleaseId, sessionId: SessionId): Promise<AttributeData> => {
  try {
    const simResAll = (await Promise.all(unKnownValues.map((simReq) => simulate(api, project, release, sessionId, simReq)))).reduce((acc, simRes, idx) => {
      console.log(`simulated ${unKnownValues[idx].goal} = ${simRes.outcome}`);
      acc[unKnownValues[idx].goal!] = simRes.outcome;
      return acc;
    }, {} as AttributeData);

    return simResAll;
  } catch (e) {
    console.error(e);
  }

  return {};
};
