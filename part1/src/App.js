import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReviews, setAll] = useState([])

  const handleGoodReview = () => {
    setAll(allReviews.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralReview = () => {
    setAll(allReviews.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadReview = () => {
    setAll(allReviews.concat('B'))
    setBad(bad - 1)
  }

  return (
  <div>
    <Header></Header>
    <button onClick={handleGoodReview}>Good</button>
    <button onClick={handleNeutralReview}>Neutral</button>
    <button onClick={handleBadReview}>Bad</button>
    <br></br>
    <h2>Statistics</h2>
     <p>
    Good: {good}
     <br></br>
     Neutral: {neutral}
     <br></br>
     Bad: {bad}
     <br></br>
     All: {(good + bad + neutral)}
     </p>
     <br></br>
     <p>
     Average: {(good + bad + neutral)/3}
     <br></br>
     Percentage of Positive Reviews: {(good/(good + bad + neutral)) * 100}% 
     </p>

  </div>
)
  }
export default App