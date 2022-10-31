const ExerciseDetails = ({exercise}) => {
  return (
    <div>
      <h1 className="text-center text-2xl p-3">{exercise.name}</h1>
      <img src={exercise.url} className='w-1/2 mx-auto' alt={`animated GIF of ${exercise.name} form`} />
      <div className="px-10 py-5 text-sm">{exercise.description}</div>
    </div>
  )
}

export default ExerciseDetails