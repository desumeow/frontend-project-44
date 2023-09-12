import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeDataGen = () => {
  const gameData = {};
  gameData.quest = getRandomInt(100);
  gameData.correct = isPrime(gameData.quest) ? 'yes' : 'no';

  return gameData;
};

export { rules, primeDataGen };
