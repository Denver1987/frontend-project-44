import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What number is missing in the progression?',
  MIN_NUMBER_RANGE: 1,
  MAX_NUMBER_RANGE: 100,
  MIN_NUMBERS_COUNT: 5,
  MAX_NUMBERS_COUNT: 15,
  MIN_STEP: 1,
  MAX_STEP: 5,
  setParams() {
    const progression = [generateFromRange(this.MIN_NUMBER_RANGE, this.MAX_NUMBER_RANGE)];
    const progressionLength = generateFromRange(this.MIN_NUMBERS_COUNT, this.MAX_NUMBERS_COUNT);
    const progressionStep = generateFromRange(this.MIN_STEP, this.MAX_STEP);
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
  },
};

export default function progressionGame() {
  playGame(game);
}
