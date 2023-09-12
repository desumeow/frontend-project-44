import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const calculator = (operatorSelector, x, y) => {
  const operator = ['+', '-', '*'];
  const quest = `${x} ${operator[operatorSelector]} ${y}`;
  let correctAnswer;
  if (operator[operatorSelector] === '+') {
    correctAnswer = x + y;
  }
  if (operator[operatorSelector] === '-') {
    correctAnswer = x - y;
  }
  if (operator[operatorSelector] === '*') {
    correctAnswer = x * y;
  }
  return [quest, correctAnswer];
};

const calcDataGen = () => {
  const gameChoiceNum = getRandomInt(3, 0);
  const questNumX = getRandomInt(100);
  const questNumY = getRandomInt(100);

  const gameData = {};
  const [quest, correctAnswer] = calculator(gameChoiceNum, questNumX, questNumY);
  gameData.quest = quest;
  gameData.correct = correctAnswer;

  return gameData;
};

export { rules, calcDataGen };
