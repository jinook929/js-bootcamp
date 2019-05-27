// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(p => {
//   if(p.textContent.includes('the')){
//     p.remove();
//   }
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = '===== A new paragraph from js file =====';
// document.querySelector('body').appendChild(newParagraph);

// Data Model ============================================================================
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

// General variables ===============================================================
const searchBox = document.querySelector('#searchBox');
const leftTodos = document.querySelector('#leftTodos');
const todosList = document.querySelector('#todosList');
const inputBox = document.querySelector('#inputBox');
const newTodoForm = document.querySelector('#newTodoForm');
// const mainDisplay = document.querySelector('#mainDisplay');
// const addTodoBtn = document.querySelector('#addTodoBtn');
const filters = {
  searchBoxValue: '',
};
let inputBoxValue;
let summary = document.createElement('h3');
let itemIndex;
let incompleteTodos;

// Functions ===============================================================
// Initial display function
function init(todos) {
  incompleteTodos = todos.filter(todo => !todo.completed)
  summary.textContent = `[ Your have ${incompleteTodos.length} todos left to complete ]`;
  leftTodos.appendChild(summary);
  todoList(todos);
}
// Render appropriate todo list
function todoList(todos) {
  todos.forEach((todo, i) => {
    let todoElement = document.createElement('p');
    itemIndex = i + 1;
    todoElement.textContent = `${itemIndex}. ${todo.text} (${todo.completed ? 'v' : ' '})`;
    todosList.appendChild(todoElement);
  });
}
// Remove main contents
function removeContents() {
  document.querySelector('h3').remove();
  todosList.innerHTML = '';
}
// Add new todo
function addNewTodo() { 
  itemIndex++; 
  todos.push({
    text: inputBoxValue,
    completed: false
  })
  let newTodo = document.createElement('p');
  newTodo.textContent = `${itemIndex}. ${todos[itemIndex-1].text} (${todos[itemIndex-1].completed ? 'v' : ' '})`;
  todosList.appendChild(newTodo); 
  incompleteTodos = todos.filter(todo => !todo.completed); 
  summary.textContent = `[ Your have ${incompleteTodos.length} todos left to complete ]`; 
  inputBox.value = '';
  document.querySelector('#searchBox').value = '';
}

// Render ===============================================================
// Initializing first display
init(todos);

// Handle searchBox change
searchBox.addEventListener('keyup', (e) => {
  filters.searchBoxValue = e.target.value.toLowerCase();
  let filterTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filters.searchBoxValue);
  })
  incompleteTodos = filterTodos.filter(todo => !todo.completed); 
  removeContents();
  init(filterTodos);
});

// Handle submit
newTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  inputBoxValue = inputBox.value;
  // inputBoxValue = e.target.elements.newTodo.value;
  if(inputBoxValue) {
    removeContents();
    init(todos);
    addNewTodo();
  }
})

// // Handle inputBox change
// inputBox.addEventListener('keyup', (e) => { 
//   inputBoxValue = e.target.value;
//   if(e.which === 13) {
//     removeContents();
//     init(todos);
//     addNewTodo();
//   };
// });

// // Handle addTodoButton click
// addTodoBtn.addEventListener('click', () => { 
//   if(inputBoxValue) {
//     removeContents();
//     init(todos);
//     addNewTodo();
//   }
// });
