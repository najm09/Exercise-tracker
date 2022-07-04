import React from "react";
import axios from "axios"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import './createUser.css'

const CreateUser = () => {
  const [username, setUserName] = React.useState(null)

  const handleName = (e) => {
    if (e.target.value) setUserName(e.target.value)
  }
  const handleSubmit = () => {
    axios.post('http://localhost:5000/users/add', {
      username: username
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log("Error : " + error)
      })
  }
  return (
    <div className="user-body">
      <div>
        <h1>Create User</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbDfkK1BWWBSRIXcMDvrlkgopSNMx6aLAFg&usqp=CAU" />
      </div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input placeholder="Username" onChange={handleName} />
        <div>
          <Button variant="contained" color="success" onClick={handleSubmit}>Create Log</Button>
        </div>
      </Box>
    </div>
  )
}

export default CreateUser 