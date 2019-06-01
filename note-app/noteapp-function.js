// Get data from localStorage
const getSavedNotes = () => {
  if(localStorage.getItem('notes') !== null) {
    return JSON.parse(localStorage.getItem('notes'));
  } else {
    return [];
  }  
}

// Save changed(created & edited) notes array to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove note from notes array
const removeNote = (filteredNote) => {
  let noteIndex = notes.findIndex(note => {
    return filteredNote.id === note.id;
  });
  notes.splice(noteIndex, 1);
}

// Render notes according to searching & sorting condition
const renderNotes = (notes, filters) => {
  // Searching filter
  let filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(filters.searchValue.toLowerCase());
  });

  // Sorting by filter
  sortingFilter(filteredNotes);

  // Clear display
  notesDisplay.innerHTML = '';

  // Render note rows
  filteredNotes.forEach(filteredNote => {
    let noteRow = createNotesDOM(filteredNote);
    notesDisplay.appendChild(noteRow);
  });
}

// Create a single note row DOM element
const createNotesDOM = (filteredNote) => {
  // Create DOM element row
  let row = document.createElement('div');
  let delBtn = document.createElement('button');
  let noteText = document.createElement('a');
  
  // Fill DOM element
  delBtn.textContent = 'x';
  delBtn.setAttribute('class', 'deleteBtn');
  noteText.textContent = filteredNote.title;
  noteText.setAttribute('href', `./edit.html#${filteredNote.id}`)

  // Add event listener to delBtn
  delBtn.addEventListener('click', () => {
    removeNote(filteredNote);
    saveNotes(notes);
    renderNotes(notes, filters);
  })
  
  // Append contents to DOM element row
  row.appendChild(delBtn);
  row.appendChild(noteText);

  return row;
}

// Order by sorting filter
const sortingFilter = (filteredNotes) => {
  if(filters.sorting === 'editedOrder') {
    filteredNotes.sort((a, b) => {
      return b.editedTimestamp - a.editedTimestamp
    });
  } else if(filters.sorting === 'createdOrder') {
    filteredNotes.sort((a, b) => {
      return b.createdTimestamp - a.createdTimestamp
    });
  } else if(filters.sorting === 'alphabeticalOrder') {
    filteredNotes.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
}

// // // Sort by last edited
// const editedOrder = (filteredNotes) => {
//   filteredNotes.sort((a, b) => {
//     return b.editedTimestamp - a.editedTimestamp
//   })
// }
// // // Sort by last created
// const createdOrder = (filteredNotes) => {
//   filteredNotes.sort((a, b) => {
//     return b.createdTimestamp - a.createdTimestamp
//   })
// }
// // // Sort alphabetically
// const alphabeticalOrder = (filteredNotes) => {
//   filteredNotes.sort((a, b) => {
//     return a.title.localeCompare(b.title);
//   })
// }