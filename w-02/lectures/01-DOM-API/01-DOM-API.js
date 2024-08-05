// SELECTING ELEMENTS FROM THE HTML
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".title"));
// console.log(document.querySelector("#title"));
// console.log(document.querySelectorAll("button"));

// console.log(document.getElementById('title'));
// console.log(document.getElementsByClassName("list-item"))

const h1 = document.querySelector('#title');
const shoppingList = document.getElementById('shopping-list');
const form = document.querySelector('form');
const input = document.getElementById('input');
const button = document.getElementById('style');

// UPDATING ELEMENTS
h1.innerHTML = '<i>DOM updating<i>';
h1.textContent = 'Dom';
// STYLING ELEMENTS
// h1.style.color = "blue";
h1.classList.add('yellow');
h1.classList.remove('yellow');
console.log(h1);

// ADDING ELEMENTS

// REMOVING ELEMENTS

// shoppingList.removeChild(listItem);

// ADDING EVENTS


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const listItem = document.createElement('li');
  console.log(listItem);
  listItem.textContent = input.value;
  listItem.classList.add('list-item');
  console.log(listItem);
  shoppingList.appendChild(listItem);
  input.value = '';
});

button.addEventListener('click', (e) => {
  console.log(e.target.previousElementSibling);
  const p = e.target.previousElementSibling;
  p.style.color = "red";
});
