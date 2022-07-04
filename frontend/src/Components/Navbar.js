import './Navbar.css'
const Navbar = () => {
  return(
    <div className='Header'>
      <a href = '/'>ExerciseTracker</a>
      <div className='navbar-items'>
          <a href='/'>Exercises Log</a>
          {/* <a href='/userlist'>Users Log</a> */}
          <a href='/user'>Create User</a>
          <a href='/create'>Create Exercise Log</a>
      </div>
    </div>
  )
}

export default Navbar