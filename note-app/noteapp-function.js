const getSavedNotes = () => {
  if(localStorage.getItem('notes') !== null) {
    return JSON.parse(localStorage.getItem('notes'));
  } else {
    return [];
  }  
}

const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

const removeNote = (filteredNote) => {
  let noteIndex = notes.findIndex(note => {
    return filteredNote.id === note.id;
  });
  notes.splice(noteIndex, 1);
}

const renderNotes = (notes, filters) => {
  let filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchValue.toLowerCase());
  });

  notesDisplay.innerHTML = '';

  filteredNotes.forEach(filteredNote => {
    let noteRow = createNotesDOM(filteredNote);
    notesDisplay.appendChild(noteRow);
  });
}

const createNotesDOM = (filteredNote) => {
  let row = document.createElement('div');
  let delBtn = document.createElement('button');
  let noteText = document.createElement('a');
  
  delBtn.textContent = 'x';
  noteText.textContent = filteredNote.title;
  noteText.setAttribute('href', `./edit.html#${filteredNote.id}`)

  delBtn.addEventListener('click', () => {
    removeNote(filteredNote);
    saveNotes(notes);
    renderNotes(notes, filters);
  })
  
  row.appendChild(delBtn);
  row.appendChild(noteText);

  return row;
  // notesDisplay.appendChild(row);
  // location.assign('./edit.html')
}