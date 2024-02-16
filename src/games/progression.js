import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What number is missing in the progression?',
  settings: {
    MIN_NUMBER_RANGE: 1,
    MAX_NUMBER_RANGE: 100,
  },
  setParams: () => {
    const progression = [generateFromRange(1, 100)];
    const progressionLength = generateFromRange(5, 15);
    const progressionStep = generateFromRange(1, 5);
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }
    const desiredItem = generateFromRange(0, progression.length - 1);
    let taskQuestion = '';
    for (let i = 0; i < progression.length; i += 1) {
      if (i === desiredItem) taskQuestion += ' ..';
      else taskQuestion = `${taskQuestion} ${progression[i]}`;
    }
    return [taskQuestion, String(progression[desiredItem])];
  },
};

export default function progressionGame() {
  playGame(game);
}
