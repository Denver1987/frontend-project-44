import { generateFromRange } from '../service/numberGeneration.js';
import {
  greetUser,
  askUser,
  printWrongAnswer,
  printCorrect,
  printCongratulations,
  checkValidity,
} from '../cli.js';

export default function evenOrNot(maxRounds) {
  const username = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= maxRounds; i += 1) {
    const number = generateFromRange(100, 1);

    const isOdd = number % 2;

    const answer = askUser(number);

    if (checkValidity(answer !== 'yes' && answer !== 'no')) process.exit(0);

    if (answer === 'yes' && isOdd) {
      printWrongAnswer('yes', 'no', username);
      process.exit(0);
    }

    if (answer === 'no' && !isOdd) {
      printWrongAnswer('no', 'yes', username);
      process.exit(0);
    }

    if ((answer === 'no' && isOdd) || (answer === 'yes' && !isOdd)) printCorrect();
  }

  printCongratulations(username);
}
