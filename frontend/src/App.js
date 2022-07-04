import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExercisesList from './Components/ExercisesList'
import CreateUser from './Components/CreateUser';
import CreateExercise from './Components/CreateExercise'
import ErrorPage from './Components/Error';
// import UsersList from './Components/UsersList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
        <Route>
          <Route path='/' exact element={<ExercisesList />} />
          <Route path='/user' exact element={<CreateUser />} />
          <Route path='/create' exact element={<CreateExercise />} />
          {/* <Route path='/userlist' exact element={<UsersList/>} /> */}
          <Route path='*'  element = {<ErrorPage/>} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
