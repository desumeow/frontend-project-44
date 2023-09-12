import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const evenCheckDataGen = () => {
  const gameData = {};
  gameData.quest = getRandomInt(100);
  gameData.correct = isEven(gameData.quest) ? 'yes' : 'no';

  return gameData;
};

export { rules, evenCheckDataGen };
