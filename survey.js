const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q1 = `What's your name? Nicknames are also acceptable :)`;
const q2 = `What's an activity you like doing?`;
const q3 = `What do you listen to while doing that?`;
const q4 = `Which meal is your favourite (eg: dinner, brunch, etc.)`;
const q5 = `What's your favourite thing to eat for that meal?`;
const q6 = `Which sport is your absolute favourite?`;
const q7 = `What is your superpower? In a few words, tell us what you are amazing at!`;

const questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8];
let res = '';
const askingQuestions = i => {
  if (i < questionsArray.length) {
    rl.question(questionsArray[i], (answer) => {
      res += '\n' + answer;
      askingQuestions(i + 1); x
    });
  } else {
    console.log(`Thanks for answering these questions!: ${res}`);
    rl.close();
  }
};
askingQuestions(0);