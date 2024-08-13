// You can work here or download the template
// 1. Store data:
// From the boilerplate, get the contents of the input once the form is submitted.
// Make sure the input is not empty before saving!
// For every user input, create an object with the following properties:
// id: check this out,since an UUID may not a valid CSS selector, we will remove the hyphens and prepend the prefix task-
// content: the user input
// Store this value in localStorage as part of an array. Store the new value at the beginning of the array!
// Reset the form
// 2. Retrieve data:
// Every time you hit the "Submit" button, add a new list item to the empty ul. Make sure the new item is at the top!
// Set the id of the object as an id to the list item element, it'll come in handy.
// Within the list item, add a red button that reads 'Delete'. Make it look cool! :D
// Attach an event to this button on click, for now, just log the id of the item!
// Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type load to the window itself!

// 3. Delete:
// Make sure that clicking on a given 'Delete' button, deletes the item from the DOM but also from the array in localStorage. Tip: use the .filter method

// 4. Reload:
// Just because we can. Add an event to the reload button so it reloads the preview. Your store data should reload too!

// 5. Bonus:
// Chances are your code for creating the list items on load and new creation is VERY similar, if not the same, try to abstract it into a reusable function called createListItem. This approach is called DRY
// Tip: Verify the Storage section in the browser's developer tools to make sure the data is there!

const input = document.getElementById('userInput');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList = document.getElementById('taskList');

function saveTask(task) {
  tasks.unshift(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createNewElement(li) {
  const newItem = document.createElement('li');
  newItem.className =
    'flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md';
  const span = document.createElement('span');
  span.className = 'flex-grow';
  span.textContent = li.content;

  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete';
  btnDelete.className = 'text-red-500 ml-2';
  btnDelete.id = li.id;
  btnDelete.addEventListener('click', (event) => {
    const updatedTask = tasks.filter(
      (element) => element.id !== event.target.id
    );
    console.log(updatedTask);
    localStorage.setItem('tasks', JSON.stringify(updatedTask));
    tasks = JSON.parse(localStorage.getItem('tasks'));
    taskList.removeChild(newItem);
  });
  newItem.appendChild(span);
  newItem.appendChild(btnDelete);
  taskList.insertBefore(newItem, taskList.firstChild);
}

tasks.forEach((element) => {
  createNewElement(element);
});

document
  .getElementById('taskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(input.value);
    if (!input.value) {
      alert('Enter a task!');
    }
    const taskId = 'task-' + crypto.randomUUID().replace(/-/g, '');
    const newTask = { id: taskId, content: input.value.trim() };
    saveTask(newTask);
    createNewElement(newTask);
  });
// Function to get tasks from localStorage
function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Function to add a task to the list
function addTaskToList(task) {
  const li = document.createElement('li');
  li.textContent = task.content;
  taskList.appendChild(li);
}

const reloadButton = document.getElementById('reload');
// Handle reload button click
reloadButton.addEventListener('click', () => {
  taskList.textContent = '';
  const tasks = getTasks();
  tasks.forEach((task) => createNewElement(task));
});

//INNERHTML APPROACH -> NOT VERY SECURE

// // Function to create a list item
// function createListItem(quote) {
//   const li = document.createElement('li');
//   li.id = quote.id;
//   li.className = 'p-2 border-b flex justify-between items-center';
//   li.innerHTML = `
//     ${quote.content}
//     <button class="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded delete-button">
//       Delete
//     </button>
//   `;

//   // Attach event listener to the delete button
//   li.querySelector('.delete-button').addEventListener('click', function() {
//     deleteQuote(quote.id);
//   });

//   return li;
// }

// // Function to display quotes
// function displayQuotes() {
//   const quoteList = document.getElementById('quoteList');
//   quoteList.innerHTML = ''; // Clear current list
//   const quotes = JSON.parse(localStorage.getItem('quotes')) || [];

//   quotes.forEach(quote => {
//     const li = createListItem(quote);
//     quoteList.prepend(li); // Add new list item to the top
//   });
// }

// // Function to delete a quote
// function deleteQuote(id) {
//   let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
//   quotes = quotes.filter(quote => quote.id !== id);
//   localStorage.setItem('quotes', JSON.stringify(quotes)); // Save updated array to localStorage

//   // Remove the item from the DOM
//   const li = document.getElementById(id);
//   if (li) {
//     li.remove();
//   }
// }
