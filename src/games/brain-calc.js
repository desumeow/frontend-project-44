import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';

const calculator = (operator, x, y) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = x + y;
      break;
    case '-':
      correctAnswer = x - y;
      break;
    case '*':
      correctAnswer = x * y;
      break;
    default:
      correctAnswer = undefined;
  }
  return correctAnswer;
};

const calcDataGen = () => {
  const operatorSelector = getRandomInt(3, 0);
  const questNumX = getRandomInt(100);
  const questNumY = getRandomInt(100);
  const operator = ['+', '-', '*'];

  const gameData = {};
  gameData.quest = `${questNumX} ${operator[operatorSelector]} ${questNumY}`;
  gameData.correctAnswer = calculator(operator[operatorSelector], questNumX, questNumY);

  return gameData;
};

gameEngine(rules, calcDataGen);

export default calcDataGen;
