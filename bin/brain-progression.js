#!/usr/bin/env node
import {getRandomInt, gameIntro, question, answerCheck} from '../src/index.js';

const arrayGenerator = (startNum, numOfNums, step) => {
    let result = []
    let num = startNum
    for (let i = 1; i <= 10; i += 1) {
        num += step
        result.push(num);
    }
    return result
}

const hideNumInArray = (arr, numToHide) => {
    const hidedNum = arr[numToHide - 1]
    arr[numToHide - 1] = '..'
    return [hidedNum, arr.join(' ')]
}

const progressionGame = () => {
    const name = gameIntro()
    let failCheck = true

    for (let score = 0; score < 3 && failCheck === true; score += 1) {
        const startNum = getRandomInt(100)
        const numOfNums = getRandomInt(10, 5)
        const step = getRandomInt(5, 2)

        const numSeries = arrayGenerator(startNum, numOfNums, step)

        const numToHide = getRandomInt(numSeries.length)

        const [correctAnswer, quest] = hideNumInArray(numSeries, numToHide)

        const userAnswer = question(`${quest}`)

        failCheck = answerCheck(userAnswer, correctAnswer, name)
    }

    if (failCheck === true) {
        console.log(`Congratulations, ${name}!`)
        return true;
    } else return false
}

progressionGame()

export default progressionGame