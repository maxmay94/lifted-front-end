import { Link } from 'react-router-dom'

const Profile = ({user, handleLogout}) => {

  return (
    <div className='text-center'>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Profile</h1>
      </div>
      <div className='m-5'>
        <Link to="" className='' onClick={handleLogout}>LOG OUT</Link>
        <h1 className='p-2 font-mono text-amber-500'>Track Stats</h1>
      </div>
    </div>
  )
}
 
export default Profile