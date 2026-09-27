const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );

}

const Content = (props) => {
  const part = {...props};

  return (
    <div>
      <Part name={part.parts[0].name} exercises={part.parts[0].exercises} />
      <Part name={part.parts[1].name} exercises={part.parts[1].exercises} />
      <Part name={part.parts[2].name} exercises={part.parts[2].exercises} />
    </div>
  );
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  );
}

const Total = (props) => {
  const part = {...props};

  return (
    <p>Number of exercises {part.exercises[0].exercises + part.exercises[1].exercises + part.exercises[2].exercises}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total exercises={parts} />
    </div>
  )
}

export default App