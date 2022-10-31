import { Link } from 'react-router-dom'

const Profile = ({user, handleLogout}) => {

  return (
    <div className='text-center'>
      <h1 className='text-xl font-bold p-2'>Welcome to your profile page {user.name}</h1>
      <Link to="" className='' onClick={handleLogout}>LOG OUT</Link>
      <h1 className='p-2 font-mono text-amber-500'>Track Stats</h1>
    </div>
  )
}
 
export default Profile