import {MOVE_RIGHT} from './types.js';

import {store} from '../store/store.js';

export default function moveRight() {
  store.dispatch({
    type: MOVE_RIGHT
  })
}