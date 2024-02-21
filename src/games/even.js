import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNumberRange = 1;
const maxNumberRange = 100;

function setParams() {
  const number = generateFromRange(minNumberRange, maxNumberRange);
  const correctAnswer = number % 2 ? 'no' : 'yes';
  return [number, correctAnswer];
}

/**
 * Запускает игру Проверка на чётность
 */
export default function evenOrNot() {
  playGame(task, setParams);
}
