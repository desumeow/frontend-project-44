import getRandomInt from '../utils.js';
import startGameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getRoundData = () => {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

startGameEngine(rules, getRoundData);

export default getRoundData;
