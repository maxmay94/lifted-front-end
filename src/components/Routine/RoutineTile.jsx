const RoutineTile = ({routine}) => {
  return (
    <div className="text-center m-2 p-1 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl h-full pt-2 drop-shadow-md">
      <h1 className="text-xl underline"> {routine.name} </h1>
      <div className="divide-y mt-2 p-3">
      {
        routine.workouts.map((workout, i) => (
          <div key={i} className="p-2 text-sm">
            <div className="grid grid-cols-4 divide-x">
              <div className="col-span-1">Day {i+1} </div>
              <div className="col-span-3 text-amber-500">{workout.name}</div>
            </div>

          </div>
        ))
      }

      </div>
    </div>
  )
}

export default RoutineTile