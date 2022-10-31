const ExerciseDetails = ({exercise}) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl m-5">
      <h1 className="text-center text-2xl p-3">{exercise.name}</h1>
      <img src={exercise.url} className='w-1/2 mx-auto' alt={`animated GIF of ${exercise.name} form`} />
      <div className="px-10 py-5 text-justify">{exercise.description}</div>
    </div>
  )
}

export default ExerciseDetails