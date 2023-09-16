import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const rules = 'What is the result of the expression?';

const getCalculation = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator state: '${operator}'!`);
  }
};

const getRoundData = () => {
  const operatorSelector = getRandomInt(3, 0);
  const questNumX = getRandomInt(100);
  const questNumY = getRandomInt(100);
  const operator = ['+', '-', '*'];

  const question = `${questNumX} ${operator[operatorSelector]} ${questNumY}`;
  const correctAnswer = getCalculation(operator[operatorSelector], questNumX, questNumY);

  return { question, correctAnswer };
};

startGameEngine(rules, getRoundData);

export default getRoundData;
