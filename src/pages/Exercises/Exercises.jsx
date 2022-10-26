import { useState, useEffect } from 'react'
import * as exerciseService from '../../services/exerciseService'
import ExerciseTile from '../../components/Exercise/ExerciseTile'

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
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200 h-screen'>
      <h1 className='text-center text-2xl py-4'>Exercises</h1>
      <div className='grid gap-y-2 grid-cols-2'>
        {exercises &&
          exercises.map(exercise => (
            <div key={exercise._id}>
              <ExerciseTile exercise={exercise} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Exercises