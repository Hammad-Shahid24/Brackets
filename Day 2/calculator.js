var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    },
};
var a = 10;
var b = 0;
console.log(calculator.add(a, b)); // 15
console.log(calculator.subtract(a, b)); // 5
console.log(calculator.multiply(a, b)); // 50
console.log(calculator.divide(a, b)); // 2
