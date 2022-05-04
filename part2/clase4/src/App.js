import './App.css';
import {useEffect, useState} from 'react'
import {Note} from './Note.js'
import { getAllNotes } from "./services/notes/getAllNotes"
import { createNote } from "./services/notes/createNote"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  
  useEffect(() => {
    getAllNotes().then(notes => setNotes(notes))
    // getAllNotes().then(setNotes())
  }, [])
  
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(noteToAddToState)
      .then(note => setNotes(prevNotes => prevNotes.concat(note)))

    //setNotes(notes.concat(noteToAddToState))
    //setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newNote}/>
          <button>Crear nota</button>
        </form>
      <ol>
          {notes.map(note => <Note key={note.id} {...note}/>)}
      </ol>
      <div>
        
      </div>
    </div>
  );
}

export default App;
