import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

// Prompt the user to input a temperature in Celsius
rl.question("Enter temperature in Celsius: ", (celsius) => {
  const fahrenheit = celsiusToFahrenheit(parseFloat(celsius));
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  rl.close();
});
