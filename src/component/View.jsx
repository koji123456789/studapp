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
import Frm from './Frm';

const View = () => {
  var [user, setUsers] = useState([])
  var [selected, setSelected] = useState({})
  var [edit, setEdit] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:4000/student")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      })
  }, [])

  const getData = (id) => {
    axios.get("http://localhost:4000/student/" + id)
      .then((response) => {
        setSelected(response.data);
        setEdit(true);
      })
      .catch(() => {
        alert("could not edit");
      });
  };

  const Delete = (id) => {
    axios
      .delete("http://localhost:4000/student/" + id)
      .then(() => {
        alert("Deleted a row");
        window.location.reload();
      })
      .catch(() => {
        alert("could not delete a row");
      });
  };

  return (
    <>
      {edit ? (
        <Frm method="put"
          data={{
            id: selected._id,
            name: selected.student_name,
            age: selected.student_age,
            dept: selected.student_dept
          }} />
      ) : (
        <div>
          <h1>View student table</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell>AGE</TableCell>
                  <TableCell>DEPARTMENT</TableCell>
                  <TableCell>
                    <Button></Button>
                  </TableCell>
                  <TableCell>
                    <Button></Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((val, i) => {
                  return (
                    <TableRow>
                      <TableCell key={i}>{val.student_name}</TableCell>
                      <TableCell key={i}>{val.student_age}</TableCell>
                      <TableCell key={i}>{val.student_dept}</TableCell>
                      <TableCell>
                        <Button onClick={() => { getData(val._id) }}>Edit</Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => { Delete(val._id) }}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>)
}

export default View