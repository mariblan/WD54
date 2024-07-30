// You can work here or download the template!
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// 1. Use a for loop to count the total number of animals.

// 2. Use a while loop to count animals whose names have five or more letters. You can check the length of a string

// 3. Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'

let counter;

for (let i = 0; i < animals.length; i++) {
  // counter++;
  console.log(i + 1);
  counter = i + 1;
}

console.log(counter);

for (let animal in animals) {
    console.log(animals[animal]);
}


// map

animals.forEach((animal,index)=> console.log(`${index}: ${animal}`))
animals.map((animal,index)=> console.log(`${index}: ${animal}`))

