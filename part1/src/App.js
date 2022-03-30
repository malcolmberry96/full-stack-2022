const Header = (props) => {
  console.log(props)
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
}

const Content = (props) => {
  console.log(props)
  return (
   <div>
       \
   </div>
  )
}

const Total = (props) => {
  <div>
   <p>
     {props.exercises1}
     {props.exercises2}
     {props.exercises3}
   </p>
   </div>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const excersiseTotal = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <p>
        <Header course={course} />
        <Content part1={part1} excercises1={exercises1} part2={part2} exercises2={exercises2} part2={part3} exercises3={exercises3} />
        <Total exercisesTotal={excersiseTotal} />
      </p>
    </div>
  ) 
}
export default App
