// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const I = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.i} x="0" y="0" color="cyan"/>
    )
  }
})
