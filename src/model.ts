export interface State {
  name: string;
  transitions?: Transition[] | null;
}

export interface Transition {
  input: string | RegExp;
  output: string | ((c: string) => string);
  getNextState: () => State;
}