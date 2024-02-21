import readlineSync from 'readline-sync';

/**
 * Максимальное количество раундов
 */
const maxRounds = 3;

/**
 * Реализует общюю логику игр
 * @param {Object} game - объект с параметрами игры
 */
export default function playGame(task, setParams) {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(task);

  for (let i = 1; i <= maxRounds; i += 1) {
    const [taskQuestion, correctAnswer] = setParams();

    const answer = readlineSync.question(`Question: ${taskQuestion}\nYou answer: `);

    if (answer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      process.exit(0);
    }
  }
  console.log(`Congratulations, ${username}!!!`);
}
