// You can work here or download the template!
// 1. Initialize an Array of Numbers:
// 1.1 Create an array called numbers containing the following values in order: 1, 2, 3, 4, 5.
let numbers =[1, 2, 3, 4, 5];
// 2. Use the map Method to Create a New Array with Doubled Values:
// 2.1. Use the map method to create a new array called doubledNumbers where each value is double the corresponding value in numbers.
// 2.2. Print the doubledNumbers array to the console.
let doublednumber = numbers.map(number => {
    return number * 2 ;
})
console.log('double number:' , doublednumber);

// 3. Use the map Method to Create a New Array of Strings:
// 3.1. Use the map method to create a new array called stringNumbers where each value is the corresponding number in numbers converted to a string with the prefix "Number: ".
// 3.2. Print the stringNumbers array to the console.
let stringnumbers = numbers.map(number => {
    return `number: ${number}`
});
console.log("string numbers :", stringnumbers )

// 4. Use the map Method to Create a New Array of Objects:
// 4.1. Use the map method to create a new array called numberObjects where each value is an object with the properties original (the original number) and squared (the square of the number).
// 4.2. Print the numberObjects array to the console.

let numberObjects = numbers.map(number => ({
    original: number,
    squareNumber:number * number
}))

console.log("NumberObjects: ", numberObjects);