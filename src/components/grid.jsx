// ********************* IMPORT NPM MODULES *********************
import React from 'react';


// ********************* IMPORT STORE *********************
import {store} from '../store/store.js';


// ********************* IMPORT ACTIONS *********************
import {renderTetro} from '../actions/renderTetro.js';


// ********************* IMPORT TETROMINOS *********************
import {S} from './tetrominos/s-tetro.jsx';
// import {I} from './tetrominos/i-tetro.jsx';
// import {O} from './tetrominos/o-tetro.jsx';
// import {T} from './tetrominos/t-tetro.jsx';
// import {Z} from './tetrominos/z-tetro.jsx';
// import {J} from './tetrominos/j-tetro.jsx';
// import {L} from './tetrominos/l-tetro.jsx';


// ********************* THIS IS WHERE I WILL RENDER THE GRID *********************

const gridSize = 20;

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

    return (
      <div>
        <h1>Hello World!</h1>
        <svg height="500" width="450" style={style}>
          {store.getState().currentTetro.map(function(val, idx) {
            return
          })}
        </svg>
      </div>
    )
  }
})

export {Grid, gridSize};
