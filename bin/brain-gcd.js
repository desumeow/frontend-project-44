#!/usr/bin/env node
import {getRandomInt, gameIntro, question, answerCheck} from '../src/index.js';

const findGCD = (X, Y) => {
    for (let i = Math.min(X, Y); i > 1; i -= 1) {
        if (X % i === 0 && Y % i === 0) {
            return i
        }
    }
    return 1
}

const gcdGame = () => {
    const name = gameIntro()
    let failCheck = true

    for (let score = 0; score < 3 && failCheck === true; score += 1) {
        const questNum1 = getRandomInt(100)
        const questNum2 = getRandomInt(100)
        const correctAnswer = findGCD(questNum1, questNum2)

        const userAnswer = question(`${questNum1} ${questNum2}`)

        failCheck = answerCheck(userAnswer, correctAnswer, name)
    }
    
    if (failCheck === true) {
        console.log(`Congratulations, ${name}!`)
        return true;
    } else return false
};

gcdGame()

export default gcdGame