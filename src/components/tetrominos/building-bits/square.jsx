import React from 'react';

// *******************************************************************************************************************************************
// Most basic building block for tetrominos--creates individual squares that we can use to build our tetrominos

const Square = React.createClass({
  render: function() {
    let style = {
      stroke: "black",
      strokeWidth: "0.05"
    }
    return (
      <rect style={style} x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} />
    )
  }
})

export {Square};