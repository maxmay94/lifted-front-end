const ExerciseDetails = (exercise) => {
  return (
    <div>
      <h1>{exercise.name}</h1>
      <div>{exercise.details}</div>
    </div>
  )
}

export default ExerciseDetails