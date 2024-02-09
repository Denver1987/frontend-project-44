import readlineSync from 'readline-sync';

export function greetUser() {
  const name = readlineSync.question('What is you name? ');
  console.log(`Hello, ${name}!`);
}
