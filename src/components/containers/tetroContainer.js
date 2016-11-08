import {connect} from 'react-redux';

import {CurrentTetro} from '../tetrominos/tetros/currentTetro.jsx';

const mapStateToProps = state => ({
  x: state.currentTetReducer.x,
  y: state.currentTetReducer.y,
  angle: state.currentTetReducer.angle  
})


export const TetroContainer = connect(mapStateToProps)(CurrentTetro);