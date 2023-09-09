import {
  gameIntro, question, answerCheck,
} from '../index.js';
import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  const limit = Math.round(Math.sqrt(num));

  if (num === 2 || num === 3) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (num < 9) return true;
  if (num % 3 === 0) return false;

  for (let i = 5; i < limit; i += 6) {
    if (num % i === 0) return false;
    if (num % (i + 2) === 0) return false;
  }

  return true;
};

const primeGame = () => {
  const name = gameIntro('Answer "yes" if given number is prime. Otherwise answer "no".');
  let failCheck = true;

  for (let score = 0; score < 3 && failCheck === true; score += 1) {
    const questNum = getRandomInt(100);

    const correctAnswer = isPrime(questNum) ? 'yes' : 'no';

    const userAnswer = question(`${questNum}`).toLowerCase().trim();

    failCheck = answerCheck(userAnswer, correctAnswer, name, score);
  }
};

export default primeGame;
