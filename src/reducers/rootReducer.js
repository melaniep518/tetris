import {combineReducers} from 'redux';

// *** IMPORT REDUCERS ***
import {gridReducer} from './gridReducer.js';

const rootReducer = combineReducers({
  gridReducer
})

export {rootReducer};