// ********************* IMPORT NPM MODULES *********************
import React from 'react';

// ********************* IMPORT TETROMINOS *********************
import {S} from './s-tetro.jsx';
import {I} from './i-tetro.jsx';
import {O} from './o-tetro.jsx';
import {T} from './t-tetro.jsx';
import {Z} from './z-tetro.jsx';
import {J} from './j-tetro.jsx';
import {L} from './l-tetro.jsx';

// ********************* TETROS ARRAY *********************

export const tetroArray = [
  <S x="1" y="1" color="SpringGreen"/>,
  <I x="1" y="6" color="cyan"/>,
  <O x="1" y="12" color="yellow"/>,
  <T x="9" y="1" color="magenta"/>,
  <Z x="9" y="6" color="red"/>,
  <J x="9" y="12" color="blue"/>,
  <L x="18" y="1" color="orange"/>
]