import getRandomInt from '../utils.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeDataGen = () => {
  const questNum = getRandomInt(100);
  const gameData = {
    quest: questNum,
    correctAnswer: isPrime(questNum) ? 'yes' : 'no',
  };

  return gameData;
};

gameEngine(rules, primeDataGen);

export default primeDataGen;
