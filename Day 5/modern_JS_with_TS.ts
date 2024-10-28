// regular functions
function regularGreeting(name: string, age: number): string {
  return "Hello, my name is " + name + " and I am " + age + " years old.";
}

function regularSum(a: number, b: number): number {
  return a + b;
}

function RegularConcatenation(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

// arrow functions
const arrowGreeting = ({
  name,
  age,
}: {
  name: string;
  age: number;
}): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

const arrowSum = (a: number, b: number): number => a + b;

const arrowConcatenation = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2];
};

// example usage
const person = { name: "Hammad", age: 23 };
console.log(arrowGreeting(person));

const res = arrowSum(20, 30);
console.log(`Sum: ${res}`);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merge = arrowConcatenation(arr1, arr2);
console.log(`Concatenated array: ${merge}`);
