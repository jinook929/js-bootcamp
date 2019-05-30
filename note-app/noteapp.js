let notes = getSavedNotes(); 

const notesDisplay = document.querySelector('#notesDisplay');
const createBtn = document.querySelector('#createBtn');
const sortOption = document.querySelector('#sortOption');
const searchText = document.querySelector('#searchText');

const filters = {
  searchValue: '',
}

renderNotes(notes, filters);

searchText.addEventListener('input', (e) => {
  filters.searchValue = e.target.value;
  renderNotes(notes, filters)
})

// createBtn.addEventListener('click', () => {
//   let id = uuidv4();

//   notes.push({
//     id: id,
//     title: `Test Note (id: ${id.slice(0, 8)}...)`,
//     content: `${id.toUpperCase()}`
//   })
//   saveNotes(notes);
//   // renderNotes(notes, filters);
//   location.assign(`./edit.html#${id}`);
// })

sortOption.addEventListener('change', (e) => {
  console.log(`"${e.target.value}" selected`)
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters); 
  }
})