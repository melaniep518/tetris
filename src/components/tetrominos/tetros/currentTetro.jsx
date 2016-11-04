// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// *****************************************IMPORT TETROMINOS *****************************************
import {S} from './s-tetro.jsx';
// import {I} from './tetrominos/tetros/i-tetro.jsx';
// import {O} from './tetrominos/tetros/o-tetro.jsx';
// import {T} from './tetrominos/tetros/t-tetro.jsx';
// import {Z} from './tetrominos/tetros/z-tetro.jsx';
// import {J} from './tetrominos/tetros/j-tetro.jsx';
// import {L} from './tetrominos/tetros/l-tetro.jsx';

export const CurrentTetro = React.createClass({
  render: function() {
    console.log(this.props)
    const gridSize = 20;
    // this.props.x & this.props.y returning undefined
    let transform = "scale(" + gridSize + " " + gridSize + ") translate(" + this.props.x + " " + this.props.y + ")";
    
    return (
      <g transform={transform}>
        <S/>
      </g>
    )
  }
})

