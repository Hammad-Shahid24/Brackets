interface CalculatorOperations {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

// As i have specified the type annotations above in the interface, i can remove the type annotations from the function parameters here
const calculator: CalculatorOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
};

let a = 10;
let b = 5;

console.log(calculator.add(a, b)); // 15
console.log(calculator.subtract(a, b)); // 5
console.log(calculator.multiply(a, b)); // 50
console.log(calculator.divide(a, b)); // 2
