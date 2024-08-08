// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// 1. HTML Structure:
// Use the provided HTML structure which includes three buttons and an empty ul element.
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

addItemBtn.addEventListener('click', () => {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  const listItem = document.createElement('li');
  listItem.textContent = randomTask;
  itemList.appendChild(listItem);
  // Scroll to the last task
  itemList.scrollTop = itemList.scrollHeight;
});

// 2. JavaScript Tasks:
// 2.1. Attach an event to the first button to create a new li in the ul with a random task from the provided array.
// Make sure you scroll to the last task so the last one is always visible!
// 2.2. Attach an event to the second button to display an alert with a custom message.
// 2.3. Attach an event to the third button to output a custom message to the console.
const showAlert = () => {
  alert('This is a custom alert message!');
};
const logToConsole = () => {
  console.log('This is a custom console message!');
};
alertBtn.addEventListener('click', showAlert);
consoleBtn.addEventListener('click', logToConsole);

