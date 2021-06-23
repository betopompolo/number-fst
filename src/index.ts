import { FST } from "./fst";
import { State } from "./model";

const q0: State = {
  name: 'q0',
  transitions: [{
      input: 'a',
      output: 'a',
      getNextState: () => q1,
  }]
}

const q1: State = {
  name: 'q1',
  transitions: [{
      input: 'b',
      output: 'B',
      getNextState: () => q0,
  }]
}

const output = FST.run({ input: 'abababa', initialState: q0, endState: q1 });

console.log(`output: ${output}`);
