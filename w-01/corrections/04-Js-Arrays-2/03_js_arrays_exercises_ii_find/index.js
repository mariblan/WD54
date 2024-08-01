// You can work here or download the template!
// 1. Initialize an Array of Numbers:
// 1.1.Create an array called numbers containing the following values in order: 10, 20, 30, 40, 50.

let arrayNew = [10, 20, 30, 40, 50];

const findingNumbers = arrayNew.find((value) => value > 25);

// 2. Use the find Method to Locate a Number Greater Than 25:
// 2.1. Use the find method to locate the first number in numbers that is greater than 25.
// 2.2. Print the found number to the console.
console.log(`First number greater than 25: ${findingNumbers}`);

//3. Initialize an Array of Objects:
// 3.1. Create an array called people containing the following objects:
// { name: "Alice", age: 25 }
// { name: "Bob", age: 30 }
// { name: "Charlie", age: 35 }
// { name: "David", age: 40 }

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// 4. Use the find Method to Locate a Person Named "Charlie":
const foundPeople = people.find((item) => item.name === 'Charlie');
console.log(foundPeople);

if (4 === '4') {
  console.log('We are the same data type.');
}

let num = 0;

if (num) {
  console.log(num);
}


// 4.1. Use the find method to locate the first object in people where the name property is "Charlie".
// 4.2. Print the found object to the console.
