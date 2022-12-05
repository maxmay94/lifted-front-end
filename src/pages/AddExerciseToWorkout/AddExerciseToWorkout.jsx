const AddExerciseToWorkout = ({exercise, workouts}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Create Or Update Workout</h1>
      </div>

      <div className="text-center text-green-500 text-sm m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 hover:from-slate-700 hover:to-gray-800 rounded-xl text-slate-200">
        <button className="w-full">
          <div className="p-1">
            Create New Workout With {exercise.name}
          </div>
        </button>
      </div>

      {
        workouts &&
        Object.keys(workouts).map((key, i) => {
          return (
            <div key={i} className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 hover:from-slate-700 hover:to-gray-800 rounded-xl text-slate-200">
              <button className="w-full">
                <div className="text-sm text-amber-500 p-1">Add {exercise.name} To</div>
                <div className="animate-pulse text-red-500 font-bold p-1">
                  {workouts[key].name}
                </div>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default AddExerciseToWorkout