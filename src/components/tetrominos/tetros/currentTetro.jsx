// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';
import Mousetrap from 'mousetrap';

import moveLeft from '../../../actions/moveLeft.js';
import moveRight from '../../../actions/moveRight.js';
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
  },
  

  render: function() {
    // console.log(this.props)
    const gridSize = 20;
    let transform = "scale(" + gridSize + " " + gridSize + ") translate(" + this.props.x + " " + this.props.y + ")";

    return (
      <g transform={transform}>
        <S/>
      </g>
    )
  }
})

