// ********************* IMPORT ACTIONS *********************
import {MOVE_LEFT} from '../actions/types.js';
import {MOVE_RIGHT} from '../actions/types.js';

const _initialCoordinates =  {
  x: 0,
  y: 0
}

function currentTetReducer(currentCoordinates = _initialCoordinates, action) {
  let coordinatesCopy = Object.assign({}, currentCoordinates)
  switch(action.type) {
    
    case MOVE_LEFT:
      coordinatesCopy.x -= 1;
      // console.log(coordinatesCopy);
      return coordinatesCopy;
    
    case MOVE_RIGHT: 
      coordinatesCopy.x += 1;
      return coordinatesCopy;
    default:
      return coordinatesCopy;
  }
}

export {currentTetReducer};