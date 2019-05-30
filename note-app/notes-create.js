const notes = getSavedNotes();
const createForm = document.querySelector('#createForm');

createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(e.target.elements.title.value && e.target.elements.title.value) {
    let id = uuidv4();
    notes.push({
      id: id,
      title: e.target.elements.title.value,
      content: e.target.elements.content.value
    })
  } else {
    alert('Enter a note');
    return location.assign(`./create.html`);
  }
  saveNotes(notes);
  location.assign(`./index.html`);
})