import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100
  
  if (total === 0) return <h1>No feedback given</h1>

  return <>
    <h2>statistics</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>    
      </thead>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average || 0}/>
      <StatisticLine text="positive" value={positive + "%"}/>
      </tbody>
    </table>
  </>
}

const StatisticLine = ({text, value}) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Button = ({text, setValue}) => {
  return <>
    <button onClick={() => handleClick(setValue)}>{text}</button>
  </>
}

const handleClick = (setValue) => {
  setValue(prevValue => prevValue + 1) 
}

function App() {

  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  return (
    <>
    <h1>give feedback</h1>
    <Button text="good" setValue={setGood} />
    <Button text="neutral" setValue={setNeutral} />
    <Button text="bad" setValue={setBad} />
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>

  );
}

export default App;
