export const Filter = ({filter, setFilter}) => {
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <label htmlFor ='filter'>filter show by: </label>
      <input id='filter' type='text' value={filter} onChange={handleFilter}/>
    </div>
  )
}