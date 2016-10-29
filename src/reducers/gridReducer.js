// ********************* IMPORT ACTIONS *********************
import {RENDER_TETRO} from '../actions/renderTetro.js';


// ********************* ESTABLISH DEFAULT STATE *********************
// NOT SURE HOW I SHOULD SET UP MY INITIAL STATE...

const _initialState = {
  currentTetro: []
};

// ********************* RETRIEVES A RANDOM TETROMINO FROM THE TETROS ARRAT (PASSED IN AS DATA FROM RENDER TETRO ACTION) *********************

function gridReducer(currentState = _initialState, action) {
  switch(action.type) {
    case RENDER_TETRO:
      
// *****RANDOMIZE WITHIN THE ACTION NOT THE REDUCER

      function renderRandomTetro(array) {
        let tetroArrayCopy = [...array];
        let randomIdx = Math.floor(Math.random()*tetroArrayCopy.length);
        let randomTetro = tetroArrayCopy[randomIdx];
        return randomTetro;
      }

      return (
        console.log('TETROS ARRAY:',  renderRandomTetro(action.data)),
        {
          currentTetro: renderRandomTetro(action.data)
        }
      )
    default:
      return currentState
  }
}

export {gridReducer};