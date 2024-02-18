import readlineSync from 'readline-sync';

/**
 * Запрашивает и возвращает имя игрока
 * @returns {string}
 */
export function greetUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

/**
 * Выводит текст задания в консоль
 * @param {string} task - строка с текстом задания
 */
export function printTask(task) {
  console.log(task);
}

/**
 * Выводит вопрос с вариантом задания и возвращает ответ пользователя
 * @param {string} question - строка с вариантом задания
 * @returns {string}
 */
export function askUser(question) {
  return readlineSync.question(`Question: ${question}\nYou answer: `);
}

/**
 * обрабатывает неправильный ответ
 * @param {string | number} incorrect - ответ пользователя
 * @param {string | number} correct - правильный ответ
 * @param {string} username - имя пользователя
 */
export function printWrongAnswer(incorrect, correct, username) {
  console.log(`'${incorrect}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${username}!`);
}

/**
 * Выводит строку Correct!!!
 */
export function printCorrect() {
  console.log('Correct!');
}

/**
 * Выводит строку Congratulations ${username}!!!
 * @param {*} username - имя пользователя
 */
export function printCongratulations(username) {
  console.log(`Congratulations ${username}!!!`);
}
