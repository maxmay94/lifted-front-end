const ExerciseTile = ({exercise}) => {
  return (
    <div className="text-center m-2 p-1 bg-gradient-to-b from-gray-800 to-slate-700 rounded-xl h-full pt-2 drop-shadow-md">
      <button className="h-full w-full">
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
    </div>
  )
}

export default ExerciseTile