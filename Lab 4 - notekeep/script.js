document.addEventListener('DOMContentLoaded', () => {
    loadNotes()
  })
  
  function addNote() {
    const title = document.getElementById('title').value
    const content = document.getElementById('content').value
    const color = document.getElementById('color').value
    const pin = document.getElementById('pin').checked
    const date = new Date().toLocaleString()
  
    const note = {
      title,
      content,
      color,
      pin,
      date,
    }
  
    let notes = JSON.parse(localStorage.getItem('notes')) || []
  
    if (pin) {
      notes.unshift(note)
    } else {
      notes.push(note)
    }
  
    localStorage.setItem('notes', JSON.stringify(notes))
  
    loadNotes()
    resetForm()
  }
  
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || []
    notes.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
  
    loadNotes()
  }
  
  function loadNotes() {
    const notesList = document.getElementById('notesList')
    notesList.innerHTML = ''
  
    let notes = JSON.parse(localStorage.getItem('notes')) || []
  
    notes.forEach((note, index) => {
      const noteDiv = document.createElement('div')
      noteDiv.className = 'note'
      noteDiv.style.backgroundColor = note.color
  
      const titleDiv = document.createElement('div')
      titleDiv.className = 'note-title'
      titleDiv.innerText = note.title
  
      const contentDiv = document.createElement('div')
      contentDiv.innerText = note.content
  
      const optionsDiv = document.createElement('div')
      optionsDiv.className = 'note-options'
  
      const deleteButton = document.createElement('button')
      deleteButton.innerText = 'Usuń'
      deleteButton.onclick = () => deleteNote(index)
  
      optionsDiv.appendChild(deleteButton)
  
      noteDiv.appendChild(titleDiv)
      noteDiv.appendChild(contentDiv)
      noteDiv.appendChild(optionsDiv)
  
      notesList.appendChild(noteDiv)
    })
  }
  
  function resetForm() {
    document.getElementById('title').value = ''
    document.getElementById('content').value = ''
    document.getElementById('color').value = '#ffffff'
    document.getElementById('pin').checked = false
  }
  