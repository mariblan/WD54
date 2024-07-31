// You can work here or download the template!
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];


// Initial function


// 1. Simple Array Destructuring

// 1.1. Extract the first two elements from the fruits array and store them in variables fruit1 and fruit2.
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// 2. Skipping Elements in Array Destructuring

// 2.1. Extract the first and third elements from the fruits array, skipping the second element.
const [fruit_1, ,fruit3] = fruits;

console.log(fruit_1, fruit3)

// 3.Simple Object Destructuring
// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
// 3.1. Extract the name and age properties from the person object.
const {name , age } = person;
console.log(name);
console.log(age);

// 4. Nested Object Destructuring

// 4.1. Extract the city from the address property of the person object.
const {address: {city}} = person;
console.log(city);

// 5.Destructuring in Function Parameters

function displayPerson1(prop){
  const {name, age} = prop
  console.log(`Name: ${name}, Age: ${age}`);
}
function displayPerson2({name, age}){
  console.log(`Name: ${name}, Age: ${age}`);
}
displayPerson1(person);
displayPerson2(person);
// 5.1. displayPerson is function that takes a person object and logs the name and age properties using dot notation. Modify the function to destructure the name and age properties directly in the parameters.

// Modify the function to use destructuring in the parameters
