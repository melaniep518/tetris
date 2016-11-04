import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


// *** IMPORT STORE ***
import {store} from './store/store.js';

// *** IMPORT GAME ***
import {Grid} from './components/grid.jsx';

const App = () => (
  <Provider store={store}>
    <Grid/>   
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
});

