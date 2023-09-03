import {
  getRandomInt, gameIntro, question, answerCheck, gameOutro,
} from '../src/index.js';

const isEven = (num) => (num % 2 === 0);

const evenCheckGame = () => {
  const name = gameIntro();
  let failCheck = true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const questNum = getRandomInt(100);
    const correctAnswer = isEven(questNum) ? 'yes' : 'no';

    const userAnswer = question(questNum).toLowerCase().trim();

    failCheck = answerCheck(userAnswer, correctAnswer, name);
  }

  return gameOutro(failCheck, name);
};

export default evenCheckGame;
