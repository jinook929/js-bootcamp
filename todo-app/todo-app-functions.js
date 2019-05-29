const getSavedTodos = () => {
  if(localStorage.getItem('todoItems') !== null) {
    return JSON.parse(localStorage.getItem('todoItems'));
  } else {
    return [];
  }
}

const saveTodos = (todoItems) => {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText);
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch; 
  })

  todoDisplay.innerHTML = '';
  
  generateSummaryDOM(filteredTodos);

  filteredTodos.forEach(todo => {
    generateTodoDOM(todo);
  });
}

const generateTodoDOM = (todo) => {
  let p = document.createElement('p');
  p.textContent = todo.text;
  todoDisplay.appendChild(p);
}

const generateSummaryDOM  = (filteredTodos) => {
  let incompleteTodos = filteredTodos.filter(todo => {
    return !todo.completed
  });
  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  todoDisplay.appendChild(summary)
}