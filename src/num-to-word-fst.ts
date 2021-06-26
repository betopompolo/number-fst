import { FST } from "./fst";
import { State } from "./model";

export const NumToWordFST = {
  run(input: string): string {
    const output = FST.run({ input: input, initialState: hundredState });
    return output.join(' e ');
  }
}

const hundredState: State = {
  transitions: [
    { input: '0', output: null, getNextState: () => tenState },
    { input: '1', output: null, getNextState: () => h1State },
    { input: '2', output: 'duzentos', getNextState: () => tenState },
    { input: '3', output: 'trezentos', getNextState: () => tenState },
    { input: '4', output: 'quatrocentos', getNextState: () => tenState },
    { input: '5', output: 'quinhentos', getNextState: () => tenState },
    { input: '6', output: 'seiscentos', getNextState: () => tenState },
    { input: '7', output: 'setecentos', getNextState: () => tenState },
    { input: '8', output: 'oitocentos', getNextState: () => tenState },
    { input: '9', output: 'novecentos', getNextState: () => tenState },
  ]
}

const h1State: State = {
  transitions: [
    { input: '0', output: null, getNextState: () => h2State  },
    { input: '1', output: 'cento', getNextState: () => t1State  },
    { input: '2', output: 'cento e vinte', getNextState: () => t2State  },
    { input: '3', output: 'cento e trinta', getNextState: () => t2State  },
    { input: '4', output: 'cento e quarenta', getNextState: () => t2State  },
    { input: '5', output: 'cento e cinquenta', getNextState: () => t2State  },
    { input: '6', output: 'cento e sessenta', getNextState: () => t2State  },
    { input: '7', output: 'cento e setenta', getNextState: () => t2State  },
    { input: '8', output: 'cento e oitenta', getNextState: () => t2State  },
    { input: '9', output: 'cento e noventa', getNextState: () => t2State  },
  ]
}

const h2State: State = {
  transitions: [
    { input: '0', output: 'cem'  },
    { input: '1', output: 'cento e um'  },
    { input: '2', output: 'cento e dois'  },
    { input: '3', output: 'cento e três'  },
    { input: '4', output: 'cento e quatro'  },
    { input: '5', output: 'cento e cinco'  },
    { input: '6', output: 'cento e seis'  },
    { input: '7', output: 'cento e sete'  },
    { input: '8', output: 'cento e oito'  },
    { input: '9', output: 'cento e nove'  },
  ]
}

const tenState: State = {
  transitions: [
    { input: '0', output: null, getNextState: () => unitState },
    { input: '1', output: null, getNextState: () => t1State },
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
    { input: '0', output: null },
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
