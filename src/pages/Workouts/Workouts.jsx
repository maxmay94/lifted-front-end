import { Link } from 'react-router-dom'

const Workouts = ({ workouts, exercise, handleSetExercise }) => {
  console.log(workouts)
  return (
    <div>
      <h1 className="text-center m-5 text-2xl">Workouts</h1>
      {
        workouts &&
        Object.keys(workouts).map((key, i) => {
          return (
            <div key={i} className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl text-slate-200">
              <h1 className="underline">{workouts[key].name}</h1>
              <p className="m-5 text-xs text-center">{workouts[key].description}</p>
              <div className="divide-y">
                {
                  workouts[key].exercises &&
                  workouts[key].exercises.map((exercise, j) => (
                    <div key={j} className="text-center mx-3 grid grid-cols-2 py-2 text-sm divide-x divide-dashed">
                      <Link to={`/exercise/${exercise._id}`} className="h-full w-full">
                        <button onClick={() => handleSetExercise(exercise._id)}>
                          <div className=" text-amber-500">
                            {exercise.name}
                          </div>
                        </button>
                      </Link>
                      <div className="">
                        {workouts[key].setsReps[j]}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        })
      }
      <br />
      <br />
    </div>
  )
}

export default Workouts