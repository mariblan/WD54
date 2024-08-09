// You can work here or download the template

// 1. Store data:
// From the boilerplate, get the contents of the input once the form is submitted.
// Make sure the input is not empty before saving!
// Store this value in localStorage as part of an array. Store the new value at the beginning of the array!
// Reset the form

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const browserWindow = document.defaultView;

let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
console.log(quotes);

const createItem = (li) => {
  const newItem = document.createElement('li');
  newItem.textContent = li;
  ul.insertBefore(newItem, ul.firstChild);
  newItem.scrollIntoView();
};

quotes.forEach((quote) => createItem(quote));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //   if(!input.value) return alert('Input empty!');

  if (input.value) {
    quotes.unshift(input.value.trim());
    localStorage.setItem('quotes', JSON.stringify(quotes));
    createItem(input.value.trim());

    input.value = '';
  } else {
    alert('Input empty!');
  }
});

// browserWindow.addEventListener('load', () => {});

// 2. Retrieve data:
// Every time you hit the "Submit" button, add a new list item to the empty ul. Make sure the new item is at the top!
// Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type load to the window itself!

// 3. Reload:
// Just because we can. Add an event to the reload button so it reloads the preview. Your store data should reload too!
// Tip: Verify the Storage section in the browser's developer tools to make sure the data is there!
