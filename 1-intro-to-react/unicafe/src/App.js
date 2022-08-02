import { useState } from 'react'

const StatisticsLine = ({name, value}) => {
  if (name === 'positive') {
    return (
      <tr>
        <td>{name}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
  
}

const Statistics = ({statistics}) => {
  const {
    good,
    neutral,
    bad,
    all,
    average,
    positive
  } = statistics

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine name='good' value={good} />
        <StatisticsLine name='neutral' value={neutral} />
        <StatisticsLine name='bad' value={bad} />
        <StatisticsLine name='all' value={all} />
        <StatisticsLine name='average' value={average} />
        <StatisticsLine name='positive' value={positive} />
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> 
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all, 
    average: (good + (-bad)) / all, 
    positive: (good / all) * 100
  }

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      </div>
      <h1>statistics</h1>
      <Statistics statistics={statistics} />
    </>
    )
}

export default App