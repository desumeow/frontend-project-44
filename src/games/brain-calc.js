import getRandomInt from '../utils.js';

const rules = 'What is the result of the expression?';

const calculator = (operatorSelector, questNumX, questNumY) => {
  let quest;
  let correctAnswer;
  if (operatorSelector < 1) {
    quest = `${questNumX} + ${questNumY}`;
    correctAnswer = questNumX + questNumY;
    return [quest, correctAnswer];
  }
  if (operatorSelector < 2) {
    quest = `${questNumX} - ${questNumY}`;
    correctAnswer = questNumX - questNumY;
    return [quest, correctAnswer];
  }
  quest = `${questNumX} * ${questNumY}`;
  correctAnswer = questNumX * questNumY;
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
