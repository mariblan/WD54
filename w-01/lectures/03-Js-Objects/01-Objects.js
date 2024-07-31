const person1 = {
  firstName: 'Jorge',
  lastName: 'Serrano',
  age: 40,
  hobbies: ['singing', 'playing tennis'],
  pet: {
    name: 'Tommy',
    age: 3,
    breed: 'European common cat',
  },
  active: true,
};

// Dot notation

console.log(person1);
console.log(person1.firstName);
console.log(person1.hobbies);
console.log(person1.hobbies[0]);
console.log(person1.pet.name);

person1.age = 45;
console.log(person1.age);

// destructuralization
const {firstName, lastName, pet} = person1;

console.log(firstName)


//
let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

const randomNumber = Math.floor(Math.random() * (10 - 5) + 5);
const randomNumber2 = Math.floor(Math.random() * 5);
// console.log(randomNumber);
// console.log(randomNumber2);
const maxNumber = Math.max(5, 2, 10);
// console.log(maxNumber);
