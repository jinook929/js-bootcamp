// Set DOM elements
const notesDisplay = document.querySelector('#notesDisplay');
const createBtn = document.querySelector('#createBtn');
const sortOption = document.querySelector('#sortOption');
const searchText = document.querySelector('#searchText');

// Get default date model from localStorage
let notes = getSavedNotes(); 

// Set filters
const filters = {
  searchValue: '',
  sorting: 'editedOrder',
}

// Render initial list
renderNotes(notes, filters);

// Event Handlers
// // Handle searchText
searchText.addEventListener('input', (e) => {
  filters.searchValue = e.target.value;
  renderNotes(notes, filters)
});
// // Handle sortOption
sortOption.addEventListener('change', (e) => {
  filters.sorting = e.target.value;
  renderNotes(notes, filters);
})
// // Handle localStorage change
window.addEventListener('storage', (e) => {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters); 
  }
})

// // Handle createBtn ==> in production, createBtn is set as link to create.html
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