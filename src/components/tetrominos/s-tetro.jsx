import React from 'react';
import {Square} from './square.jsx';
import {gridSize} from '../grid.jsx';


// *~*~*~* S-TETROMINO *~*~*~*~*~*
// ????? I SHOULD NOT HAVE TO RE-WRITE THIS FUNCTION


const S = React.createClass({
  blocks: [[0,0],[1,0],[1,1],[2,1]],

  render: function() {
  
  // console.log('PROPS:', this.props);

  // ????? STORE THIS SOMEWHERE SO AS NOT TO HAVE TO REPEAT
  let transformString = "scale(" + gridSize + " " + gridSize + ") translate(" + this.props.x + " " + this.props.y + ")";
    
// ***This gives us four individual squares

    let squares = this.blocks.map(function(xy, i) {
      return <Square key={i} x={xy[0]} y={xy[1]} width="1" height="1" />
    })


    console.log(squares);

// ***Returns collection of squares as a shape (wrapped in a g tag)
    return (
      <g transform={transformString} fill={this.props.color}>
        {squares}
      </g>  
    )
  }
})

export {S};