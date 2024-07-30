const numbers = [1, 2, 3];
const strings = ['Jorge', 'Sarah'];
const boleans = [true, false];

// let numbers2 = [2, 3, 6];


// numbers2 = numbers2.map()


console.log(numbers.length);
console.log(numbers.join());

console.log(strings.push('Tobias'));
console.log(strings);

console.log(boleans.shift());
console.log(boleans);

// foreach and map

strings.forEach((string) => {
  console.log(`Hi ${string}`);
});

strings.map((string) => {
  console.log(`Hi ${string}`);
});

// filter

const filteredArray = strings.filter((string) => {
  if (string === 'Sarah') {
    return string;
  }
});

console.log(filteredArray);
