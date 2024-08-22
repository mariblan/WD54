function greet() {
  console.log('Hello, World!');
}

setTimeout(greet, 2000); // Executes the greet function after 2 seconds

// this will never get executed because the next line cancels it before it can be fired!
const timeoutID = setTimeout(greet, 2000);

// To cancel the timeout
clearTimeout(timeoutID);
