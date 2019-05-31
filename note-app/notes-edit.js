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
});

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
    notes[noteIndex].edited = moment().format('ddd MMM D, YYYY, hh:mm:ss');
    notes[noteIndex].editedTimestamp = moment().valueOf();
    notes[noteIndex].title = e.target.value;
    saveNotes(notes);
  } else {
    alert('Fill the title box.');
  }
})

noteContent.addEventListener('input', (e) => {
  if(e.target.value) {
    notes[noteIndex].edited = moment().format('ddd MMM D, YYYY, hh:mm:ss');
    notes[noteIndex].editedTimestamp = moment().valueOf();
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