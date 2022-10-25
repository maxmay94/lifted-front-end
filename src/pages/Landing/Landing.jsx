
const Landing = ({ user }) => {
  return (
    <main className='text-center text-2xl h-screen bg-gradient-to-b from-gray-900 to-slate-800 text-gray-200'>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
