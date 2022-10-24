import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/exercise`

export const getAllExercises = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}

export const createExercise = async(exercise) => {
  try {
    const res = await fetch(BASE_URL, {
      // method: 'POST',
      // headers: {
      //   'content-type' : 'application/json',
      //   'Authorization' : `Bearer ${tokenService.getToken()}`
      // },
      // body: JSON.stringify({
      //   title: exercise,
      //   completed: false
      // })
    })
    const data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const deleteExercise = async(exerciseId) => {
  try {
    await fetch(`${BASE_URL}/${exerciseId}`, {
      method: 'DELETE',
      headers: { Authorization : `Bearer ${tokenService.getToken()}` }
    })
  } catch(err) {
    throw err
  }
}