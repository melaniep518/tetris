// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const L = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.l} x="7" y="0" color="orange"/>
    )
  }
})
