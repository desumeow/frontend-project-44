import {
  getRandomInt, gameIntro, question, answerCheck, gameOutro,
} from '../src/index.js';

const arrayGenerator = (startNum, numOfNums, step) => {
  const result = [];
  let num = startNum;
  for (let i = 1; i <= numOfNums; i += 1) {
    num += step;
    result.push(num);
  }
  return result;
};

const hideNumInArray = (arr, numToHide) => {
  const resultArr = arr;
  const hidedNum = arr[numToHide - 1];
  resultArr[numToHide - 1] = '..';
  return [hidedNum, resultArr.join(' ')];
};

const progressionGame = () => {
  const name = gameIntro();
  let failCheck = true;

  console.log('What number is missing in the progression?');

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const startNum = getRandomInt(100);
    const numOfNums = getRandomInt(10, 5);
    const step = getRandomInt(5, 2);

    const numSeries = arrayGenerator(startNum, numOfNums, step);
    const numToHide = getRandomInt(numSeries.length);
    const [correctAnswer, quest] = hideNumInArray(numSeries, numToHide);
    const userAnswer = Number(question(`${quest}`));

    failCheck = answerCheck(userAnswer, correctAnswer, name);
  }

  return gameOutro(failCheck, name);
};

export default progressionGame;
