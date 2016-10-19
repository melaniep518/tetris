// ********************* IMPORT TETROS ARRAY *********************
import {tetroArray} from '../components/tetrominos/tetros-array.jsx';



export const RENDER_TETRO = "RENDER_TETRO";

export function renderTetro () {
  return {
    type: RENDER_TETRO,
    data: tetroArray
  }
}
