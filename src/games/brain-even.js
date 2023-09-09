import {
  gameIntro, question, answerCheck,
} from '../index.js';
import { getRandomInt } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const evenCheckGame = () => {
  const name = gameIntro('Answer "yes" if the number is even, otherwise answer "no".');
  let failCheck = true;

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const questNum = getRandomInt(100);
    const correctAnswer = isEven(questNum) ? 'yes' : 'no';

    const userAnswer = question(questNum).toLowerCase().trim();

    failCheck = answerCheck(userAnswer, correctAnswer, name, score);
  }
};

export default evenCheckGame;
