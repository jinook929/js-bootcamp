const noteTitle = document.querySelector('#noteTitle');
const noteContent = document.querySelector('#noteContent');
const editForm = document.querySelector('#editForm');
const removeNoteBtn = document.querySelector('#removeNoteBtn');

let notes = getSavedNotes();
const noteId = location.hash.substring(1);
const noteIndex = notes.findIndex(note => {
  return noteId === note.id
});
let note = notes.find(note => {
  return noteId === note.id;
}); console.log(note)

if(!note) {
  location.assign('./index.html');
}

noteTitle.value = note.title;
noteContent.value = note.content; 

editForm.addEventListener('submit', (e) => {
  e.preventDefault();  
  if(e.target.elements.title.value && e.target.elements.content.value) {
    notes[noteIndex].title = e.target.elements.title.value;
    notes[noteIndex].content = e.target.elements.content.value;
    saveNotes(notes);
    location.assign(`./index.html`);
  } else {
    alert('Fill the boxes.');
  }
})

noteTitle.addEventListener('input', (e) => {
  if(e.target.value) {
    notes[noteIndex].title = e.target.value;
    saveNotes(notes);
  } else {
    alert('Fill the title box.');
  }
})

noteContent.addEventListener('input', (e) => {
  if(e.target.value) {
    notes[noteIndex].content = e.target.value;
    saveNotes(notes);
  } else {
    alert('Fill the title box.');
  }
})

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
    noteContent.value = note.content; 
  }
})

removeNoteBtn.addEventListener('click', (e) => {
  removeNote(note);
  saveNotes(notes);
  location.assign(`./index.html`);
})