import { Link } from 'react-router-dom'
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const NavBar = ({ user }) => {
  return (
    <div className="justify-around bg-gray-900/90 backdrop-blur-md shadow-md w-full fixed bottom-0 left-0 right-0 z-10">
      <nav className='text-gray-200 rounded-t'>
        {user ?
          <ul className='flex p-1 text-xs'>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <Link to="/exercises">
                  <FitnessCenterSharpIcon />
                  <br />
                  <p>Exercises</p>
                </Link>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <Link to="/workouts" >
                  <SportsGymnasticsIcon/>
                  <br />
                  <p>Workouts</p>
                </Link>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <EventRepeatIcon />
                <br />
                <p>Routines</p>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <Link to="/profile">
                  <AccountBoxIcon />
                  <br />
                  <p>Profile</p>
                </Link>
              </div>
            </li>

          </ul>
        :
          <ul className='flex p-1 text-xs'>
            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <Link to="/exercises">
                  <FitnessCenterSharpIcon />
                  <br />
                  <p>Exercises</p>
                </Link>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <SportsGymnasticsIcon/>
                <br />
                <p>Workouts</p>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center hover:text-amber-600'>
                <EventRepeatIcon />
                <br />
                <p>Routines</p>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center'>
                <LoginIcon />
                <br />
                <Link to="/login">Log In</Link>
              </div>
            </li>

            <li className='flex-1'>
              <div className='text-center'>
                <PersonAddIcon  />
                <br />
                <Link to="/signup">Sign Up</Link>
              </div>
            </li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default NavBar
