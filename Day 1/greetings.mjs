//take user input for name and age and show a greeting message with the user's name and age
//i'll be using es6 syntax for this

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question("How old are you? ", (age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
    rl.close();
  });
});
