// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';
import Mousetrap from 'mousetrap';

// ***************************************** ACTION TYPES ***************************************** 
import moveLeft from '../../../actions/moveLeft.js';
import moveRight from '../../../actions/moveRight.js';
import softDrop from '../../../actions/softDrop.js';
import rotate from '../../../actions/rotate.js';

// *****************************************IMPORT TETROMINOS *****************************************
import {S} from './s-tetro.jsx';
// import {I} from './tetrominos/tetros/i-tetro.jsx';
// import {O} from './tetrominos/tetros/o-tetro.jsx';
// import {T} from './tetrominos/tetros/t-tetro.jsx';
// import {Z} from './tetrominos/tetros/z-tetro.jsx';
// import {J} from './tetrominos/tetros/j-tetro.jsx';
// import {L} from './tetrominos/tetros/l-tetro.jsx';

export const CurrentTetro = React.createClass({ 
  componentDidMount: function() {
    Mousetrap.bind('left', moveLeft);
    Mousetrap.bind('right', moveRight);
    Mousetrap.bind('down', softDrop);
    Mousetrap.bind('up', rotate);
  },
  

  render: function() {
    // console.log(this.props)
    let transform = "scale(" + this.props.gridSize + " " + this.props.gridSize + ") translate(" + this.props.x + " " + this.props.y + ") rotate(" + this.props.angle + ")";

    return (
      <g transform={transform}>
        <S/>
      </g>
    )
  }
})

