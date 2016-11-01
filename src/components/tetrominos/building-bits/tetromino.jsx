// ***************************************** IMPORT NPM DEPENDENCIES ***************************************** 
import React from 'react';

// ***************************************** IMPORT COMPONENTS *****************************************
import {Square} from './square.jsx';
import {gridSize} from '../../grid.jsx';

// TETROMINO BUILDER -- generic; uses 2D array provided through props to build tetrominos; 
export const Tetromino = React.createClass({
  render: function() {

      let squares = this.props.blocks.map(function(xy, i) {
        return <Square key={i} x={xy[0]} y={xy[1]} width="1px" height="1px" />
      })

      return (
        <g fill={this.props.color}>
          {squares}
        </g>
      )
  }
})

