import axios from "axios"

export const createPerson = (person) => {
  return axios
    .post("http://localhost:3001/persons", person)
    .then(response => {
      const {data} = response
      return data
    })
}

export const getPersons = () => {
  return axios.get('http://localhost:3001/persons')
    .then (
      response =>{
        const {data} = response
        return data
      }
    )

}

export const deletePerson = ({id}) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
    .then (
      response =>{
        const {data} = response
        return data
      }
    ) 
}

export const updateNumber = ({id, person}) => {
  return axios.put(`http://localhost:3001/persons/${id}`, person)
}