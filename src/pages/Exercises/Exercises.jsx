import { useState, useEffect } from 'react'
import * as exerciseService from '../../services/exerciseService'
import ExerciseTile from '../../components/Exercise/ExerciseTile'

const Exercises = ({handleSetExercise}) => {
  const [exercises, setExercises] = useState([])
  const [muscles, setMuscles] = useState([])
  const [muscleSelected, setMuscleSelected] = useState("all")

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
    <div className=''>
      <div className='grid text-center '>
        {
          muscles &&
          <div className='w-full mx-auto m-5 text-black'>
            <select 
              name="muscleSelect" 
              id="type-input"
              value={muscleSelected}
              onChange={handleChange}
              className="rounded w-3/4 h-8 text-center"
            >
              <option value="all" defaultValue={true}>All Muscle Groups</option>
              {
                muscles&&
                muscles.map((muscle, i) => (
                  <option key={i} value={muscle}>{muscle.charAt(0).toUpperCase() + muscle.slice(1)}</option>
                ))
              }
            </select>
          </div>
        }
        {
          exercises &&
          exercises.map(exercise => (
            <div key={exercise._id} className=" ">
              {
                muscleSelected === "all" ?
                <div className='w-3/4 mx-auto'>
                  <ExerciseTile exercise={exercise} handleSetExercise={handleSetExercise}/>
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