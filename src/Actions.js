import {StP, FinP} from './Constants.js';

export function addSP(startNode) {
    return { type: StP, startNode}
  }
  export function addFP(finishNode) {
    return { type: FinP, finishNode}
  }

