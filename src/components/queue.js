var _ = require('underscore');

// ******************************* IMPORT TETROMINOS *******************************
import {I} from './tetrominos/tetros/i-tetro.jsx';
import {J} from './tetrominos/tetros/j-tetro.jsx';
import {L} from './tetrominos/tetros/l-tetro.jsx';
import {O} from './tetrominos/tetros/o-tetro.jsx';
import {S} from './tetrominos/tetros/s-tetro.jsx';
import {T} from './tetrominos/tetros/t-tetro.jsx';
import {Z} from './tetrominos/tetros/z-tetro.jsx';

const TetroArray = [I, J, L, O, S, T, Z];

function shuffle(tetros) {
  let shuffled = [];
  for(let i = tetros.length; i > 0; i--) {
    let randomInd = Math.floor(Math.random()*tetros.length);
    let randomCard = tetros[randomInd];
    shuffled.push(randomCard);
    tetros.splice(randomInd, 1);
  }
  return shuffled;
}

console.log('SHUFFLED TETROS:', shuffle(TetroArray));


// function queue(shuffledArr) {
//   // 1. Shuffle the array
//   // 2. Pass 3-5 pieces into a new array,
//   // 3. Remove
// }

