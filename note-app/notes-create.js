const notes = getSavedNotes();
const createForm = document.querySelector('#createForm');

createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(e.target.elements.title.value && e.target.elements.title.value) {
    let id = uuidv4();
    let now = moment();
    notes.push({
      id: id,
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
      created: now.format('ddd MMM D, YYYY, hh:mm:ss'),
      createdTimestamp: now.valueOf(),
      edited: now.format('ddd MMM D, YYYY, hh:mm:ss'),
      editedTimestamp: now.valueOf(),
    })
  } else {
    alert('Enter a note');
    return location.assign(`./create.html`);
  }
  saveNotes(notes);
  location.assign(`./index.html`);
})