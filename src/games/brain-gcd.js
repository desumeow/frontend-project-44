import {
  gameIntro, question, answerCheck,
} from '../index.js';
import { getRandomInt } from '../utils.js';

const findGCD = (X, Y) => {
  for (let i = Math.min(X, Y); i > 1; i -= 1) {
    if (X % i === 0 && Y % i === 0) {
      return i;
    }
  }
  return 1;
};

const gcdGame = () => {
  const name = gameIntro('Find the greatest common divisor of given numbers.');
  let failCheck = true;

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const questNum1 = getRandomInt(100);
    const questNum2 = getRandomInt(100);
    const correctAnswer = findGCD(questNum1, questNum2);

    const userAnswer = Number(question(`${questNum1} ${questNum2}`));

    failCheck = answerCheck(userAnswer, correctAnswer, name, score);
  }
};

export default gcdGame;
