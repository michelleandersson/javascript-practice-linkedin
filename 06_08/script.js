/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let result = a + b;
result = a - b;
result = a / b;
result = a * b;
result = (a * b) / 2;
result = (a * b) / c;
//modular is useful when testing for prime numbers
result = a % b;
// '**' means to the power of
result = a ** b;

console.log("Result: ", result);

//++ adds one to the number
//if ++a -> 6
//if a++ -> 5, but next time we use a, it is already incremented to 6
