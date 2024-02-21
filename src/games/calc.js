import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  minNumberRange: 1,
  maxNumberRange: 100,
  operationCount: 3,
  task: 'What is the result of the expression?',
  setParams() {
    const operation = generateFromRange(0, game.operationCount - 1);
    const number1 = generateFromRange(game.minNumberRange, game.maxNumberRange);
    const number2 = generateFromRange(game.minNumberRange, game.maxNumberRange);
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
