import readlineSync from 'readline-sync';

export function greetUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function askUser(question) {
  return readlineSync.question(`Question: ${question}\nYou answer: `);
}

export function printWrongAnswer(incorrect, correct, username) {
  console.log(`${incorrect} is wrong answer ;(. Correct answer was ${correct}.\nLet's try again, ${username}!`);
}

export function printCorrect() {
  console.log('Correct!');
}

export function printCongratulations(username) {
  console.log(`Congratulations ${username}!!!`);
}

export function printInvalidAnswer() {
  console.log('Invalid answer!');
}

export function checkValidity(condition) {
  if (condition) {
    printInvalidAnswer();
    return true;
  }
  return false;
}
