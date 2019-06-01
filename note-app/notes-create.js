'use strict'

// Set DOM elements
const createForm = document.querySelector('#createForm');

// Get default date model from localStorage
const notes = getSavedNotes();

// Event Handlers
// // Handle createForm
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(e.target.elements.title.value && e.target.elements.title.value) {
    let id = uuidv4();
    // let now = moment();
    let timestamp = moment().valueOf();
    notes.push({
      id: id,
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
      // created: now.format('ddd MMM D, YYYY, hh:mm:ss a'),
      createdTimestamp: timestamp,
      // edited: now.format('ddd MMM D, YYYY, hh:mm:ss a'),
      editedTimestamp: timestamp,
    })
  } else {
    alert('Enter a note');
    return location.assign(`./create.html`);
  }
  saveNotes(notes);
  location.assign(`./index.html`);
})