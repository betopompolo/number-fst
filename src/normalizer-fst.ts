import { FST } from "./fst";
import { State, Transition } from "./model";

export const NormalizerFST = {
  run(input: string): string {
    if (input?.length < 3) {
      return input.padStart(3, '0');
    }
    const invertedInput = [...input].reverse().join('');
    return FST.run({ input: invertedInput, initialState: q0 }).reverse().join('');
  }
}

const invalidCharTransition: Transition = { input: /[^0-9]/, output: null, getNextState: () => { throw new Error('Invalid char') } };

const q0: State = {
  transitions: [
    { input: /[0-9]/, output: (c) => c, getNextState: () => q1 },
    invalidCharTransition,
  ]
}

const q1: State = {
  transitions: [
    { input: /[0-9]/, output: (c) => c, getNextState: () => q2 },
    invalidCharTransition,
  ]
}

const q2: State = {
  transitions: [
    { input: /[0-9]/, output: (c) => c, getNextState: () => qf },
    invalidCharTransition,
  ]
}

const qf: State = {
  transitions: [{ input: /./, output: null }]
}

