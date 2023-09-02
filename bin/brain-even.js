#!/usr/bin/env node
import {getRandomInt, gameIntro, question, answerCheck} from '../src/index.js';

const isEven = (num) => (num % 2 === 0)

const evenCheckGame = () => {
    const name = gameIntro()
    let failCheck = true
    
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    
    for (let score = 0; score < 3 && failCheck === true; score += 1) {
        const questionNum = getRandomInt(100);
        const correctAnswer = isEven(questionNum) ? 'yes' : 'no';

        const userAnswer = question(questionNum).toLocaleLowerCase().trim()

        failCheck = answerCheck(userAnswer, correctAnswer, name)
    }

    if (failCheck === true) {
        console.log(`Congratulations, ${name}!`)
        return true;
    } else return false
};

evenCheckGame()

export default evenCheckGame;