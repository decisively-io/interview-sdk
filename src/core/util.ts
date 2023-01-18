import { State, AttributeData } from '@decisively-io/types-interview';

export const buildUrl = (...args: (string | undefined)[]) => {
  return [...args.filter(a => !!a)].join('/');
};

export const range = (size: number, startAt: number = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};

export const stateToData = (state: State[]): AttributeData => {
  return Object.keys(state).reduce((acc: AttributeData, key) => {
    acc[key] = state.find( (s) => s.id === key)?.value;
    return acc;
  }, {});
};
