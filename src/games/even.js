import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  task: 'Answer "yes" if the number is even, otherwise answer "no".',
  setParams() {
    const number = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    const correctAnswer = number % 2 ? 'no' : 'yes';
    return [number, correctAnswer];
  },
};

/**
 * Запускает игру Проверка на чётность
 */
export default function evenOrNot() {
  playGame(game);
}
