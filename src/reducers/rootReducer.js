import {combineReducers} from 'redux';

// *** IMPORT REDUCERS ***
import {currentTetReducer} from './currentTetReducer.js';

const rootReducer = combineReducers({
  currentTetReducer
})

export {rootReducer};