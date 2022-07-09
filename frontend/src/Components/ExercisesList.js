import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './ExerciseList.css'
import ErrorPage from './Error'

const ExercisesList = () => {

  const [userData, setUserData] = useState([]);


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

  const handleEdit = () => {

  }

  useEffect(() => {
    const getUserData = async () => {
      const { data: response = [] } = await axios.get('http://localhost:5000/exercises');
      setUserData(response);
    }
    getUserData();
  }, []);

  return userData.length ? (
    <div className='header'>
      <div>
      <Typography center variant = 'h4'>Logged Exercises Lists </Typography>
      &nbsp;
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Duration&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Actions&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">{row.username}</StyledTableCell>
                <StyledTableCell align="right" >{row.description}</StyledTableCell>
                <StyledTableCell align="right" >{row.duration}</StyledTableCell>
                <StyledTableCell align="right" >{row.date.substring(0,10)}</StyledTableCell>
                <StyledTableCell align="right"><a >Edit</a>|<a >Delete</a></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : <ErrorPage/>
}

export default ExercisesList