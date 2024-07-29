// You can work here or download the template!
// 1. Addition with Mixed Types
// 1.1. Create a variable that stores a number.
//1.2. Create a variable that stores a string representation of a number.
// 1.3. Add these two variables and print the result.

let numbervar = 10;
let string = '5';

let result = numbervar + string;
console.log(result);

// 2. Subtraction with Mixed Types
// 2.1. Using the same string and number variables, subtract the string from the number and print the result.
let differenceResult = numbervar - string;
console.log(differenceResult);

// 3. Multiplication with a String
// 3.1. Multiply the string variable by a new number and print the result.
let multiplyResult = numbervar * string;
console.log(multiplyResult);

// 4. Division by a String
// 4.1. Divide a number by the string variable and print the result.
let divisionResult = numbervar / string;
console.log(divisionResult);

// 5. Modulus Operation
// 5.1. Use modulus on two number variables and print the result.
// 5.2. Change one of the numbers to a string and perform the modulus operation again. Print the result.
let modResult = numbervar % 5;
console.log(`${numbervar}% 5 = ${modResult}`);

console.log(numbervar.toString());
let num2 = '4';
modResult = numbervar % num2;
console.log(`${numbervar}% ${num2} = ${modResult}`);

// 6. Perform a Series of Numeric Operations
// 6.1. Define several new numeric variables.
// 6.2. Perform and print the result of each operation: addition, subtraction, multiplication, division, and modulus.

let a = 20;
let b = 10;
let c = 25;

// Addition

let additionResul = a + b + c;
console.log(`Addition: ${additionResul}`);

// Substraction
console.log(a - b - c);

// Multiplication
console.log(a * b * c);

// Division
console.log(a/b/c);
//Modulus
console.log(a%b%c);