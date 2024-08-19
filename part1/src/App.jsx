//Exercise 1.1 and 1.2 
//Refactor the code so that it consists of three new components: Header, Content, and Total.
//Exercise 1.3-1.5
//Refactor the code so that the App component defines the course and its parts as objects.

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ title, exercises }) => {
  return (
    <p>
      {title} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.title} title={part.title} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const courseInfo = {
  name: 'Half Stack application development',
  parts: [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 }
  ]
}

  const totalExercises = courseInfo.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={courseInfo.name} />
      <Content parts={courseInfo.parts} />
      <Total total={totalExercises} />
    </div>
  )
}



export default App
