import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const inputRequest = (inputDescription) => readlineSync.question(inputDescription);

const startGameEngine = (task, gameDataGen) => {
  console.log('Welcome to the Brain Games!');
  const name = inputRequest('May I have your name? ');
  console.log(`Hello, ${name}! \n${task}`);

  for (let score = 1; score <= numberOfRounds; score += 1) {
    const { question, correctAnswer } = gameDataGen();
    console.log(`Question: ${question}`);
    let userAnswer = inputRequest('Your answer: ');

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameEngine;
