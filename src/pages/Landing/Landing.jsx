const Landing = ({ user }) => {
  return (
    <div className='text-center text-2xl h-screen bg-gradient-to-b from-gray-900 to-slate-800 text-gray-200'>
      <div className="px-20">
        <br />
        <h1>Hey {user ? user.name : 'there'}, what are we lifting today?</h1>
      </div>
    </div>
  )
}

export default Landing