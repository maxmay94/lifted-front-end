// import * as exerciseService from '../../services/exerciseService'
// import { useState, useEffect } from 'react'

const ExerciseDetails = ({exercise}) => {
  console.log('---------',exercise,'---------')

  return (
    <div>
      <h1>{exercise.name}</h1>
      <div>{exercise.description}</div>
    </div>
  )
}

export default ExerciseDetails