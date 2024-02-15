import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What is the result of the expression?',
  setParams: () => {
    const operation = generateFromRange(2);
    const number1 = generateFromRange(99, 1);
    const number2 = generateFromRange(99, 1);
    console.log(operation);
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
