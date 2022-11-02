
const ExerciseDetails = ({exercise}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Exercise Detail</h1>
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl m-5 text-slate-200">
        <h1 className="text-center text-2xl p-3">{exercise.name}</h1>
        <img src={exercise.url} className='w-1/2 mx-auto' alt={`animated GIF of ${exercise.name} form`} />
        <div className="px-10 py-5 text-justify text-sm">{exercise.description}</div>
      </div>
    </div>
  )
}

export default ExerciseDetails