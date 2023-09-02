import readlineSync from 'readline-sync';
import nameRequest from '../src/cli.js';

const getRandomInt = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};


const gameIntro = () => {
    console.log('Welcome to the Brain Games!')
    const name = nameRequest()

    return name
};

const question = (quest) => {
    console.log(`Question: ${quest}`)

    return readlineSync.question(`Your answer: `);
}

const answerCheck = (userAnswer, correctAnswer, name) => {
    if (userAnswer == correctAnswer) {
        console.log(`Correct!`)
        return true
    } 
    if (userAnswer != correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
}

export {getRandomInt, gameIntro, question, answerCheck}