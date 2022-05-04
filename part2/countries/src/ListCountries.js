import { useState, useEffect } from "react"
import { Information } from "./CountryInformation"
const REACT_APP_WHEATHER_API_KEY = process.env.REACT_APP_WHEATHER_API_KEY
console.log(process.env)

const Country = ({country, alone = false}) => {
  const [show, setShow] = useState(alone);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${REACT_APP_WHEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setWeather(result)
        })
  }, [country])

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      {
        !alone &&
          <>
            {country.name.common}
            <button onClick={() => handleClick(country)}>show</button>
          </>
      }
      {show && <Information country={country} weather={weather}/>}
      
    </div>
  )
}

export const Countries = ({query, countries}) => {
  const countriesFiltered = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))

  if (countriesFiltered.length > 10) return <h5>"Too many matches, specify another filter"</h5>

  if (countriesFiltered.length === 1) return <Country alone={true} country={countriesFiltered[0]}/>

  return (
    <ul>
      {
        countriesFiltered.map(country => (
          <li key={country.name.common}>
            <Country country={country}/>
          </li>
        ))
      }
    </ul>
  )
}