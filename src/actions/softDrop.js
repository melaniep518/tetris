import {SOFT_DROP} from './types.js';

import {store} from '../store/store.js';

export default function softDrop() {
  store.dispatch({
    type: SOFT_DROP
  })
}