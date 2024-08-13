// You can work here or download the template
// https://jsonplaceholder.typicode.com/todos
// 1. Fetch Data: Write JavaScript to fetch todos from the JSON
// Placeholder API, we want the ToDos endpoint, you can find
// more about the API docs in here.
const todoList = document.getElementById('todo-list');

async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (response.ok) {
      const todos = await response.json();
      
      //   console.log(todos);
      //   const listItem = document.createElement('li');
      //   listItem = todos;
      return todos;
    }
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}
console.log(fetchTodos());

fetchTodos().then((todos) => {
  todos.slice(0, 10).map((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.title;
    li.id = todo.id;

    todoList.appendChild(li);
  });
});
// fetchTodos().forEach(element => {

// });;
// 2. Display Data: Populate the DOM with the fetched todos.
// Pay attention to the completed status of each task in the
// response and style it accordingly!

    
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                
                const listItem = document.createElement('li');
                listItem.textContent = todo.title;
                
                
                if (todo.completed) {
                    listItem.classList.add('line-through', 'text-gray-500');
                } else {
                    listItem.classList.add('text-gray-900');
                }

                
                todoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
