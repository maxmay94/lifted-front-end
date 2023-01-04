import { Link } from 'react-router-dom'

const WorkoutTile = ({user, workout, exercise, handleSetExercise, handleSetWorkout}) => {
  
  return (
    <div>
      <h1 className="underline font-semibold">{workout.name}</h1>
      <p className="m-5 text-xs text-center">{workout.description}</p>
      <div className="divide-y divide-slate-800">
        
        {
          workout.exercises &&
          workout.exercises.map((exercise, j) => (
            <div key={j} className="text-center mx-3 grid grid-cols-2 py-2 text-sm divide-x divide-slate-800 divide-dashed">

              <Link to={`/exercise/${exercise._id}`} className="h-full w-full">
                <button onClick={() => handleSetExercise(exercise._id)}>
                  <div className=" text-amber-500">
                    {exercise.name}
                  </div>
                </button>
              </Link>
              <div className="">
                {workout.setsReps[j]}
              </div>
            </div>
          ))
        }

        {
          user &&
          <div className='flex p-1 m-1 text-xs'>
            <div className='flex-1 mt-2'>              
              <Link to={`/workout/edit/${workout._id}`}>
                <button 
                  onClick={() => handleSetWorkout(workout._id)} 
                  className=' bg-slate-900 rounded-xl p-2 text-amber-500'>
                    Edit Workout
                </button>
              </Link></div>
            <div className='flex-1 mt-2'>
              <Link to=''>
                <button 
                  onClick={() => handleSetWorkout(workout._id)} 
                  className=' bg-slate-900 rounded-xl p-2 text-amber-500'>
                    Add to Routine
                </button>
              </Link>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default WorkoutTile