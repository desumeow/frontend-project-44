import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateArray = (startNum, numOfNums, step) => {
  const result = [];
  for (let i = 1; i <= numOfNums; i += 1) {
    result.push(startNum + i * step);
  }
  return result;
};

const getRoundData = () => {
  const startNum = getRandomInt(100);
  const numOfNums = getRandomInt(10, 5);
  const step = getRandomInt(6, 2);

  const numSeries = generateArray(startNum, numOfNums, step);
  const numToHide = getRandomInt(numSeries.length) - 1;

  const correctAnswer = numSeries[numToHide];
  numSeries[numToHide] = '..';
  const question = numSeries.join(' ');

  return { question, correctAnswer };
};

startGameEngine(rules, getRoundData);

export default getRoundData;
