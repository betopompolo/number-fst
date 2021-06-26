import { State } from "./model";

export const FST = {
  run({ input, initialState, endState }: FSTRunOptions): string[] {
    const outputList = [];
    let currentState = initialState;

    for (const c of input) {
      const transition = currentState.transitions?.find(t => t.input instanceof RegExp ? t.input.test(c) : t.input === c);
      if (!transition) {
        break;
      }

      const output = typeof transition.output === 'string' ? transition.output : transition.output?.(c);
      if (output) {
        outputList.push(output);
      }
      const nextState = transition.getNextState?.();
      if (nextState) {
        currentState = nextState;
      }
    }

    if (endState && endState !== currentState) {
      throw new Error('Invalid endState');
    } 

    return outputList;
  }
}

export interface FSTRunOptions {
  input: string;
  initialState: State;
  endState?: State;
}
