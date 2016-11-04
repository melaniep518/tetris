import {MOVE_LEFT} from './types.js';

import {store} from '../store/store.js';

export default function moveLeft() {
  store.dispatch({
    type: MOVE_LEFT
  })
}