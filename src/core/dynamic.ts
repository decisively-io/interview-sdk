import type { AttributeValues, ProjectId, ReleaseId, SessionId, Simulate, State } from "@decisively-io/types-interview";
import type { AxiosInstance } from "axios";
import set from "lodash.set";
import { simulate } from "./api";
import { getEntityIds } from "./util";

export type UnknownValues = Record<string, Partial<Simulate>>;

export interface DynamicReplacementQueries {
  knownValues: AttributeValues;
  unknownValues: UnknownValues;
}

/**
 * Builds a list of known values, and a list of requests to be made against the API for unknown values
 * @param state Is the interview state for the current step
 * @param attribValues Is the data entered by the user (and any static attribute values)
 * @returns A list of known values, plus preformed requests to be made against the API for the unknown values
 */
export const buildDynamicReplacementQueries = (
  state: State[],
  attribValues: AttributeValues,
  parent?: string,
): DynamicReplacementQueries => {
  const knownValues: AttributeValues = { ...attribValues };
  const allData: AttributeValues = { ...attribValues };
  const unknownsWithSatisfiedDependencies: Partial<Simulate>[] = [];

  const resolvedState: State[] = [];

  for (const stateObj of state) {
    if (allData[stateObj.id] === undefined && stateObj.value) {
      allData[stateObj.id] = stateObj.value;
    }
    // @ts-ignore
    if (stateObj.instanceTemplate) {
      // @ts-ignore
      const ids = getEntityIds(stateObj.instanceTemplate, allData);
      for (const id of ids) {
        resolvedState.push({
          ...stateObj,
          id: stateObj.id.replace("@id", id),
          dependencies: stateObj.dependencies?.map((dep) => dep.replace("@id", id)),
        });
      }
    } else {
      resolvedState.push(stateObj);
    }
  }

  const knownKeys = Object.keys(allData);

  const unknownWithMissingDependencies = [];

  for (const stateObj of resolvedState) {
    const { id: goal, dependencies } = stateObj;
    if (goal) {
      if (dependencies && dependencies.length > 0) {
        const data: any = {
          "@parent": parent,
        };
        let userInputInvolved = false;
        const unknownDependencies = dependencies.reduce((unknownDependencies, dep) => {
          const value = allData[dep];
          if (value !== undefined) {
            if (attribValues[dep] !== undefined) {
              userInputInvolved = true;
            }

            set(data, dep, value);
            return unknownDependencies;
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
                const path = idParts.join(".");
                const id = allData[`${path}.@id`];
                set(data, `${path}.@id`, id ?? Number.parseInt(index as any) + 1);
              }
              set(data, key, allData[key]);

              if (attribValues[key] !== undefined) {
                userInputInvolved = true;
              }
            }
          }

          if (!hasAnyMatch) {
            unknownDependencies.push(dep);
          }
          return unknownDependencies;
        }, [] as string[]);

        // only resimulate if the user has entered a value that effects the outcome & we know all the dependencies
        if (userInputInvolved) {
          if (unknownDependencies.length === 0) {
            unknownsWithSatisfiedDependencies.push({
              goal,
              data,
            });
          } else {
            // the goal has missing dependencies, but the missing dependencies may be other unknowns
            unknownWithMissingDependencies.push({
              goal,
              data,
              unknownDependencies,
            });
          }
        }
      }
    }
  }

  // ok now we have a list of unknowns with missing dependencies, we need to check if any of the missing dependencies are also states and if they ARE known, then we can add the goal to the unKnownValues
  for (const unknownWithMissingDependency of unknownWithMissingDependencies) {
    const { goal, data, unknownDependencies } = unknownWithMissingDependency;
    const allActuallySatisfied = unknownDependencies.every((dep) => {
      const actuallySatisfied = unknownsWithSatisfiedDependencies.find((it) => it.goal === dep);
      if (actuallySatisfied) {
        Object.assign(data, actuallySatisfied?.data);
      }
      return actuallySatisfied;
    });
    if (allActuallySatisfied) {
      unknownsWithSatisfiedDependencies.push({
        goal,
        data,
      });
    }
  }

  // remove requests where the goal already has a value, or was entered directly by the user
  const unknownValues: UnknownValues = {};
  for (const unknownValue of unknownsWithSatisfiedDependencies) {
    if (unknownValue.goal) {
      if (attribValues[unknownValue.goal] === undefined) {
        unknownValues[unknownValue.goal] = unknownValue;
      }
    }
  }
  return {
    knownValues, // the known values
    unknownValues: unknownValues, // the requests to be made against the API
  };
};

/**
 * Given an interview session's current state, plus the known attribute values,
 * gives us a flat object of `Record<goal, value>` for all the dynamic attributes
 */
export const simulateUnknowns = async (
  unKnownValues: Partial<Simulate>[],
  api: AxiosInstance,
  project: ProjectId,
  release: ReleaseId,
  sessionId: SessionId,
): Promise<AttributeValues> => {
  try {
    const simResAll = (
      await Promise.all(unKnownValues.map((simReq) => simulate(api, project, release, sessionId, simReq)))
    ).reduce((acc, simRes, idx) => {
      const goal = unKnownValues[idx].goal;
      if (goal) {
        //console.log(`simulated ${unKnownValues[idx].goal} = ${simRes.outcome}`);
        acc[goal] = simRes.outcome;
      }
      return acc;
    }, {} as AttributeValues);

    return simResAll;
  } catch (e) {
    console.error(e);
  }

  return {};
};
