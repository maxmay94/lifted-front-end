import { Link } from 'react-router-dom'

const ExerciseTile = ({user, exercise, handleSetExercise}) => {
  return (
    <div className="text-center m-2 p-1 bg-gradient-to-b from-gray-800 to-slate-700 hover:from-slate-700 hover:to-gray-800 rounded-xl h-full pt-2 drop-shadow-md">
      <Link to={`/exercise/${exercise._id}`} className="h-full w-full">
        <button onClick={() => handleSetExercise(exercise._id)}>
          <div className=" pt-1 px-2">
            <img className="h-1/4 max-h-32 mx-auto rounded-xl" 
              src={
                exercise.url ? 
                  exercise.url 
                  : 'https://media2.giphy.com/media/xUPGcKoAYCn5fHK0Zq/giphy.gif?cid=790b76119890b6d87289ae179baa7187685153fcd10ed682&rid=giphy.gif&ct=g'
              } 
              alt={exercise.name} 
            />
            <p>{exercise.name}</p>
          </div>
        </button>
      </Link>

      <br />
      {
        user &&
        <div className='p-1 m-3 text-xs'>
          <Link to='/workout/edit'>
            <button 
              onClick={() => handleSetExercise(exercise._id)} 
              className='bg-slate-900 rounded-xl p-2 text-amber-500'>
                Add to Workout
            </button>
          </Link>
        </div>
      }

    </div>
  )
}

export default ExerciseTile