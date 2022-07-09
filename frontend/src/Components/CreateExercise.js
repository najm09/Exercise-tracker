import * as React from 'react';
import './createExercise.css'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import axios from 'axios'
export default function Inputs() {

  const [username, setUserName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [duration, setDuration] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [message, setMessage] = React.useState("");

  const handleUserName = (e) => {
    setUserName(e?.target?.value)
  }

  const handleDescription = (e) => {
    setDescription(e?.target?.value)
  }

  const handleDuration = (e) => {
    setDuration(e?.target?.value)
  }

  const handleDate = (e) => {
    setDate(e?.target?.value)
  }

  const handleSubmit = async() => {
    setMessage({});
    const body = {
      username : username,
      description : description,
      duration : Number(duration),
      date : Date(date)
    };
    try{
      const {data = {}} = await axios.post('http://localhost:5000/exercises/add', body,{headers: {"Access-Control-Allow-Origin" : '*'}}) || {};
      setMessage({text: data, color: "green"});
    }catch(error){
      console.log("error in  post call", error);
      setMessage({text: "Please try again later...", color:"red"});
    }
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
        autoComplete="off"
      > <div style={{color: message.color}}>{message.text}</div>
        <Input placeholder="Username" fullWidth onChange={handleUserName} value={username}/>
        <br/>
        <Input placeholder="Exercise Description" fullWidth onChange = {handleDescription} value={description}/>
        <br/>
        <Input placeholder="Exercise Duration" type="number" min = '0' fullWidth onChange = {handleDuration} value={duration}/>
        <br/>
        <Input placeholder="Enrollment Date" type='date' fullWidth onChange = {handleDate} value={date}/>
        <br/>
        <div>
        <Button variant="contained" color = "success" onClick = {handleSubmit}>Create Log</Button>
      </div>
      </Box>
    </div>
  );
}
