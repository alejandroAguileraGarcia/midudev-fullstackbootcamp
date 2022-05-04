import React, { useState } from 'react'
import { createPerson, updateNumber } from './services/persons/index'

export const Form = ({setPersons, persons}) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    number: ''
  })

  const handleChangeName = (event) => {
    setNewPerson({...newPerson,
      name: event.target.value
    })
  }

  const handleChangeNumber = (event) => {
    setNewPerson({...newPerson,
      number: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personToModify = persons.find(person => person.name === newPerson.name) //persons.some(person => person.name === newPerson.name)

    if (!personToModify) {
      createPerson(newPerson)
        .then(person => setPersons([...persons, person]))
    }else {
      const modify = window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)
      
      if(modify){
        updateNumber({id: personToModify.id, person: newPerson})
        .then(() => setPersons(persons.map(person => person.id === personToModify.id ? newPerson : person)))
      }
    }

    setNewPerson({
      name: '',
      number: ''
    })

    //.then(() => setPersons([...persons.filter(x => x.id !== personToModify.id), newPerson]))
  }


    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor ='name'>name: </label>
        <input id='name' type='text' onChange={handleChangeName} value={newPerson.name}/>
      </div>
      <div>
        <label htmlFor ='number'>number: </label>
        <input id='number' type='text' onChange={handleChangeNumber} value={newPerson.number}/>
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  )
}