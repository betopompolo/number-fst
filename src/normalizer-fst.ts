import { FST } from "./fst";
import { State, Transition } from "./model";

export const NormalizerFST = {
  run(input: string) {
    if ([...input].some(c => isNaN(Number(c))) || input?.length !== 3) {
      throw new Error(`Invalid input: ${input}`);
    }
    return FST.run({ input, initialState: q0 });
  }
}

const q2Transition: Transition = {
  input: /[0-9]/,
  output: c => c,
  getNextState: () => q2,
}

const q0: State = {
  transitions: [
    {
      input: '0',
      output: '',
      getNextState: () => q1,
    },
    q2Transition,
  ]
}

const q1: State = {
  transitions: [
    {
      input: '0',
      output: '',
      getNextState: () => q2,
    },
    q2Transition,
  ]
}

const q2: State = {
  transitions: [q2Transition]
}
