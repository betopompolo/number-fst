import { State } from "./model";

export const FST = {
  run({ input, initialState, endState }: RunOptions): string {
    let output = '';
    let currentState = initialState;

    for (const c of input) {
      const transition = currentState.transitions?.find(t => t.input === c);
      if (!transition) {
        break;
      }
      output += transition.output;
      currentState = transition.getNextState();
    }

    if (endState.name !== currentState.name) {
      throw new Error('Invalid endState');
    } 

    return output;
  }
}

interface RunOptions {
  input: string;
  initialState: State;
  endState: State;
}
