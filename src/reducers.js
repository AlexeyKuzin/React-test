import {initialState} from './App';
import {StP, FinP} from './Constants';


//---------------------редьюсер обновляющий стартовую либо финишную точку---------------------------//
export default function todoApp(state = initialState, action) {
    switch (action.type) {
      case StP:
        return Object.assign({}, {
        startNode: action.startNode, 
        finishNode: state.finishNode
        })
      case FinP: 
        return Object.assign({}, {
        startNode: state.startNode, 
        finishNode: action.finishNode
        })
      default:
        return state
  }
  }