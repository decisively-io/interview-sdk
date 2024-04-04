import type { AttributeData, Control, State } from "@decisively-io/types-interview";

export const buildUrl = (...args: (string | undefined)[]) => {
  return [...args.filter((a) => !!a)].join("/");
};

export const range = (size: number, startAt = 0) => {
  return [...Array(size).keys()].map((i) => i + startAt);
};

export const stateToData = (state: State[]): AttributeData => {
  return Object.keys(state).reduce((acc: AttributeData, key) => {
    acc[key] = state.find((s) => s.id === key)?.value;
    return acc;
  }, {});
};

export const isStrNotNullOrBlank = (str: any): boolean => !/^\s*$/.test(str || "");
export const isStrNullOrBlank = (str: any): boolean => !isStrNotNullOrBlank(str);

export const iterateControls = (controls: Control[], func: (control: Control) => void) => {
  for (const control of controls) {
    func(control);
    if (control.type === "repeating_container") {
      const ctrl = control;

      if (ctrl.controls) {
        iterateControls(ctrl.controls, func);
      }
    } else if (control.type === "switch_container") {
      const ctrl = control;
      if (ctrl.outcome_false) {
        iterateControls(ctrl.outcome_false, func);
      }
      if (ctrl.outcome_true) {
        iterateControls(ctrl.outcome_true, func);
      }
    } else if (control.type === "certainty_container") {
      const ctrl = control;
      if (ctrl.certain) {
        iterateControls(ctrl.certain, func);
      }
      if (ctrl.uncertain) {
        iterateControls(ctrl.uncertain, func);
      }
    } else if (control.type === "entity") {
      const ctrl = control;
      if (ctrl.template) {
        iterateControls(ctrl.template, func);
      }
    }
  }
};
