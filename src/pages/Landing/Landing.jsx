
const Landing = ({ user }) => {
  return (
    <main className='text-center text-2xl h-screen bg-gradient-to-b from-gray-900 to-slate-800 text-gray-200'>
      <div className="mx-20">
        <h1 className="pt-10">Hey {user ? user.name : 'there'}, what are we lifting today?</h1>
      </div>
    </main>
  )
}

export default Landing
