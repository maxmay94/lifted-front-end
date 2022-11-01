const Workouts = ({ workouts }) => {
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
              <p className="m-5">{workouts[key].description}</p>
              <div className="divide-y divide-dashed">
                {
                  workouts[key].exercises &&
                  workouts[key].exercises.map((exercise, j) => (
                    <div key={j} className="text-center mx-3 grid grid-cols-5 mt-2">
                      <div className="col-span-2 text-amber-500">
                        {exercise.name}
                      </div>
                      <div className="col-span-1">
                        -->
                      </div>
                      <div className="col-span-2">
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