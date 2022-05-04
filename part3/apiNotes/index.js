const express = require('express')
const app = express()

//Para create note
app.use(express.json())

let notes = [
  {
    'id': 1,
    'content': 'Me tengo que subscribir a @midudev en Youtube y Twitch',
    'important': false
  },{
    'id': 2,
    'content': 'Estudiar las clases del Bootcamp',
    'important': true
  },{
    'id': 3,
    'content': 'Repasar retos de JS',
    'important': true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.send(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content){
    return response.status(400).json({
      error: 'note.content is missing'
    })
  }
  
  const ids = notes.map (note =>  note.id)

  const idMax = Math.max(...ids)

  const newNote = {
    id: idMax + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false
  }

  notes = [...notes, newNote]

  response.json(newNote)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
