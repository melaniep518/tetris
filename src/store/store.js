import {createStore} from 'redux';

// *** IMPORT ROOT REDUCER ***
import {rootReducer} from '../reducers/rootReducer.js';

const store = createStore(rootReducer);

export {store};