import { generateFromRange } from '../service/numberGeneration.js';
import playGame from './game-common.js';

const game = {
  task: 'What number is missing in the progression?',
  minNumberRange: 1,
  maxNumberRange: 100,
  minNumbersCount: 5,
  maxNumbersCount: 15,
  minStep: 1,
  maxStep: 5,
  setParams() {
    const progression = [generateFromRange(game.minNumberRange, game.maxNumberRange)];
    const progressionLength = generateFromRange(game.minNumbersCount, game.maxNumbersCount);
    const progressionStep = generateFromRange(game.minStep, game.maxStep);
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

/**
 * Запускает игру Прогрессия
 */
export default function progressionGame() {
  playGame(game);
}
