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

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(p => {
//   if(p.textContent.includes('the')){
//     p.remove();
//   }
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = '===== A new paragraph from js file =====';
// document.querySelector('body').appendChild(newParagraph);

const incompleteTodos = todos.filter(todo => !todo.completed)
const summary = document.createElement('h3');
summary.textContent = `[ Your have ${incompleteTodos.length} todos left ]`;

const body = document.querySelector('body');
body.appendChild(summary);

todos.forEach((todo, i) => {
  const todoElement = document.createElement('p');
  todoElement.textContent = `${i+1}. ${todo.text} (${todo.completed ? 'v' : ' '})`;
  body.appendChild(todoElement);
});

