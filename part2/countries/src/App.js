import { Countries } from './ListCountries';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('') 

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(result => setCountries(result))
  }, [])

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  return (
    <main>
      <div>
        <label htmlFor='query'>find countries</label>
        <input id='query' type='text' value={query} onChange={handleQuery} />
      </div>
      <Countries query={query} countries={countries}/>
    </main>
  );
}

export default App;
