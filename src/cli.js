import readlineSync from 'readline-sync';

const nameRequest = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default nameRequest;
