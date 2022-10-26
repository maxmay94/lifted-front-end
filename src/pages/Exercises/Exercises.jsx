import { useState, useEffect } from 'react'
import * as exerciseService from '../../services/exerciseService'
import ExerciseTile from '../../components/Exercise/ExerciseTile'

const Exercises = () => {
  const [exercises, setExercises] = useState([])
  const [muscles, setMuscles] = useState([])

  useEffect(() => {
    const fetchExercises = async() => {
      const exerciseData = await exerciseService.getAllExercises()
      let muscleSet = new Set()
      exerciseData.forEach(exercise => {
        exercise.muscle.forEach(muscle => {
          if(!muscleSet.has(muscle))muscleSet.add(muscle)
        })
      })
      setMuscles([...new Set(muscleSet)])
      setExercises(exerciseData)
    }
    fetchExercises()
  }, [])

  return (
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200'>
      {/* <h1 className='text-center text-2xl py-4'>All Exercises</h1> */}
      {/* <div className='grid gap-y-2 grid-cols-2'> */}
      <div className='grid text-center'>
        {/* {exercises &&
          exercises.map(exercise => (
            <div key={exercise._id}>
              <ExerciseTile exercise={exercise} />
            </div>
          ))
        } */}
        {
          muscles &&
          muscles.map((muscle, i) => (
            <div key={i}>
              <h1 className='text-2xl'>{muscle.charAt(0).toUpperCase() + muscle.slice(1)}</h1>
              {
                exercises.map(exercise => (
                  <div key={exercise._id}>
                    {
                      exercise.muscle.includes(muscle) &&
                      <div className='w-3/4 mx-auto'>
                        <ExerciseTile exercise={exercise} />
                      </div>
                    }
                  </div>
                ))
              }
              <br />
            </div>
          ))
        }
        <br />
      </div>
    </div>
  )
}

export default Exercises