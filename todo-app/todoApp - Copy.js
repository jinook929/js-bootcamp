// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(p => {
//   if(p.textContent.includes('the')){
//     p.remove();
//   }
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = '===== A new paragraph from js file =====';
// document.querySelector('body').appendChild(newParagraph);

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
const body = document.querySelector('body');
const searchBox = document.querySelector('#searchBox');
const leftTodos = document.querySelector('#leftTodos');
const todosList = document.querySelector('#todosList');
const inputBox = document.querySelector('#inputBox');
const addTodoBtn = document.querySelector('#addTodoBtn');
let inputBoxValue;
let searchBoxValue;
let summary = document.createElement('h3');
let itemIndex;
let incompleteTodos = filterIncompleteTodos(todos); //todos.filter(todo => !todo.completed);

// Initial display function
function init() {
  summary.textContent = `[ Your have ${incompleteTodos.length} todos left ]`;
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
// Filter incomplete todos
function filterIncompleteTodos(todos) {
  return todos.filter(todo => !todo.completed);
}
// Remove all todo list
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
  incompleteTodos = filterIncompleteTodos(todos); //todos.filter(todo => !todo.completed); 
  summary.textContent = `[ Your have ${incompleteTodos.length} todos left ]`; 
  inputBox.value = '';
  document.querySelector('#searchBox').value = '';
}

// Initializing first display
init();

// Handle inputBox change
inputBox.addEventListener('keyup', (e) => { 
  inputBoxValue = e.target.value;
  if(e.which === 13) {
    removeContents();
    init();
    addNewTodo();
  };
});

// Handle addTodoButton click
addTodoBtn.addEventListener('click', () => { 
  if(inputBoxValue) {
    removeContents();
    init();
    addNewTodo();
  }
});

// Handle searchBox change
searchBox.addEventListener('keyup', (e) => { 
  removeContents();
  searchBoxValue = e.target.value.toLowerCase();
  let filterTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchBoxValue);
  })
  let filterIncompleteTodos = this.filterIncompleteTodos(filterTodos); //filterTodos.filter(todo => !todo.completed);
  let summary = document.createElement('h3');
  summary.textContent = `[ Your have ${filterIncompleteTodos.length} todos left ]`;
  leftTodos.appendChild(summary);
  todoList(filterTodos);
});