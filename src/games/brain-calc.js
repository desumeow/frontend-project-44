import {
  gameIntro, question, answerCheck,
} from '../index.js';
import { getRandomInt } from '../utils.js';

const calcGame = () => {
  const name = gameIntro('What is the result of the expression?');
  let failCheck = true;
  let userAnswer = 0;
  let correctAnswer = 0;

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const gameChoiceNum = getRandomInt(3, 0);
    const questNum1 = getRandomInt(100);
    const questNum2 = getRandomInt(100);

    if (gameChoiceNum < 1) {
      userAnswer = Number(question(`${questNum1} + ${questNum2}`));
      correctAnswer = questNum1 + questNum2;
    } else if (gameChoiceNum < 2) {
      userAnswer = Number(question(`${questNum1} - ${questNum2}`));
      correctAnswer = questNum1 - questNum2;
    } else {
      userAnswer = Number(question(`${questNum1} * ${questNum2}`));
      correctAnswer = questNum1 * questNum2;
    }

    failCheck = answerCheck(userAnswer, correctAnswer, name, score);
  }
};

export default calcGame;
