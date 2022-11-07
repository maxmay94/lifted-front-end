import { Link } from 'react-router-dom'

const RoutineTile = ({ routine, workout, handleSetWorkout }) => {
  return (
    <div className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 hover:from-slate-700 hover:to-gray-800 rounded-xl h-full pt-2 drop-shadow-md">
      <h1 className="text-xl underline"> {routine.name} </h1>
      <p className="text-xs m-5">{routine.description}</p>
      <div className="divide-y divide-slate-800 px-2 pb-2">
      {
        routine.workouts.map((workout, i) => (
          <div key={i} className="p-2 text-sm">
            <div className="grid grid-cols-4 divide-x divide-slate-800 divide-dashed">

              <div className="col-span-1">Day {i+1}</div>

              <Link to={`/workout/${workout._id}`} className='col-span-3  text-amber-500'>
                <button onClick={() => handleSetWorkout(workout._id)}>
                  <div>{workout.name}</div>
                </button>
              </Link>
              
            </div>
          </div>
        ))
      }
      </div> 
    </div>
  )
}

export default RoutineTile