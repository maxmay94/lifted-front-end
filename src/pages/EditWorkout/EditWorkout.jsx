const EditWorkout = ({ workout, exercises }) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Edit {workout.name}</h1>
      </div>

      <div className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 hover:from-slate-700 hover:to-gray-800 rounded-xl text-slate-200">
      {
          workout.exercises &&
          workout.exercises.map((exercise, j) => (
            <div key={j} className="text-center grid grid-cols-6 py-2 text-sm divide-x divide-slate-800 divide-dashed">
              <select name="" id="" className="bg-slate-900 p-2 rounded col-span-2">
                <option value="all" defaultValue={true}>{exercise.name}</option>
                {
                  exercises.map((ex, i) => (
                    <option key={i}>
                      {ex.name}
                    </option>
                  ))
                }
              </select>
              <div className="bg-gray-900 rounded p-2 col-span-3" contentEditable="true" >
                {workout.setsReps[j]}
              </div>
              <div>
                <button className="bg-slate-900 p-2 rounded">delete</button>
              </div>
            </div>
          ))
        }
        <br />
        <button className="bg-slate-900 p-2 rounded">
          Save
        </button>
      </div>
    </div>
  )
}

export default EditWorkout