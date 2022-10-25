import { Link } from 'react-router-dom'
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className='bg-gray-800 text-gray-200'>
      {user ?
        <ul className='flex p-1 text-xs'>

          <li className='flex-1'>
            <div className='text-center'>
              <FitnessCenterSharpIcon />
              <br />
              <p>Exercises</p>
            </div>
          </li>

          <li className='flex-1'>
            <div className='text-center'>
              <SportsGymnasticsIcon/>
              <br />
              <p>Workouts</p>
            </div>
          </li>

          <li className='flex-1'>
            <div className='text-center'>
              <EventRepeatIcon />
              <br />
              <p>Routines</p>
            </div>
          </li>

          <li className='flex-1'>
            <Link to="/profiles">
              <div className='text-center'>
                <AccountBoxIcon />
                <br />
                <p>Profile</p>
              </div>
            </Link></li>

        </ul>
      :
        <ul>
          <li>Exercises</li>
          <li>Workouts</li>
          <li>Routines</li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
