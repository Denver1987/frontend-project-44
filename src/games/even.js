import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  minNumberRange: 1,
  maxNumberRange: 100,
  task: 'Answer "yes" if the number is even, otherwise answer "no".',
  setParams() {
    const number = generateFromRange(game.minNumberRange, game.maxNumberRange);
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
