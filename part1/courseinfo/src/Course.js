const Header = ({name}) => <h2>{name}</h2>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = ({parts}) => parts
  .map(part => (
    <Part
      key = {part.id}
      name = {part.name}
      exercises = {part.exercises}/>
  ))

const Total = ({total}) => <p><strong>Number of exercises {total}</strong></p>

const Course = ({course}) => {
  const total = course.parts.reduce((prev, curr) => prev + curr.exercises, 0);
  
  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total total = {total} />
    </div>
  )
}

export default Course