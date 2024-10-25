// program for calculating the area of a circle using variables

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the radius of the circle in meters: ", (radius) => {
  const area = Math.PI * radius * radius;
  console.log(`The area of the circle is ${area.toFixed(2)} square meters`);
  rl.close();
});
