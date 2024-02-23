import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const View = () => {
  var[user,setUsers]=useState([])
  useEffect(() =>{
    axios.get("http://localhost:4000/students")
    .then((response)=>{
    console.log(response.data)
    setUsers(response.data)
  })
}, [])
  return (
    <div>
        <h1>View student table</h1>
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>age</TableCell>
              <TableCell>dept</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((val,i) =>{
              return(
                <TableRow>
                <TableCell key={i}>{val.name}</TableCell>
                <TableCell key={i}>{val.age}</TableCell>
                <TableCell key={i}>{val.dept}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View