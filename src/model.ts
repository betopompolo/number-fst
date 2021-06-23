export interface State {
  name: string;
  transitions?: Transition[] | null;
}

export interface Transition {
  input: string;
  output: string;
  getNextState: () => State;
}