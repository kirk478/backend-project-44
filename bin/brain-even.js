import readlineSync from 'readline-sync';
import userName from './brain-games.js';

const checkAnswer = (numb, answer) => {
  if (numb % 2 === 0 && answer === 'yes') {
    return true;
  }
  if (numb % 2 !== 0 && answer === 'no') {
    return true;
  }
  return false;
};
const getRandom = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameFlow = (attemt) => {
  if (attemt === 3) {
    return console.log(`Congratulations, ${userName}!`)
  }
  const newRandom = getRandom();
  console.log(`Question: ${newRandom}`);
  const userAnswer = getAnswer();
  const result = checkAnswer(newRandom, userAnswer);
  if (!result) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
    return console.log(`Let's try again, ${userName}!`)
  }
  return gameFlow(attemt + 1);
};
gameFlow(0);
