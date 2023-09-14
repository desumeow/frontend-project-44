import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (X, Y) => {
  let a = X;
  let b = Y;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gcdDataGen = () => {
  const questNum1 = getRandomInt(100);
  const questNum2 = getRandomInt(100);

  const gameData = {};
  gameData.quest = `${questNum1} ${questNum2}`;
  gameData.correctAnswer = findGCD(questNum1, questNum2);

  return gameData;
};

gameEngine(rules, gcdDataGen);

export default gcdDataGen;
