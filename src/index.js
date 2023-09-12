import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const inputRequest = (inputDescription) => readlineSync.question(inputDescription);

const gameEngine = (task, gameDataGen) => {
  console.log('Welcome to the Brain Games!');
  const name = inputRequest('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let score = 0; score < numberOfRounds; score += 1) {
    const gameData = gameDataGen();
    console.log(`Question: ${gameData.quest}`);
    let userAnswer = inputRequest('Your answer: ');

    if (Number.isNaN(Number(userAnswer))) {
      userAnswer = userAnswer.toLowerCase().trim();
    } else userAnswer = Number(userAnswer);

    if (userAnswer === gameData.correct) {
      console.log('Correct!');
      if (score === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.correct}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default gameEngine;
