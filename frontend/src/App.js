import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExercisesList from './Components/ExercisesList'
import CreateUser from './Components/CreateUser';
import CreateExercise from './Components/CreateExercise'

const style = {
  display:'flex', 
  flexDirection : 'row',
  justifyContent : 'space-around',
  widht : '100%',
  height : '100%',
  alignItems: "center"
}

const App = () => {
  return (
    <div style={{height: "100%"}}>
      <Navbar />
      <Router>
        <Routes>
        <Route path='/' exact>
          <Route path='/exercises' exact element={<ExercisesList />} />
          <Route path='/user' exact element={<CreateUser />} />
          <Route path='/create' exact element={<CreateExercise />} />
          <Route path='*'  element = {<h1 style = {style}>404 NOT FOUND </h1>} />
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
