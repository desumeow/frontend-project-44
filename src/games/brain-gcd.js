import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  let a = x;
  let b = y;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getRoundData = () => {
  const questNum1 = getRandomInt(100);
  const questNum2 = getRandomInt(100);

  const question = `${questNum1} ${questNum2}`;
  const correctAnswer = getGCD(questNum1, questNum2);

  return { question, correctAnswer };
};

startGameEngine(rules, getRoundData);

export default getRoundData;
