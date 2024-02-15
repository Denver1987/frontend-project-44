import {
  greetUser,
  askUser,
  printWrongAnswer,
  printCorrect,
  printCongratulations,
  printTask,
} from '../cli.js';

const MAX_ROUNDS = 3;

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
