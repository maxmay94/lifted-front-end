import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/routine`

export const getAllRoutines = async() => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}