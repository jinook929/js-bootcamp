// Set DOM elements
const noteTitle = document.querySelector('#noteTitle');
const lastEdited = document.querySelector('#lastEdited');
const noteContent = document.querySelector('#noteContent');
const editForm = document.querySelector('#editForm');
const removeNoteBtn = document.querySelector('#removeNoteBtn');

// Display called note
// // Get default date model from localStorage
let notes = getSavedNotes();
// // Find and get the right note
const noteId = location.hash.substring(1);
let note = notes.find(note => {
  return noteId === note.id;
});
if(!note) {
  location.assign('./index.html');
}
// // Render note title & content
noteTitle.value = note.title;
lastEdited.textContent = `Last edited ${moment(note.editedTimestamp).fromNow()}`;
noteContent.value = note.content; 

// Event Handlers
// // Handle noteTitle change
noteTitle.addEventListener('input', (e) => {
  if(e.target.value) {
    // note.edited = moment().format('ddd MMM D, YYYY, hh:mm:ss a');
    note.editedTimestamp = moment().valueOf();
    lastEdited.textContent = `Last edited ${moment(note.editedTimestamp).fromNow()}`;
    note.title = e.target.value;
    saveNotes(notes);
  } else {
    alert('Fill the title box.');
  }
})
// // Handle noteContent change
noteContent.addEventListener('input', (e) => {
  if(e.target.value) {
    // note.edited = moment().format('ddd MMM D, YYYY, hh:mm:ss a');
    note.editedTimestamp = moment().valueOf();
    lastEdited.textContent = `Last edited ${moment(note.editedTimestamp).fromNow()}`;
    note.content = e.target.value;
    saveNotes(notes);
  } else {
    alert('Fill the content box.');
  }
})
// // Handle removeNote button
removeNoteBtn.addEventListener('click', (e) => {
  removeNote(note);
  saveNotes(notes);
  location.assign(`./index.html`);
})
// Handle localStorage change
window.addEventListener('storage', (e) => {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(note => {
      return noteId === note.id;
    }); 

    if(!note) {
      location.assign('./index.html');
    }

    noteTitle.value = note.title;
    lastEdited.textContent = `Last edited ${moment(note.editedTimestamp).fromNow()}`;
    noteContent.value = note.content; 
  }
})

// // // Handle editForm('Submit Change' button)
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();  
//   if(e.target.elements.title.value && e.target.elements.content.value) {
//     note.editedTimestamp = moment().valueOf();
//     note.title = e.target.elements.title.value;
//     lastEdited.textContent = `Last edited ${moment(note.editedTimestamp).fromNow()}`;
//     note.content = e.target.elements.content.value;
//     saveNotes(notes);
//     location.assign(`./index.html`);
//   } else {
//     alert('Fill the boxes.');
//   }
// })

// Date & Time Exercise =======================================
// const bday = moment();
// bday.year(1974).month(8).date(29)
// console.log(bday.toString())
// console.log(bday.format('MMM D, YYYY'))

// const now = new Date();
// const timestamp = now.getTime();

// const myDate = new Date(timestamp);
// const date1 = new Date('1974-09-29T11:45:30');
// const date2 = new Date('1969-05-04T14:30:10');
// const date1Timestamp = date1.getTime();
// const date2Timestamp = date2.getTime();

// date1Timestamp <= date2Timestamp ? console.log(`date1: ${date1.toString()} ==> date2: ${date2.toString()}`) : console.log(`date2: ${date2.toDateString()} ==> date1: ${date1.toDateString()}`)