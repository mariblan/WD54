// Functions
const greeting = 'Hi';
// ES5
function sayHello() {
    console.log("Hello")
    return "Hello";
}

sayHello();
console.log(sayHello())

function greetings(greeting, name, question = 'How are you doing?') {
//   if (typeof greeting !== 'string') {
//   }
  return `${greeting}, ${name}. ${question}`;
}

greetings('HI', 'Jorge');
greetings('Hello', 'Tobias');
greetings(greeting, 'Sarah', 'Are you ok?');

//ES6
const newGreetings = () => {};
