'use strict'

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
// // Handle createBtn ==> in production, createBtn is set as link to create.html
createBtn.addEventListener('click', () => {
  let id = uuidv4();
  let timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: '',
    content: '',
    // created: now.format('ddd MMM D, YYYY, hh:mm:ss a'),
    createdTimestamp: timestamp,
    // edited: now.format('ddd MMM D, YYYY, hh:mm:ss a'),
    editedTimestamp: timestamp,
  });
  saveNotes(notes);
  location.assign(`./edit.html#${id}`);
})
// // Handle localStorage change
window.addEventListener('storage', (e) => {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters); 
  }
})