// You can work here or download the template!
// Learn how to use the splice and toSpliced methods in JavaScript to manipulate arrays.

// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result

// Array 2: Use toSpliced() method
const array2 = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays

// 1. Remove the element at index 2 and add 35 and 36:
// 1.1. The splice method can be used to remove elements, add elements, or both.
// 1.2. Syntax: array.splice(start, deleteCount, item1, item2, ...)

array1.splice(2, 1, 35, 36);
console.log('modified Array 1: ', array1);

// 2. Remove the element at index 1 and add b and c with toSpliced
// 2.1.The toSpliced method creates a new array with elements added, removed, or both, without modifying the original array.
// 2.3. Syntax: array.toSpliced(start, deleteCount, item1, item2, ...)

const copiedArrayForToSplice = array2.toSpliced(1, 1, 'b', 'c');
console.log(copiedArrayForToSplice);
console.log(array2);

// 3.Print the Results:
// 3.1.Use console.log to print both the original and modified arrays to verify the results.
