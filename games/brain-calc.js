import {
  getRandomInt, gameIntro, question, answerCheck, gameOutro,
} from '../src/index.js';

const calcGame = () => {
  const name = gameIntro();
  let failCheck = true;
  let userAnswer = 0;
  let correctAnswer = 0;

  console.log('What is the result of the expression?');

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const gameChoiceNum = getRandomInt(3);
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

    failCheck = answerCheck(userAnswer, correctAnswer, name);
  }
  return gameOutro(failCheck, name);
};

export default calcGame;
