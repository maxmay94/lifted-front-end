import RoutineTile from '../../components/Routine/RoutineTile'

const Routines = ({routines}) => {
  return (
    <div>
      <div className="sticky top-0 z-30 text-center text-2xl bg-gray-900/90 backdrop-blur-md shadow-md h-full" >
        <h1 className='p-3'>Routines</h1>
      </div>
      <div>
        {
          routines &&
          Object.keys(routines).map((key, i) => {
            return(
              <div key={i}>
                <RoutineTile routine={routines[key]} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Routines