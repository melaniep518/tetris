import {connect} from 'react-redux';

import {CurrentTetro} from '../tetrominos/tetros/currentTetro.jsx';

const mapStateToProps = state => ({
  x: state.x,
  y: state.y
})

export const TetroContainer = connect(mapStateToProps)(CurrentTetro);