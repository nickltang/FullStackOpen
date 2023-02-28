// Part 1D: A more complex state, debugging React apps
// Link: https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
import { useState } from "react"

const Statistics = (props) => {
  const {good, neutral, bad} = props
  if(good > 0 || neutral > 0 || bad > 0)
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {good + neutral + bad}</p>
        <p>Average {(good + neutral + bad) / 3}</p>
        <p>Positive {good / (good + neutral + bad)}%</p>
      </div>
    )
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
