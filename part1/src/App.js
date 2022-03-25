const Header = (props) => {
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
  return (
    <p>{props.part1}</p>
  )
}

// const Content = (props) => {
//   return (
//   <div>
//    <Part {props.part1}/>
//    <Part {props.part2}/>
//    <Part {props.part3}/>
//    </div>
//   )
// }

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
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
  <div>
    <Header course={course}/>
    <p>
      {part1}{exercises1}
    </p>
    <p>
      {part2}{exercises2}
    </p>
    <p>
      {part3}{exercises3}
    </p>
    <p>Number of exercises {exercises1 +  exercises2 + exercises3}</p>
  </div>
)
  }
export default App
