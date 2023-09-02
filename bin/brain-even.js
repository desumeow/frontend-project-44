#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameRequest from '../src/cli.js'


const answerRequest = () => {
    const answer = readlineSync.question(`Your answer: `);
    const answerNormalized = answer.toLowerCase().trim();

    return answerNormalized;
};

const isEven = (num) => (num % 2 === 0)

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const evenCheckGame = () => {
    let score = 0;

    console.log('Welcome to the Brain Games!')
    const name = nameRequest()

    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    
    while (score < 3) {
        const questionNum = getRandomInt(100);
        const correctAnswer = isEven(questionNum) ? 'yes' : 'no';

        console.log(`Question: ${questionNum}`);
        const userAnswer = answerRequest();

        if (userAnswer === correctAnswer) {
            console.log(`Correct!`)
            score += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }

    if (score === 3) {
        console.log(`Congratulations, ${name}!`)
        return true;
    } else return false;
};

evenCheckGame()

export default evenCheckGame;