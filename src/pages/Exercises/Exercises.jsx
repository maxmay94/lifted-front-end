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
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200'>
      {exercises &&
        exercises.map(exercise => (
          <ExerciseTile exercise={exercise} />
        ))
      }
    </div>
  )
}

export default Exercises