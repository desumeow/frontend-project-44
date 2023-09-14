import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const evenCheckDataGen = () => {
  const questNum = getRandomInt(100);
  const gameData = {
    quest: questNum,
    correctAnswer: isEven(questNum) ? 'yes' : 'no',
  };

  return gameData;
};

gameEngine(rules, evenCheckDataGen);

export default evenCheckDataGen;
