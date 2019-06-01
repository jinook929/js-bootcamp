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
  
  todoDisplay.appendChild(generateSummaryDOM(filteredTodos));

  filteredTodos.forEach(todo => {
    todoDisplay.appendChild(generateTodoDOM(todo));
  });
}

const removeTodo = (id) => {
  let todoIndex = todoItems.findIndex((todo) => todo.id === id);
  // let todoIndexArr = todoItems.map(todo => todo.id)
  // let todoIndex = todoIndexArr.indexOf(id);
  if(todoIndex > -1) {
    todoItems.splice(todoIndex, 1);
  }
}

const toggleTodo = (id) => {
  let todo = todoItems.find((todo) => todo.id === id);
  if(todo !== undefined) {
    todo.completed = !todo.completed;
  }  
}

const generateTodoDOM = (todo) => {
  let todoDiv = document.createElement('div');
  let checkbox = document.createElement('input');
  let span = document.createElement('span');
  let btn = document.createElement('button');
  checkbox.setAttribute('type', 'checkbox');
  span.textContent = todo.text;
  btn.textContent = 'x';
  todoDiv.appendChild(checkbox);
  todoDiv.appendChild(span);
  todoDiv.appendChild(btn);
  
  if(todo.completed) {
    checkbox.checked = todo.completed;
    span.setAttribute('style', 'text-decoration: line-through');
  } else {
    span.setAttribute('style', '');
  }

  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todoItems);
    renderTodos(todoItems, filters)
  })

  btn.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todoItems);
    renderTodos(todoItems, filters)
  })

  return todoDiv;
}

const generateSummaryDOM  = (filteredTodos) => {
  let incompleteTodos = filteredTodos.filter(todo => !todo.completed);
  let summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} ${incompleteTodos.length > 1 ? 'todos' : 'todo'} left`;
  return summary;
}