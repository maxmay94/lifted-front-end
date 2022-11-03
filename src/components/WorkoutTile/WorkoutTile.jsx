import { Link } from 'react-router-dom'

const WorkoutTile = ({workout, exercise, handleSetExercise}) => {
  
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

      </div>
    </div>
  )
}

export default WorkoutTile