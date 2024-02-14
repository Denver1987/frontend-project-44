import { generateFromRange } from '../service/numberGeneration.js';
import {
  greetUser,
  askUser,
  printWrongAnswer,
  printCorrect,
  printCongratulations,
  checkValidity,
} from '../cli.js';

function setOperation(operationNumber, number1, number2) {
  if (operationNumber === 0) {
    return [Number(askUser(`${number1} + ${number2}`)), number1 + number2];
  }
  if (operationNumber === 1) {
    return [Number(askUser(`${number1} - ${number2}`)), number1 - number2];
  }
  if (operationNumber === 2) {
    return [Number(askUser(`${number1} * ${number2}`)), number1 * number2];
  }
  return [];
}

export default function calculator(maxRounds) {
  const username = greetUser();

  console.log('What is the result of the expression?');

  for (let i = 1; i <= maxRounds; i += 1) {
    const operation = generateFromRange(3, 0);
    const number1 = generateFromRange(100, 1);
    const number2 = generateFromRange(100, 1);
    const [answer, correctAnswer] = setOperation(operation, number1, number2);

    if (checkValidity(Number.isNaN(answer))) process.exit(0);

    if (answer === correctAnswer) printCorrect();

    else {
      printWrongAnswer(answer, correctAnswer, username);
      process.exit(0);
    }
  }

  printCongratulations(username);
}
