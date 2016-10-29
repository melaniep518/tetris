// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const S = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.s} x="1" y="0" color="SpringGreen"/>
    )
  }
})
