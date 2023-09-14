import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const arrayGenerator = (startNum, numOfNums, step) => {
  const result = [];
  for (let i = 1; i <= numOfNums; i += 1) {
    result.push(startNum + i * step);
  }
  return result;
};

const progressionDataGen = () => {
  const startNum = getRandomInt(100);
  const numOfNums = getRandomInt(10, 5);
  const step = getRandomInt(6, 2);

  const numSeries = arrayGenerator(startNum, numOfNums, step);
  const numToHide = getRandomInt(numSeries.length) - 1;

  const gameData = {};
  gameData.correctAnswer = numSeries[numToHide];
  numSeries[numToHide] = '..';
  gameData.quest = numSeries.join(' ');

  return gameData;
};

gameEngine(rules, progressionDataGen);

export default progressionDataGen;
