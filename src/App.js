import React from 'react';
import ReactDOM from 'react-dom';


// *** IMPORT STORE ***
import {store} from './store/store.js';

// *** IMPORT GAME ***
import {Grid} from './components/grid.jsx';

var App = React.createClass({
  render: function() {
   return (
      <div>
        <Grid/>   
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

render();
store.subscribe(render);
