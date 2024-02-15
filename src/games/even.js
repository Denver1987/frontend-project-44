import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'Answer "yes" if the number is even, otherwise answer "no".',
  setParams: () => {
    const number = generateFromRange(99, 1);
    const correctAnswer = number % 2 ? 'no' : 'yes';
    return [number, correctAnswer];
  },
};

export default function evenOrNot() {
  playGame(game);
}
