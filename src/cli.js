import readlineSync from 'readline-sync';

/**
 * Запрашивает и возвращает имя игрока
 * @returns {string}
 */
export default function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
