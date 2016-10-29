// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const O = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.o} x="1" y="9" color="yellow"/>
    )
  }
})
