const WorkoutDetails = ({workout}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>{workout.name}</h1>
      </div>
    </div>
  )
}

export default WorkoutDetails