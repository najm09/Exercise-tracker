const Navbar = () => {
  return(
    <div>
      <ul style={{display:'flex', flexDirection: 'row', justifyContent:'space-around'}}>
        <li>
          <a href='/exercises'>Exercises</a>
        </li>
        <li>
          <a href='/user'>Create User</a>
        </li>
        <li>
          <a href='/create'>Create Exercise</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar