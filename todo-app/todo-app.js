const todoItems = [{
  text: 'Order cat food',
  completed: false
}, {
  text: 'Clean kitchen',
  completed: true
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

const todoDisplay = document.querySelector('#todos');
const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText);
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  })

  todoDisplay.innerHTML = '';

  let incompleteTodos = filteredTodos.filter(todo => {
    return !todo.completed
  });

  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  todoDisplay.appendChild(summary)

  filteredTodos.forEach(todo => {
    let p = document.createElement('p');
    p.textContent = todo.text;
    todoDisplay.appendChild(p);
  });
}

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
  renderTodos(todoItems, filters);
  e.target.elements.text.value = '';
})