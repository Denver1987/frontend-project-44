import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  task: 'What is the result of the expression?',
  setParams() {
    const operation = generateFromRange(0, 2);
    const number1 = generateFromRange(this.MIN_NUMBER_RANGE, this.MAX_NUMBER_RANGE);
    const number2 = generateFromRange(this.MIN_NUMBER_RANGE, this.MAX_NUMBER_RANGE);
    switch (operation) {
      case 0: return [`${number1} + ${number2}`, String(number1 + number2)];

      case 1: return [`${number1} - ${number2}`, String(number1 - number2)];

      case 2: return [`${number1} * ${number2}`, String(number1 * number2)];

      default: return [];
    }
  },
};

export default function calculator() {
  playGame(game);
}
