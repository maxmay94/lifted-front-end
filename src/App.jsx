// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profiles/Profile'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Exercises from './pages/Exercises/Exercises'
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails'
import Workouts from './pages/Workouts/Workouts'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as exerciseService from './services/exerciseService'
import * as workoutService from './services/workoutService'

// styles
import './App.css'
import { useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [exercise, setExercise] = useState({})
  const [workouts, setWorkouts] = useState({})
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log("LOGGING OUT")
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  
  const handleSetExercise = async(exerciseId) => {
    const currentExercise = await exerciseService.showExercise(exerciseId)
    setExercise(currentExercise)
  }
  
  useEffect(() => {
    const fetchWorkouts = async() => {
      let workoutData = await workoutService.getAllWorkouts()
      setWorkouts(workoutData)
    }
    fetchWorkouts()
  }, [])


  return (
    <div className='bg-gradient-to-b from-gray-900 to-slate-800 text-slate-200 h-screen overflow-y-scroll'>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} handleLogout={handleLogout}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/changePassword"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/exercises'
          element={
            <Exercises handleSetExercise={handleSetExercise} />
          }
        />
        <Route 
          path='/workouts'
          element={
            <Workouts workouts={workouts} />
          }
        />
        <Route 
          path='/exercise/:id'
          element={
            <ExerciseDetails exercise={exercise} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
