// You can work here or download the template!
// 1. Initialize an Array of Numbers:
//1.1. Create an array called numbers containing the following values in order: 1, 2, 3, 4, 5.

let array_init = [1,2,3,4,5];
let doubled_array = array_init.forEach(element => {console.log(element)
    
});

// 2.Use the forEach Method to Print Each Number:
// 2.1. Use the forEach method to iterate over numbers and print each number to the console.


// 3. Use the forEach Method to Calculate the Sum of the Numbers:
let sum = 0;
array_init.forEach((item) => (typeof item === "number")? (sum += item) : (sum += 0)); // check if item is ofType number (typeof item === "number")? (sum += item) : (sum += 0)))
console.log(sum);


// 3.1. Initialize a variable sum to 0.
// 3.2. Use the forEach method to iterate over numbers, adding each number to sum.
// 3.3.Print the final value of sum to the console.

// 4. Use the forEach Method to Create a New Array with Squared Values:
// 4.1. Create an empty array called squaredNumbers.
// 4.2. Use the forEach method to iterate over numbers, squaring each number and adding the squared value to squaredNumbers.
// 4.3. Print the squaredNumbers array to the console.

const squaredNumbers = [];
array_init.forEach((item, index) => (squaredNumbers[index] = item * item));
console.log(squaredNumbers);