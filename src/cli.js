import readlineSync from 'readline-sync';

const getName = () => {
  const answer = readlineSync.question('May I have your name? ');
  return answer;
};

export default getName;
