import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What number is missing in the progression?',
  setParams: () => {
    const progression = [generateFromRange(99, 1)];
    const progressionLength = generateFromRange(5, 5);
    const progressionStep = generateFromRange(4, 1);
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }
    const desiredItem = generateFromRange(progression.length);
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
