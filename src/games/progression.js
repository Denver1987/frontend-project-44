import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What number is missing in the progression?',
  setParams: () => {
    const progression = [generateFromRange(100, 1)];
    const progressionLength = generateFromRange(6, 5);
    const progressionStep = generateFromRange(5, 0);
    console.log(progressionLength);
    console.log(progression);
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }
    console.log(progression);
  },
};

export default function progressionGame() {
  // playGame(game);
  game.setParams();
}
