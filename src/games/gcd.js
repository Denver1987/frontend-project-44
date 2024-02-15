import { generateFromRange } from '../service/numberGeneration.js';
import { gcdEuclid as getGcd } from '../service/numeric-algorithms.js';
import playGame from './game-common.js';

const game = {
  task: 'Find the greatest common divisor of given numbers.',
  setParams: () => {
    const number1 = generateFromRange(99, 1);
    const number2 = generateFromRange(99, 1);
    const gcd = getGcd(number1, number2);
    return [`${number1} ${number2}`, String(gcd)];
  },
};

export default function findGcd() {
  playGame(game);
}
