import axios from 'axios';
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './ExerciseList.css'

const ExercisesList = () => {

  const [userData, setUserData] = useState([]);
  const [shouldUpdateUserData, setShouldUpdateUserData] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState("")
  const [loader, setLoader] = useState(false)


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const handleDelete =  async(id) => {
    setShouldUpdateUserData(false);
    try{
      const response =  await axios.delete(`http://localhost:5000/exercises/${id}`);
      if(response?.status == '200'){
        setDeleteMessage(response?.data);
        setShouldUpdateUserData(true);
        console.log(deleteMessage)
      }else setDeleteMessage(response?.data);
    }
    catch(error){
      setDeleteMessage(error)
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      try{
        setLoader(true);
        const { data: response = [] } = await axios.get('http://localhost:5000/exercises');
        setUserData(response);
        if(response === '200') setLoader(false)
        else setLoader(false)
      }
      catch(error){
        console.log("Error : ", error)
      }
    }
    getUserData();
  }, [shouldUpdateUserData]);

  return userData.length ? (
    <div className='header'>
      <div>
        <Typography center variant='h4'>Logged Exercises Lists </Typography>
        &nbsp;
      </div>
      <Typography center variant='h5' className = "success-message" >{deleteMessage} </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Typography variant='h5'>Username</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant='h5'>Description</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant='h5'>Duration</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant='h5'>Date</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography variant='h5'>Actions</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.username}</StyledTableCell>
                <StyledTableCell align="right" >{row.description}</StyledTableCell>
                <StyledTableCell align="right" >{row.duration}</StyledTableCell>
                <StyledTableCell align="right" >{row.date.substring(0, 10)}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button color="success">Edit</Button>|
                  <Button color="error" onClick={() => handleDelete(row._id)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : loader ? <CircularProgress className='loader'/> : <div className='loader'>No data available this time</div>
}

export default ExercisesList