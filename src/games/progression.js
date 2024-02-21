import { generateFromRange } from '../service/numberGeneration.js';
import playGame from '../game-common.js';

const task = 'What number is missing in the progression?';

const minNumberRange = 1;
const maxNumberRange = 100;
const minNumbersCount = 5;
const maxNumbersCount = 15;
const minStep = 1;
const maxStep = 5;

function setParams() {
  const progression = [generateFromRange(minNumberRange, maxNumberRange)];
  const progressionLength = generateFromRange(minNumbersCount, maxNumbersCount);
  const progressionStep = generateFromRange(minStep, maxStep);
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }
  const desiredItem = generateFromRange(0, progression.length - 1);
  let taskQuestion = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === desiredItem) taskQuestion += ' ..';
    else taskQuestion = `${taskQuestion} ${progression[i]}`;
  }
  return [taskQuestion.trim(), String(progression[desiredItem])];
}

/**
 * Запускает игру Прогрессия
 */
export default function progressionGame() {
  playGame(task, setParams);
}
