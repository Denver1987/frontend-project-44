import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  OPERATION_COUNT: 3,
  task: 'What is the result of the expression?',
  setParams() {
    const operation = generateFromRange(0, game.OPERATION_COUNT - 1);
    const number1 = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    const number2 = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    switch (operation) {
      case 0: return [`${number1} + ${number2}`, String(number1 + number2)];

      case 1: return [`${number1} - ${number2}`, String(number1 - number2)];

      case 2: return [`${number1} * ${number2}`, String(number1 * number2)];

      default: return [];
    }
  },
};

/**
 * Запускает игру Калькулятор
 */
export default function calculator() {
  playGame(game);
}
