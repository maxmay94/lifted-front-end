import { useState, useEffect } from 'react'
import * as exerciseService from '../../services/exerciseService'
import ExerciseTile from '../../components/Exercise/ExerciseTile'

const Exercises = () => {
  const [exercises, setExercises] = useState([])
  const [muscles, setMuscles] = useState([])
  const [muscleSelected, setMuscleSelected] = useState("All")

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

  const handleChange = evt => {
    setMuscleSelected(evt.target.value)
  }

  return (
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200 h-full'>
      <div className='grid text-center'>
        {
          muscles &&
          <div className='w-3/4 mx-auto m-5 text-black'>
            <select 
              name="muscleSelect" 
              id="type-input"
              value={muscleSelected}
              onChange={handleChange}
              className="rounded"
            >
              <option value="All" defaultValue={true}>All Muscle Groups</option>
              {
                muscles&&
                muscles.map((muscle, i) => (
                  <option key={i} value={muscle}>{muscle}</option>
                ))
              }
            </select>
          </div>
        }
        {
          exercises &&
          exercises.map(exercise => (
            <div key={exercise._id} className="">
              {
                muscleSelected === "All" ?
                <div className='w-3/4 mx-auto'>
                  <ExerciseTile exercise={exercise} />
                </div>
                :
                exercise.muscle.includes(muscleSelected) &&
                <div className='w-3/4 mx-auto'>
                  <ExerciseTile exercise={exercise} />
                </div>
              }
            <br />
            </div>
          ))
        }
        <br />
        <br />
      </div>
    </div>
  )
}

export default Exercises