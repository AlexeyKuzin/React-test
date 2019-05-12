import {
    ADD_START_POINT,
    ADD_FINISH_POINT,
    ADD_SHORTEST_PATH,
    ADD_TOTAL_WEIGTH
  } from './ActionTypes'
  import {GR, startPoint} from './App'

  const initialState = [
    {
      startPoint: 'A'
    }
  ]

  export function changeSP(state = initialState, action) {
    return state;
  } 