#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { generateFromRange } from '../src/service/numberGeneration.js';
import greetUser from '../src/cli.js';

const username = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  const number = generateFromRange(100, 1);

  const answer = readlineSync.question(`Question: ${number}\nYou answer: `);

  const isOdd = number % 2;

  if (answer === 'yes' && isOdd) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${username}!`);
    process.exit(0);
  }
  if (answer === 'yes' && !isOdd) console.log('Correct!');
  if (answer === 'no' && !isOdd) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${username}!`);
    process.exit(0);
  }
  if (answer === 'no' && isOdd) console.log('Correct!');
  if (answer !== 'yes' || answer !== 'no') {
    console.log('Incorrect answer!');
    process.exit(0);
  }
}

console.log(`Congratulation ${username}!!!`);
