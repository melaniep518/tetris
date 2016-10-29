// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const J = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.j} x="4" y="0" color="blue"/>
    )
  }
})

