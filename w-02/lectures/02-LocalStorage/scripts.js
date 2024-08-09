// setItem

localStorage.setItem('token', 3);
localStorage.setItem('boolean', true);
localStorage.setItem('string', 'Hi');

const arrayInitial = [
    {
      name: 'Maria',
    },
    {
      name: 'Jorge',
    },
    {
      name: 'Sarah',
    },
  ]; 

localStorage.setItem(
  'array',
  JSON.stringify(arrayInitial)
);

const newValue = arrayInitial.filter(item =>item.name !== "Maria");
console.log(newValue)

localStorage.setItem(
    'array',
    JSON.stringify(newValue)
  );
// getItem
const token = localStorage.getItem('token');
console.log(token);

const arrayOfObjects = JSON.parse(localStorage.getItem('array'));
// console.log(arrayOfObjects);

// removeItem
localStorage.removeItem('string');

// clear

// localStorage.clear();
