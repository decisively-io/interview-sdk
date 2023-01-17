import { AttributeData, 
         ProjectId, 
         SessionId, 
         Simulate, 
         State }          from "@decisively-io/types-interview";
import { AxiosInstance }  from "axios";
import { simulate }       from "./api";

/**
 * Builds a list of known values, and a list of requests to be made against the API for unknown values
 * @param state Is the interview state for the current step
 * @param attribValues Is the data entered by the user (and any static attribute values)
 * @returns A list of known values, plus preformed requests to be made against the API for the unknown values
 */
const buildDynamicReplacementQueries = (state: State[], attribValues: AttributeData) => {

  const knownValues  : AttributeData       = {...attribValues};
  const unKnownValues: Partial<Simulate>[] = [];

  for (const stateObj of state) {
    const { id: goal, dependencies, value } = stateObj;
    if (goal) {
      if (undefined === value) {
        if (dependencies && dependencies.length > 0) {
          const dependenciesKnown = dependencies.every((dep) => attribValues.hasOwnProperty(dep));
          if (dependenciesKnown) {
            unKnownValues.push({
              goal,
              data: dependencies.reduce((acc, cur) => {
                acc[cur] = attribValues[cur];
                return (acc);
              }, {} as AttributeData)
            });
          }
        } 
      } else {
        knownValues[goal] = value;
      }
    }
  }

  // remove requests where the goal already has a value, or was entered directly by the user
  const unKnownValuesFin = unKnownValues.filter((it) => !knownValues.hasOwnProperty(it.goal!));

  return({
    knownValues,   // the known values
    unKnownValues: unKnownValuesFin, // the requests to be made against the API
  });
}

/**
 * Given an interview session's current state, plus the known attribute values,
 * gives us a flat object of `Record<goal, value>` for all the dynamic attributes
 */
export const buildDynamicReplacements = async (
  state        : State[], 
  attribValues : AttributeData,
  api          : AxiosInstance, 
  project      : ProjectId, 
  sessionId    : SessionId,
  ): Promise<AttributeData> => {
  
  const replacementQueries = buildDynamicReplacementQueries(state, attribValues);

  try {
    const { knownValues, unKnownValues } = replacementQueries;
    console.log(`simulating for ${unKnownValues.length} unknown(s)...`);
    const simResAll = (await Promise.all(
      unKnownValues.map( (simReq) => simulate(api, project, sessionId, simReq) )
    )).reduce((acc, simRes, idx) => { 
      return({
        ...acc,
        [unKnownValues[idx].goal!] : simRes.outcome,
      });
    }, {} as AttributeData);

    return({
      ...knownValues,
      ...simResAll,
    });
  } catch (e) {
    console.error(e);
  }

  return({});
}