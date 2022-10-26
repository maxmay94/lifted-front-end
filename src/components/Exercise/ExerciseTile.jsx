const ExerciseTile = ({exercise}) => {
  return (
    <div key={exercise._id} className="p-4">
      <img className='w-1/3 mx-auto p-2' src={exercise.url} alt="" />
      <h1 className='text-center text-xl'>{exercise.name}</h1>
      <br />
    </div>
  )
}

export default ExerciseTile