import { produce } from 'immer';
import { Subject } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import { AttributeData } from "@decisively-io/types-interview";
import { SessionInstance } from "./types";
import { simulate } from "./api";

const templateRegex = /{{(.*?)}}/g;
const splitRegex = /{{|}}/;

export const render = (template: string, data: AttributeData) => {
  return template.replace(templateRegex, (match) => {
    const attributeId = match.split(splitRegex).filter(Boolean)[0].trim();
    const value = data[attributeId] || '...';
    return typeof value === 'string' ? value : String(value);
  });
};

// react / fe could just use populate and debounce the state updates

/**
 * could try to abstract and insert observables into controls??
 * 
 * for each attrib in state, make an observable that simulates on event
 * using the observable, insert a method to trigger the event onto each dependant control
 * the control can be found using its attribute field
 * method is auto debounced / caches the previous call
 *  ie a3 is dependant on a1 and a2
 *  a1 updates => triggers event {a1: value} => does not simulate as missing a2
 *  a2 updates => triggers event {a2: value} => now have { a1: value, a2: value } => triggers simulate
*/

interface AttributeControl {
  attribute: string;
  onChange?: Subject<string>;
};

/*

export const generateObserver = (session: SessionInstance, attribute: string, dependencies: string[], debounce = 500) => {
  // const simulated = new Subject();
  
  const sub = new Subject<AttributeData>();
  sub.pipe(
    // debounce input
    debounceTime(debounce),
    // ensure all values exist
    filter(data => dependencies.every(d => data.hasOwnProperty(d))),
    // submit simulation
    map(data => {
      const { _api, _project, sessionId } = session;
      return simulate(_api, _project, sessionId, { goals: [attribute], data });
    })
  );
  // .subscribe({
  //   next: (d) => {
  //     simulated.next(d);
  //   }
  // });

  return [sub.subscribe, sub.next];
}

export const generateObservables = (session: SessionInstance) => {
  const { state, screen: { controls } } = session;
  const goals = Object.keys(state);

  const getControl = (id: string) => controls
    .filter(c => c.hasOwnProperty('attribute'))
    .find(c => (c as AttributeControl).attribute === id);

  goals.forEach((g) => {
    const sub = new Subject<AttributeData>();
    
    sub.subscribe({
      next: (d) => {
        // simulate
        // TODO how does this update and trigger state update??
      }
    });

    const { dependencies } = state[g];
    dependencies.forEach((d) => {
      // TODO need to add to listeners
      // should be called dependencies or listeners
      // can be a subject that we sub to
      const control = getControl(d) as AttributeControl;
      if(control) {
        if(control.onChange === undefined) {
          control.onChange = new Subject();
        }

        control.onChange.subscribe({
          next: (v) => {
            sub.next({ [control.attribute]: v });
          }
        })
      }
    })
  })
};

*/

// data only needs to be the dependencies, however sending the entire
// form state is likely not that bad and would provide all required data
export const populate = async (session: SessionInstance, data: AttributeData) => {
  const { _api, _project, sessionId, state } = session;
  if (state) {
    const goals = Object.keys(state);
    const res: AttributeData = await simulate(_api, _project, sessionId, { goals, data });
    // update session state with new data
    return produce(session, (draft) => {
      const { state: s } = draft;
      if (s !== undefined) {
        Object.keys(res).forEach(id => {
          s[id].value = res[id];
        });
      }
    });
  }

  return session;
};