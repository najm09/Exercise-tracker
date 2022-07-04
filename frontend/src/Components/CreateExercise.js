import * as React from 'react';
import './createExercise.css'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
export default function Inputs() {

  const [Username, setUserName] = React.useState(null)
  const [Description, setDescription] = React.useState(null)
  const [duration, setDuration] = React.useState(null)
  const [date, setDate] = React.useState(new Date())

  const handleUserName = (e) => {
    if(e.target.value) setUserName(e.target.value)
  }

  const handleDescription = () => {
    if(e.target.value) setDescription(e.target.value)
  }

  const handleDuration = () => {
    if(e.target.value) setDuration(e.target.value)
  }

  const handleDate = () => {
    if(e.target.value) setDate(e.target.value)
  }

  return (
    <div className='Body'>
      <div className = "leftBlock">
      <h1>Create Exercise Log</h1>
      <img src = "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YMOMFHWFHII6VKBFQ4RAATSBKA.jpg"/>
      </div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input placeholder="Username" fullWidth onSubmit={handleUserName}/>
        <br/>
        <Input placeholder="Exercise Description" fullWidth onSubmit = {handleDescription}/>
        <br/>
        <Input placeholder="Exercise Duration" fullWidth onSubmit = {handleDuration}/>
        <br/>
        <Input placeholder="Enrollment Date" fullWidth onSubmit = {handleDate}/>
        <br/>
        <div>
        <Button variant="contained" color = "success">Create Log</Button>
      </div>
      </Box>
    </div>
  );
}
