import React, { useEffect, useState } from 'react'
import { getPersons } from './services/persons/index'
import {Form} from './Form'
import {Filter} from './Filter'
import {Persons} from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getPersons().then(persons => setPersons(persons))
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new</h2>
      <Form setPersons={setPersons} persons={persons}/>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App