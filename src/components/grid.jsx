// ********************* IMPORT NPM MODULES *********************
import React from 'react';


// ********************* IMPORT STORE *********************
import {store} from '../store/store.js';


// ********************* IMPORT ACTIONS *********************
import {renderTetro} from '../actions/renderTetro.js';


// ********************* IMPORT TETROMINOS *********************
import {CurrentTetro} from './tetrominos/tetros/currentTetro.jsx';
import {TetroContainer} from './containers/tetroContainer.js';

// ********************* SCALE *********************
const gridSize = 20;

// ****************************************** THIS IS WHERE I WILL RENDER THE GRID ******************************************

const Grid = React.createClass({

  test: function() {
    console.log('test');
  },

// ********************* KEYBOARD EVENT HANDLER *********************
// SHOULD THIS BE SEPERATED INTO AN ACTION AND A REDUCER??

  componentDidMount: function() {
    document.onkeydown = function(e) {
      switch(e.keyCode) {
        case 32:
          store.dispatch(renderTetro());
          break;
      }
    };
  },

  
// ********************* RENDER GAME GRID *********************
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
