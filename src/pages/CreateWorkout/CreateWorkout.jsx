const CreateWorkout = ({exercise, workouts}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Create Or Update Workout</h1>
      </div>

      <div className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl text-slate-200">
        Create New Workout
      </div>

      {
        workouts &&
        Object.keys(workouts).map((key, i) => {
          return (
            <div key={i} className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl text-slate-200">
              {workouts[key].name}
            </div>
          )
        })
      }
    </div>
  )
}

export default CreateWorkout