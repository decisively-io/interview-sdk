import { AttributeData,
         ProjectId,
         ReleaseId,
         SessionId,
         Simulate,
         State }          from "@decisively-io/types-interview";
import { AxiosInstance }  from "axios";
import { map } from "rxjs";
import { simulate }       from "./api";

/**
 * Builds a list of known values, and a list of requests to be made against the API for unknown values
 * @param state Is the interview state for the current step
 * @param attribValues Is the data entered by the user (and any static attribute values)
 * @param ignoreEmpty Set to `true` in order to discard empty values from `attribValues`. This could happen \
 *                    if the user has entered a value into an input, then deleted it
 * @returns A list of known values, plus preformed requests to be made against the API for the unknown values
 */
const buildDynamicReplacementQueries = (state: State[], attribValues: AttributeData, ignoreEmpty: boolean) => {

  const knownValues  : AttributeData       = {...attribValues};
  const unKnownValues: Partial<Simulate>[] = [];

  if (ignoreEmpty) {
    // remove all empty known values
    for (const key of Object.keys(knownValues)) {
      if (knownValues[key] === '') {
        delete knownValues[key];
      }
    }
  }

  for (const stateObj of state) {
    const { id: goal, dependencies, value } = stateObj;
    if (goal) {
      if (undefined === value) {
        if (dependencies && dependencies.length > 0) {
          const dependenciesKnown = dependencies.every((dep) => knownValues.hasOwnProperty(dep));
          if (dependenciesKnown) {
            const data = dependencies.reduce((acc, cur) => {
              acc[cur] = knownValues[cur];
              return (acc);
            }, {} as AttributeData);

            if( attribValues[ '@parent' ] ) data[ '@parent' ] = attribValues[ '@parent' ];

            unKnownValues.push({
              goal,
              // data: knownValues,
              data,
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
  release      : ReleaseId,
  sessionId    : SessionId,
  ): Promise<AttributeData> => {

  const replacementQueries = buildDynamicReplacementQueries(state, attribValues, true);

  try {
    const { knownValues, unKnownValues } = replacementQueries;
    console.log(`simulating for ${unKnownValues.length} unknown(s)...`);
    const simResAll = (await Promise.all(
      unKnownValues.map((simReq) => simulate(api, project, release, sessionId, simReq) )
    )).reduce((acc, simRes, idx) => {
      console.log(`simulated ${unKnownValues[idx].goal} = ${simRes.outcome}`);
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
