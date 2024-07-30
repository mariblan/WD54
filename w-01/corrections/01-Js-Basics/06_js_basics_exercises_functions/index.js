// You can work here or download the template!

// PART I
// 1. Declare a function with no parameters that outputs something to the console
// 1.1. Declare a function named greet that logs "Hello, World!" to the console.
// 1.2. Call the function.

function greet(greeting) {
  // console.log(greeting);
  return greeting;
}
console.log(greet('Hello world!'));

// 2. Declare a function with one parameter that returns something.
// 2.1. Declare a function named square that takes a number as a parameter and returns its square.
// 2.2. Call the function with the argument 5, store the result in a variable, and output it to the console.

function square(num) {
  return num * num;
}
let result = square(5);
console.log(result);

// 3. Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.
// 3.1. Declare a function named getDayName that takes a number (0-6) as a parameter and returns the name of the day.
// 3.2. Use a switch statement to determine the day name.
// 3.3. Call the function with the argument 3, store the result in a variable, and output it to the console.

function trial() {
  if (day === 0) {
    return 'Monday';
  } else {
    return 'Saturday';
  }
}

function getDayName(num) {
  switch (num) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
  }
}

let weekday;

let num = 2;

switch (num) {
  case 1:
    weekday = 'Monday';
    break;
  case 2:
    weekday = 'Tuesday';
    break;
  case 3:
    weekday = 'Wednesday';
    break;
  case 4:
    weekday = 'Thursday';
    break;
  case 5:
    weekday = 'Friday';
    break;
  case 6:
    weekday = 'Saturday';
    break;
  case 7:
    weekday = 'Sunday';
    break;
}

console.log(weekday);

console.log(getDayName(3));

// PART II
// 1. Repeat the above steps using function expressions assigned to variables.
// 1.1. Rewrite the greet function as a function expression assigned to a variable named greetExpression.
// 1.2. Rewrite the square function as a function expression assigned to a variable named squareExpression.
// 1.3. Rewrite the getDayName function as a function expression assigned to a variable named getDayNameExpression.

// DISCUSSION:
// Discuss the difference between function declarations and function expressions.

let resultOfSquare = function (num) {
  return num * num;
};

function greetings(greeting) {
  return (name) => {
    return `${greeting}, ${name}`;
  };
}

console.log(greetings('Hi')('Rabia'));
console.log(greetings('Hi')('Rabia'));

const hiGreet = greetings('Hi');
console.log(hiGreet('Tommy'));
console.log(hiGreet('Bath'));

console.log(resultOfSquare(5));

//   let result = square(5);
//   console.log(result);
