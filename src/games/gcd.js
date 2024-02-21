import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

/**
 * Определяет наибольший общий делитель по алгоритму Евклида
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
export function getGCD(number1, number2) {
  let a = number1;
  let b = number2;
  let remainder;
  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  task: 'Find the greatest common divisor of given numbers.',
  setParams() {
    const number1 = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    const number2 = generateFromRange(game.MIN_NUMBER_RANGE, game.MAX_NUMBER_RANGE);
    const gcd = getGCD(number1, number2);
    return [`${number1} ${number2}`, String(gcd)];
  },
};

/**
 * Запускает игру НОД
 */
export default function findGcd() {
  playGame(game);
}
