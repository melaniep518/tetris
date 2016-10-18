// ********************* IMPORT ACTIONS *********************
import {RENDER_TETRO} from '../actions/renderTetro.js';


// ********************* ESTABLISH DEFAULT STATE *********************

const _initialState = {
  currentTetro: null
};

function gridReducer(currentState = _initialState, action) {
  switch(action.type) {
    case RENDER_TETRO:
      return (
        action.data,
        {
          currentTetro: []
        }
      )
    default:
      return currentState
  }
}

export {gridReducer};