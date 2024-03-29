import { generateFromRange } from '../service/numberGeneration.js';
import playGame from '../game-common.js';

/**
 * Выполняет разложение числа на простые множители, возвращает массив с множителями.
 * @param {number} number
 * @returns {number[]}
 */
export function findFactors(number) {
  const factors = [];
  let num = number;
  while (num % 2 === 0) {
    factors.push(2);
    num /= 2;
  }

  let i = 3;
  let maxFactor = Math.sqrt(num);
  while (i <= maxFactor) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
      maxFactor = Math.sqrt(num);
    }
    i += 2;
  }

  if (num > 1) factors.push(num);
  return factors;
}

/**
 * Определяет, является ли число number простым
 * @param {number} number
 * @returns {boolean}
 */
export function isPrime(number) {
  if (number === 1) return true;
  if (findFactors(number).length === 1) return true;
  return false;
}

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumberRange = 1;
const maxNumberRange = 100;

function setParams() {
  const number = generateFromRange(minNumberRange, maxNumberRange);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
}

/**
 * Запускает игру Простое ли число
 */
export default function isPrimeGame() {
  playGame(task, setParams);
}
