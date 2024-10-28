var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// regular functions
function regularGreeting(name, age) {
    return "Hello, my name is " + name + " and I am " + age + " years old.";
}
function regularSum(a, b) {
    return a + b;
}
function RegularConcatenation(arr1, arr2) {
    return arr1.concat(arr2);
}
// arrow functions
var arrowGreeting = function (_a) {
    var name = _a.name, age = _a.age;
    return "Hello, my name is ".concat(name, " and I am ").concat(age, " years old.");
};
var arrowSum = function (a, b) { return a + b; };
var arrowConcatenation = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};
// example usage
var person = { name: "Hammad", age: 23 };
console.log(arrowGreeting(person));
var res = arrowSum(20, 30);
console.log("Sum: ".concat(res));
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merge = arrowConcatenation(arr1, arr2);
console.log("Concatenated array: ".concat(merge));
