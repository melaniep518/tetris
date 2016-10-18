import React from 'react';

import {S} from './tetrominos/s-tetro.jsx';
import {I} from './tetrominos/i-tetro.jsx';
import {O} from './tetrominos/o-tetro.jsx';
import {T} from './tetrominos/t-tetro.jsx';
import {Z} from './tetrominos/z-tetro.jsx';
import {J} from './tetrominos/j-tetro.jsx';
import {L} from './tetrominos/l-tetro.jsx';

// THIS IS WHERE I WILL RENDER THE GRID

const gridSize = 20;

const Tetrominos = React.createClass({

  render: function() {
    let style = {
      backgroundColor: "#eee"
    }

    return (
      <div>
        <h1>Hello World!</h1>
        <svg height="500" width="450" style={style}>
          <S x="1" y="1" color="SpringGreen"/>  
          <I x="1" y="6" color="cyan"/>
          <O x="1" y="12" color="yellow"/>
          <T x="9" y="1" color="magenta"/>
          <Z x="9" y="6" color="red"/>
          <J x="9" y="12" color="blue"/>
          <L x="18" y="1" color="orange"/>
        </svg>
      </div>
    )
  }
})

export {Tetrominos, gridSize};
