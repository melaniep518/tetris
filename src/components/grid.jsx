// ********************* IMPORT NPM MODULES *********************
import React from 'react';

// ********************* IMPORT TETROMINOS *********************
import {TetroContainer} from './containers/tetroContainer.js';

const Grid = React.createClass({

// ********************* GRID COORDINATES *********************
  coordinates: {
    width: 200,
    height: 400,
    scale: 20
  },

// ********************* MAKES VERTICAL LINES ********************* 
  makeVerticalLines: function() {
    let verticalLines = [];
    for(let width = 0; width <= this.coordinates.width; width += this.coordinates.scale) {
      verticalLines.push(<line x1={width} x2={width} y1="0" y2="400" key={"vertLine_" + width} strokeWidth="0.5" stroke="black" />)
    }
    return verticalLines;
  },


// ********************* MAKES HORIZONTAL LINES *********************
  makeHorizontalLines: function() {
    let horizontalLines = [];
    for(let height = 0; height <= this.coordinates.height; height += this.coordinates.scale) {
      horizontalLines.push(<line x1="0" x2="200" y1={height} y2={height} key={"horizLine_" + height} strokeWidth="0.5" stroke="black" />)
    }
    return horizontalLines;
  },


// ********************* RENDER GAME GRID *********************
  render: function() {
    let style = {
      backgroundColor: "#eee"
    }

// WIDTH & HEIGHT have been scaled to "gridSize" by multiplying the dimensions (10w x 20h)
    
    return (
      <div>
        <h1>Hello World!</h1>
        <svg width={this.coordinates.width} height={this.coordinates.height} style={style}>
            {this.makeVerticalLines()}
            {this.makeHorizontalLines()}
            <TetroContainer gridSize={this.coordinates.scale} />   
        </svg>
      </div>
    )
  }
})

export {Grid};
