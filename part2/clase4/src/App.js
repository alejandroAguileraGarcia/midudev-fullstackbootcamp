
import './App.css';
import {useState} from 'react'
import {Note} from './Note.js'

const App = ({defaultNotes = []}) => {
  const [notes, setNotes] = useState(defaultNotes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newNote)
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    //setNotes(notes.concat(noteToAddToState))
    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <label htmlFor='showAll'>{showAll ? 'Show only importants: ' : 'Show all: '}</label>
      <input id='showAll' type='checkbox' onChange={handleShowAll} checked={showAll}></input>
      <ol>
        {
          /*notes
            .filter(note => showAll || note.important)
            .map(note => <Note key={note.id} note={note}/>)*/
          (showAll ? notes : notes.filter(note => note.important))
          .map(note => <Note key={note.id} note={note}/>)
        }
      </ol>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newNote}/>
          <button>Crear nota</button>
        </form>
      </div>
    </div>
  );
}

export default App;
