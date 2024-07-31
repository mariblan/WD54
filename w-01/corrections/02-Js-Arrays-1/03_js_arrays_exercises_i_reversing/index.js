// You can work here or download the template!
// Learn how to use the reverse and toReversed methods in JavaScript to manipulate arrays.
// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
// Reverse array1 in place and print the result

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];

// 1. Reverse the First Array in Place:
// 1.1.The reverse method reverses the array in place, which means the original array is modified.
// 1.2. For example, array1.reverse() will change array1 from [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1].
array1.reverse();
console.log(array1);

// 2.Create a Reversed Copy of the Second Array:
// 2.1 The toReversed method creates a new array that is the reversed version of the original array.
// 2.2 This method does not modify the original array.
// 2.3. For example, array2.toReversed() will return ['e', 'd', 'c', 'b', 'a'] while array2 remains ['a', 'b', 'c', 'd', 'e'].

let array2Reversed = array2.toReversed();


// 3.Print the Results:
// 3.1.Use console.log to print both the original and modified arrays to verify the results.

console.log('Original Array 2:', array2);
console.log('Original Array 2 Reversed:', array2Reversed);