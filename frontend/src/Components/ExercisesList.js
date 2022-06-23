import axios from 'axios';
import { useState, useEffect } from 'react';

const ExercisesList = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async() => {
      const {data: response = []} =  await axios.get('http://localhost:5000/exercises');
      setUserData(response);
    }
    getUserData();
  }, []);

  return userData.length ? (
    <div>
      <a href="/">Home</a>
      {
        userData.map(({description}, id) => 
            <p key={id}>{description}</p>
          
        )
      }
    </div>
  ) : "Loading..."
}

export default ExercisesList