// ********************* IMPORT NPM MODULES *********************
import React from 'react';

// ********************* IMPORT TETROMINOS *********************
import {TetroContainer} from './containers/tetroContainer.js';

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
            <TetroContainer gridSize="20" />   
        </svg>
      </div>
    )
  }
})

export {Grid};
