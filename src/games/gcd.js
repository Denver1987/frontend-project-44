import { generateFromRange } from '../service/numberGeneration.js';
import { gcdEuclid as getGcd } from '../service/numeric-algorithms.js';
import playGame from './game-common.js';

const game = {
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  task: 'Find the greatest common divisor of given numbers.',
  setParams() {
    const number1 = generateFromRange(this.MIN_NUMBER_RANGE, this.MAX_NUMBER_RANGE);
    const number2 = generateFromRange(this.MIN_NUMBER_RANGE, this.MAX_NUMBER_RANGE);
    const gcd = getGcd(number1, number2);
    return [`${number1} ${number2}`, String(gcd)];
  },
};

export default function findGcd() {
  playGame(game);
}
