import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
      <div>
        {props.text}
        {props.value}
      </div>
  )
}

const Statistics = (props) => {

  const { good, neutral, bad } = props
  const all = good + bad + neutral 

  if (all === 0) {
  return (
      <div>
        <h3>No Feedback just yet</h3>
      </div>
  )
}
return (
   <div>
      
     <StatisticLine text={'good'} value={props.good} />
     <StatisticLine text={'neutral'} value={props.neutral} />
     <StatisticLine text={'bad'} value={props.bad} />
     <StatisticLine text={'all'} value={props.all} />
     <StatisticLine text={'average'} value={(good - bad) / all} />
     <StatisticLine text={'positive'} value={String(good/all * 100) + '%'} />


   </div>
 )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
    setBad(bad + 1)
  }


  return (
  <div>
    <Header></Header>
  
    
    <Button handleClick={() => setGood(good +1)} text="Good"/>
    <Button handleClick={() => setBad(bad + 1)} text="Bad" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
    <br></br>
    <h2>Statistics</h2>
    <Statistics name={'statistics'} good={good} neutral={neutral} bad={bad} />
  </div>
)
  }
export default App