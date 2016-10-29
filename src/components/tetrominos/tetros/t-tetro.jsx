// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const T = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.t} x="1" y="12" color="magenta"/>
    )
  }
})
