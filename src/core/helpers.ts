import { Step } from '@decisively-io/types-interview';
import { produce } from 'immer';

/* eslint-disable no-param-reassign */
export const setCurrentInStep = (s: Step, id: Step['id']): typeof s => {
  return produce(s, draft => {
    if (draft.steps !== undefined && draft.steps.length !== 0) {
      draft.steps = draft.steps.map(step => setCurrentInStep(step, id));
    }

    draft.current = draft.id === id;

    return draft;
  });
}

/* eslint-enable no-param-reassign */
export const containsCurrentStep = (s: Step): boolean => {
  return s.current || (s.steps !== undefined && s.steps.some(s => containsCurrentStep(s)));
}

export const getCurrentStep = (s: Step): typeof s | null => {
  if (s.current) return s;
  if (s.steps === undefined || s.steps.length === 0) return null;

  return s.steps.reduce<typeof s | null>(
    (a, s) => (a === null ? getCurrentStep(s) : a),
    null,
  );
}