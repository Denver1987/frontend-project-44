import { generateFromRange } from '../service/numberGeneration.js';
import { isPrime } from '../service/numeric-algorithms.js';
import playGame from './game-common.js';

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  setParams() {
    const number = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [String(number), correctAnswer];
  },
};

export default function isPrimeGame() {
  playGame(game);
}
