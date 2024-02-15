import { generateFromRange } from '../service/numberGeneration.js';
import { isPrime } from '../service/numeric-algorithms.js';
import playGame from './game-common.js';

const game = {
  task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  setParams: () => {
    const number = generateFromRange(99, 1);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [String(number), correctAnswer];
  },
};

export default function isPrimeGame() {
  playGame(game);
}
