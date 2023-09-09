import readlineSync from 'readline-sync';

const inputRequest = (inputDescription) => readlineSync.question(inputDescription);

const getRandomInt = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);

export { inputRequest, getRandomInt };
