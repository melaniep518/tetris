// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Tetromino} from '../building-bits/tetromino.jsx';
import {coordinates} from '../building-bits/coordinates.jsx';


export const Z = React.createClass({

  render: function() {
    return (
      <Tetromino blocks={coordinates.z} x="1" y="15" color="red"/>
    )
  }
})
