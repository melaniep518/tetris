import {ROTATE} from './types.js';

import {store} from '../store/store.js';

export default function rotate() {
  store.dispatch({
    type: ROTATE
  })
}