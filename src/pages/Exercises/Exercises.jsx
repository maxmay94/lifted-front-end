import { useState, useEffect } from 'react'
import * as exerciseService from '../../services/exerciseService'

const Exercises = () => {
  const [exercises, setExercises] = useState([])
  console.log(exercises)
  useEffect(() => {
    const fetchExercises = async() => {
      const exerciseData = await exerciseService.getAllExercises()
      setExercises(exerciseData)
    }
    fetchExercises()
  }, [])

  return (
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200'>
      {exercises &&
        exercises.map(exercise => (
          <div key={exercise._id} className="p-4">
            <h1 className='underline text-xl'>{exercise.name}</h1>
            <p className='text-sm'>{exercise.description}</p>
            <img className='w-1/3 mx-auto p-2' src={exercise.url} alt="" />
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default Exercises