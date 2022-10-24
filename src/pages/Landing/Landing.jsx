
const Landing = ({ user }) => {
  return (
    <main className='text-center text-2xl'>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
