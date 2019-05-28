// Data Model ===============================================================
const todos = [
  {
    text: 'Order cat food',
    completed: false,
  },
  {
    text: 'Clean kitchen',
    completed: false,
  },
  {
    text: 'Buy good',
    completed: true,
  },
  {
    text: 'Do work',
    completed: false,
  },
  {
    text: 'Exercise',
    completed: true,
  },
]

// General variables
const searchBox = document.querySelector('#searchBox');
const incompleteOnly = document.querySelector('#incompleteOnly');
const todosList = document.querySelector('#todosList');
const leftTodos = document.querySelector('#leftTodos');
const newTodoForm = document.querySelector('#newTodoForm');
let searchBoxValue = '';
let filteredTodos = [];

const init = () => {
  // Clear fields
  todosList.innerHTML = '';
  leftTodos.innerHTML = '';
  // Filter todos
  if(!incompleteOnly.checked) {
    filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchBoxValue.toLowerCase()));
  } else {
    filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchBoxValue.toLowerCase()) && !todo.completed); 
  }
  // Render filtered todos
  let indexId;
  filteredTodos.forEach((todo, i) => {
    indexId = i + 1;
    let row = document.createElement('p');
    row.textContent = `${indexId}. ${todo.text} ${todo.completed ? '( v )' : '( . )'}`;
    todosList.appendChild(row)
  })
  // Render incomplete todos message
  let incompletedTodos = filteredTodos.filter(todo => !todo.completed)
  let summary = document.createElement('h3');
  summary.textContent = `- In this list, you have ${incompletedTodos.length} ${incompletedTodos.length > 1 ? 'todos' : 'todo'} left -`;
  leftTodos.appendChild(summary)
}

// Initialize display
init();

// Handle searchbox
searchBox.addEventListener('input', (e) => {
  searchBoxValue = e.target.value; 
  init();
})

// Handle checkbox
incompleteOnly.addEventListener('change', (e) => {
  init();
})

// Handle new todo form
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false,
  })
  init();
  e.target.elements.newTodo.value = '';
})

// // General variables ===============================================================
// const searchBox = document.querySelector('#searchBox');
// const incompleteOnly = document.querySelector('#incompleteOnly');
// const leftTodos = document.querySelector('#leftTodos');
// const todosList = document.querySelector('#todosList');
// const inputBox = document.querySelector('#inputBox');
// const newTodoForm = document.querySelector('#newTodoForm');
// // const mainDisplay = document.querySelector('#mainDisplay');
// // const addTodoBtn = document.querySelector('#addTodoBtn');
// const filters = {
//   searchBoxValue: '',
// };
// let inputBoxValue;
// let summary = document.createElement('h3');
// let itemIndex;
// let incompleteTodos;

// // Functions ===============================================================
// // Initial display function
// function init(todos) {
//   incompleteTodos = todos.filter(todo => !todo.completed)
//   summary.textContent = `[ Your have ${incompleteTodos.length} todos left to complete ]`;
//   leftTodos.appendChild(summary); console.log(incompleteOnly.checked)
//   // if(incompleteOnly.value) {todos = incompleteTodos}
//   todoList(todos);
// }
// // Render appropriate todo list
// function todoList(todos) {
//   todos.forEach((todo, i) => {
//     let todoElement = document.createElement('p');
//     itemIndex = i + 1;
//     todoElement.textContent = `${itemIndex}. ${todo.text} (${todo.completed ? 'v' : ' '})`;
//     todosList.appendChild(todoElement);
//   });
// }
// // Remove main contents
// function removeContents() {
//   document.querySelector('h3').remove();
//   todosList.innerHTML = '';
// }
// // Add new todo
// function addNewTodo() { 
//   itemIndex++; 
//   todos.push({
//     text: inputBoxValue,
//     completed: false
//   })
//   let newTodo = document.createElement('p');
//   newTodo.textContent = `${itemIndex}. ${todos[itemIndex-1].text} (${todos[itemIndex-1].completed ? 'v' : ' '})`;
//   todosList.appendChild(newTodo); 
//   incompleteTodos = todos.filter(todo => !todo.completed); 
//   summary.textContent = `[ Your have ${incompleteTodos.length} todos left to complete ]`; 
//   inputBox.value = '';
//   document.querySelector('#searchBox').value = '';
// }

// // Render ===============================================================
// // Initializing first display
// init(todos);

// // Handle searchBox change
// searchBox.addEventListener('keyup', (e) => {
//   filters.searchBoxValue = e.target.value.toLowerCase();
//   let filterTodos = todos.filter(todo => {
//     return todo.text.toLowerCase().includes(filters.searchBoxValue);
//   })
//   incompleteTodos = filterTodos.filter(todo => !todo.completed); 
//   removeContents();
//   init(filterTodos);
// });

// // Handle submit
// newTodoForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   inputBoxValue = inputBox.value;
//   // inputBoxValue = e.target.elements.newTodo.value;
//   if(inputBoxValue) {
//     removeContents();
//     init(todos);
//     addNewTodo();
//   }
// })

// incompleteOnly.addEventListener('change', (e) => {
//   removeContents();
//   init(todos);
// })

// // // Handle inputBox change
// // inputBox.addEventListener('keyup', (e) => { 
// //   inputBoxValue = e.target.value;
// //   if(e.which === 13) {
// //     removeContents();
// //     init(todos);
// //     addNewTodo();
// //   };
// // });

// // // Handle addTodoButton click
// // addTodoBtn.addEventListener('click', () => { 
// //   if(inputBoxValue) {
// //     removeContents();
// //     init(todos);
// //     addNewTodo();
// //   }
// // });
