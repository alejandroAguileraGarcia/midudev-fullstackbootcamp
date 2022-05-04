export const Information = ({country, weather = {}}) => {
  
  return (
    <div>
      <h1>
        {country.name.official}
      </h1>
      <ul>
        <li>capital: {country.capital}</li>
        <li>population: {country.population}</li>
      </ul>
      <h2>languages</h2>
      <ul>
        {
          (Object.values(country.languages)).map(language => <li key={language}>{language}</li>)
        }
      </ul>
      <img alt="flag" src={Object.values(country.flags)[0]}></img>
      <p>temperature {weather.main?.temp}</p>
    </div>
  )
}