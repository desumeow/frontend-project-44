import { inputRequest, getRandomInt } from './utils.js';

const gameIntro = (questDescription) => {
  console.log('Welcome to the Brain Games!');

  const name = inputRequest('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(questDescription);

  return name;
};

const question = (quest) => {
  console.log(`Question: ${quest}`);

  return inputRequest('Your answer: ');
};

const answerCheck = (userAnswer, correctAnswer, name, score) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (score === 2) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    return true;
  }
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  return false;
};

export {
  getRandomInt, gameIntro, question, answerCheck,
};
