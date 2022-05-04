const { response, request } = require('express')
const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')

app.use(express.json())

app.use(logger)

let persons = [
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: '123',
    number: '1234',
    id: 4
  },
  {
    name: '1323',
    number: '2342',
    id: 5
  },
  {
    name: '1231',
    number: '223',
    id: 6
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const person = request.body

  const ids = persons.map(person => person.id)
  const maxId = Math.max(...ids)

  const newPerson = {
    name: person.name,
    number: person.number,
    id: maxId + 1
  }

  persons = [...persons, newPerson]

  response.status(201).json(newPerson)
})

app.use((request, response) => {
  response.status(404).json({
    error: 'Not Found'
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
