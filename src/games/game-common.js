import {
  greetUser,
  askUser,
  printWrongAnswer,
  printCorrect,
  printCongratulations,
  printTask,
} from '../cli.js';

/**
 * Максимальное количество раундов
 */
const MAX_ROUNDS = 3;

/**
 * Реализует общюю логику игр
 * @param {object} game - объект с параметрами игры
 */
export default function playGame(game) {
  const username = greetUser();

  printTask(game.task);

  for (let i = 1; i <= MAX_ROUNDS; i += 1) {
    const [taskQuestion, correctAnswer] = game.setParams();

    const answer = askUser(taskQuestion);

    if (answer === correctAnswer) printCorrect();
    else {
      printWrongAnswer(answer, correctAnswer, username);
      process.exit(0);
    }
  }
  printCongratulations(username);
}
