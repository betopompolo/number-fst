export interface State {
  transitions?: Transition[] | null;
}

export interface Transition {
  input: string | RegExp;
  output: string | TransitionOutputFn | null;
  getNextState?: () => State;
}

type TransitionOutputFn = (c: string) => string;