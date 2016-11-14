// ********************* IMPORT NPM MODULES *********************
import React from 'react';

// ********************* IMPORT TETROMINOS *********************
import {TetroContainer} from './containers/tetroContainer.js';

// ********************* RENDER GAME GRID *********************
const Grid = React.createClass({

// THIS MUST BE MORE DYNAMIC WIDTH AND HEIGHT SHOULD BE DYNAMIC BASED ON SVG WIDTH AND HEIGHT;
// AND INCREMENT SHOULD BE DYNAMIC BASED ON SCALE
  
  makeVerticalLines: function() {
    let verticalLines = [];
    for(let width = 0; width <= 200; width += 20) {
      verticalLines.push(<line x1={width} x2={width} y1="0" y2="400" key={"vertLine_" + width} strokeWidth="0.5" stroke="black" />)
    }
    return verticalLines;
  },

  makeHorizontalLines: function() {
    let horizontalLines = [];
    for(let height = 0; height <= 400; height += 20) {
      horizontalLines.push(<line x1="0" x2="200" y1={height} y2={height} key={"horizLine_" + height} strokeWidth="0.5" stroke="black" />)
    }
    return horizontalLines;
  },

  render: function() {
    let style = {
      backgroundColor: "#eee"
    }
    console.log(this.makeVerticalLines());

// WIDTH & HEIGHT have been scaled to "gridSize" by multiplying the dimensions (10w x 20h)
    
    return (
      <div>
        <h1>Hello World!</h1>
        <svg width="200px" height="400px" style={style}>
            {this.makeVerticalLines()}
            {this.makeHorizontalLines()}
            <TetroContainer gridSize="20" />   
        </svg>
      </div>
    )
  }
})

export {Grid};
