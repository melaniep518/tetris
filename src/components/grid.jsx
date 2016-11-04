// ********************* IMPORT NPM MODULES *********************
import React from 'react';
import Mousetrap from 'mousetrap';

// ********************* IMPORT STORE *********************
import {store} from '../store/store.js';

// ********************* IMPORT TETROMINOS *********************
import {TetroContainer} from './containers/tetroContainer.js';

// ********************* SCALE *********************
const gridSize = 20;

// ********************* RENDER GAME GRID *********************
const Grid = React.createClass({
  render: function() {
    let style = {
      backgroundColor: "#eee"
    }

// WIDTH & HEIGHT have been scaled to "gridSize" by multiplying the dimensions (10w x 20h)
    
    return (
      <div>
        <h1>Hello World!</h1>
        <svg width="200px" height="400px" style={style}>
            <TetroContainer/>   
        </svg>
      </div>
    )
  }
})

export {Grid, gridSize};
