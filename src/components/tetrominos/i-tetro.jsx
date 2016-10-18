import React from 'react';
import {Square} from './square.jsx';
import {gridSize} from '../grid.jsx';

const I = React.createClass({
  blocks: [[0,0],[0,1],[0,2],[0,3]],

  render: function() {
  let transformString = "scale(" + gridSize + " " + gridSize + ") translate(" + this.props.x + " " + this.props.y + ")";

  let squares = this.blocks.map(function(xy, i) {
      return <Square key={i} x={xy[0]} y={xy[1]} width="1" height="1" />
    })

    return (
      <g transform={transformString} fill={this.props.color}>
        {squares}
      </g>  
    )
  }
})

export {I};