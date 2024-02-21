import { generateFromRange } from '../service/numberGeneration.js';
import playGame from '../game-common.js';

const task = 'What is the result of the expression?';

const minNumberRange = 1;
const maxNumberRange = 100;
const operationCount = 3;

function setParams() {
  const operation = generateFromRange(0, operationCount - 1);
  const number1 = generateFromRange(minNumberRange, maxNumberRange);
  const number2 = generateFromRange(minNumberRange, maxNumberRange);
  switch (operation) {
    case 0: return [`${number1} + ${number2}`, String(number1 + number2)];

    case 1: return [`${number1} - ${number2}`, String(number1 - number2)];

    case 2: return [`${number1} * ${number2}`, String(number1 * number2)];

    default: return [];
  }
}

/**
 * Запускает игру Калькулятор
 */
export default function calculator() {
  playGame(task, setParams);
}
