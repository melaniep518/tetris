// ********************* IMPORT ACTIONS *********************
import {RENDER_TETRO} from '../actions/renderTetro.js';

const _initialCoordinates =  {
  x: 0,
  y: 0
}

function currentTetReducer(currentCoordinates = _initialCoordinates, action) {
  let coordinatesCopy = Object.assign({}, currentCoordinates)
  switch(action.type) {
    case RENDER_TETRO:
      return (
        coordinatesCopy
      )
    default:
      return currentCoordinates;
  }
}

export {currentTetReducer};