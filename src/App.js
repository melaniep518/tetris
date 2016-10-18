var React = require('react');
var ReactDOM = require('react-dom');

import {Tetrominos} from './components/grid.jsx';

var HelloWorld = React.createClass({
  render: function() {
   return (
      <div>
        <Tetrominos/>   
      </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
