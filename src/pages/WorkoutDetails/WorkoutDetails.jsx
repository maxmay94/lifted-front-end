import WorkoutTile from "../../components/WorkoutTile/WorkoutTile"

const WorkoutDetails = ({workout,exercise, handleSetExercise}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Workout Detail</h1>
      </div>
        {
          workout !== 'loading' ?
          <div className="text-center m-5 p-2 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl text-slate-200">
            <WorkoutTile workout={workout} exercise={exercise} handleSetExercise={handleSetExercise} />
          </div>
          :
          <div className="bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl m-5 text-slate-200">
            <h1 className="text-center text-2xl p-3">Loading Workout...</h1>
          </div>
        }
    </div>
  )
}

export default WorkoutDetails