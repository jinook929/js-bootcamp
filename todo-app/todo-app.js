const todoItems = getSavedTodos();
// if(localStorage.getItem('todoItems') !== null) {
//   todoItems = JSON.parse(localStorage.getItem('todoItems'));
// }

const todoDisplay = document.querySelector('#todos');
const filters = {
  searchText: '',
  hideCompleted: false
}

// const renderTodos = (todos, filters) => {
//   const filteredTodos = todos.filter(todo => {
//     const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText);
//     const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

//     return searchTextMatch && hideCompletedMatch;
//   })

//   todoDisplay.innerHTML = '';

//   let incompleteTodos = filteredTodos.filter(todo => {
//     return !todo.completed
//   });

//   let summary = document.createElement('h2');
//   summary.textContent = `You have ${incompleteTodos.length} todos left`;
//   todoDisplay.appendChild(summary)

//   filteredTodos.forEach(todo => {
//     generateTodoDOM(todo);
//     // let p = document.createElement('p');
//     // p.textContent = todo.text;
//     // todoDisplay.appendChild(p);
//   });
// }

renderTodos(todoItems, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todoItems, filters);
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todoItems, filters);
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  todoItems.push({
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos(todoItems);
  // localStorage.setItem('todoItems', JSON.stringify(todoItems));
  renderTodos(todoItems, filters);
  e.target.elements.text.value = '';
})

// *************************************

// todoItems.push({
//   text: 'Order cat food',
//   completed: false
// })
// localStorage.setItem('todoItems', JSON.stringify(todoItems)); //console.log(localStorage.getItem('todoItems'))
// todoItems = JSON.parse(localStorage.getItem('todoItems'))

// todoItems.push({
//   text: 'Clean kitchen',
//   completed: true
// })
// localStorage.setItem('todoItems', JSON.stringify(todoItems));
// todoItems = JSON.parse(localStorage.getItem('todoItems'))

// todoItems.push({
//   text: 'Buy food',
//   completed: true
// })
// localStorage.setItem('todoItems', JSON.stringify(todoItems));
// todoItems = JSON.parse(localStorage.getItem('todoItems'))

// todoItems.push({
//   text: 'Do work',
//   completed: false
// })
// localStorage.setItem('todoItems', JSON.stringify(todoItems));
// todoItems = JSON.parse(localStorage.getItem('todoItems'))

// todoItems.push({
//   text: 'Exercise',
//   completed: true
// })
// localStorage.setItem('todoItems', JSON.stringify(todoItems));
// todoItems = JSON.parse(localStorage.getItem('todoItems'))

// localStorage.clear();

// // localStorage
// console.log('Create & Read',localStorage.getItem('location'));
// localStorage.setItem('location', 'Flushing, NY');
// console.log('Update & Read',localStorage.getItem('location'));
// localStorage.removeItem('location');
// console.log('Delete & Read',localStorage.getItem('location'));
// localStorage.setItem('location', 'New York City');
// localStorage.setItem('name', 'Jinook Jung');
// console.log('Create & Read',localStorage.getItem('location'));
// console.log('Create & Read',localStorage.getItem('name'));
// localStorage.clear();
// console.log('Delete all (location)',localStorage.getItem('location'));
// console.log('Delete all (name)',localStorage.getItem('name'));