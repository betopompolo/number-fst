import { FST } from "./fst";
import { State } from "./model";

export const NumToWordFST = {
  run(input: string): string {
    // const normalizedInput = NormalizerFST.run(input);
    const output = FST.run({ input: input, initialState: initialState });
    return output;
  }
}

const initialState: State = {
  transitions: [
    { input: '0', output: '', getNextState: () => tenState },
  ]
}

const tenState: State = {
  transitions: [
    { input: '0', output: '', getNextState: () => unitState },
    { input: '1', output: '', getNextState: () => t1State },
    { input: '2', output: 'vinte', getNextState: () => t2State },
    { input: '3', output: 'trinta', getNextState: () => t2State },
    { input: '4', output: 'quarenta', getNextState: () => t2State },
    { input: '5', output: 'cinquenta', getNextState: () => t2State },
    { input: '6', output: 'sessenta', getNextState: () => t2State },
    { input: '7', output: 'setenta', getNextState: () => t2State },
    { input: '8', output: 'oitenta', getNextState: () => t2State },
    { input: '9', output: 'noventa', getNextState: () => t2State },
  ]
}

const t1State: State = {
  transitions: [
    { input: '0', output: 'dez' },
    { input: '1', output: 'onze' },
    { input: '2', output: 'doze' },
    { input: '3', output: 'treze' },
    { input: '4', output: 'quatorze' },
    { input: '5', output: 'quinze' },
    { input: '6', output: 'dezesseis' },
    { input: '7', output: 'dezessete' },
    { input: '8', output: 'dezoito' },
    { input: '9', output: 'dezenove' },
  ]
}

const t2State: State = {
  transitions: [
    { input: '0', output: '' },
    { input: '1', output: ' e um' },
    { input: '2', output: ' e dois' },
    { input: '3', output: ' e três' },
    { input: '4', output: ' e quatro' },
    { input: '5', output: ' e cinco' },
    { input: '6', output: ' e seis' },
    { input: '7', output: ' e sete' },
    { input: '8', output: ' e oito' },
    { input: '9', output: ' e nove' },
  ]
}

const unitState: State = {
  transitions: [
    { input: '0', output: 'zero' },
    { input: '1', output: 'um' },
    { input: '2', output: 'dois' },
    { input: '3', output: 'três' },
    { input: '4', output: 'quatro' },
    { input: '5', output: 'cinco' },
    { input: '6', output: 'seis' },
    { input: '7', output: 'sete' },
    { input: '8', output: 'oito' },
    { input: '9', output: 'nove' },
  ]
}
