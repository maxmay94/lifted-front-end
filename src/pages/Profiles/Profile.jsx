import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profile = ({user, handleLogout}) => {

  return (
    <div>
      <h1>Welcome to your profile page</h1>
      <Link to="" onClick={handleLogout}>LOG OUT</Link>
    </div>
  )
}
 
export default Profile