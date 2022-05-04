import { deletePerson } from './services/persons/index'

const Person = ({person, setPersons, persons}) => {
  const handleDelete = () => {
    if (window.confirm(`Do you really want to delete ${person.name}`)){
      deletePerson(person)
        .then(() =>
          setPersons(persons.filter(x => x.id !== person.id))
        )
    }
  }

  return (
    <li>
      {person.name}
      <strong> {person.number} </strong>
      <button onClick={handleDelete}>delete</button>
    </li>
  )
}

export const Persons = ({filter, persons, setPersons}) => {
  return (
    <ul>
      {
        (filter !== '' ? persons.filter(x => x.name.toLowerCase().includes(filter.toLowerCase())) : persons)
          .map(person => <Person key={person.id} person={person} persons={persons} setPersons={setPersons}/>)
      }
    </ul>
  )
}