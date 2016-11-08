// ********************* IMPORT ACTIONS *********************
import {MOVE_LEFT, MOVE_RIGHT, SOFT_DROP, ROTATE} from '../actions/types.js';

const _initialCoordinates =  {
  x: 0,
  y: 0,
  angle: 0
}

function currentTetReducer(currentCoordinates = _initialCoordinates, action) {
  let coordinatesCopy = Object.assign({}, currentCoordinates)
  switch(action.type) {
    
    case MOVE_LEFT:
      coordinatesCopy.x === 0 ? null : coordinatesCopy.x -= 1;
      // coordinatesCopy.x -= 1;
      return coordinatesCopy;
    
    case MOVE_RIGHT: 
      coordinatesCopy.x === 10 ? null : coordinatesCopy.x += 1;
      // coordinatesCopy.x += 1;
      return coordinatesCopy;

    case SOFT_DROP:
      coordinatesCopy.y += 1;
      return coordinatesCopy;

    case ROTATE: 
      coordinatesCopy.angle += 90;
      return coordinatesCopy;
    
    default:
      return coordinatesCopy;
  }
}

export {currentTetReducer};