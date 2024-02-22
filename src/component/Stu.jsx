import { Button, TextField } from '@mui/material'
import React from 'react'

const Stu = () => {
  return (
    <div align='center'>
        <h1>This is the offical registration page for Students</h1>
        <TextField variant='outlined' label='Name' name='name' ></TextField>&nbsp;
        <br/><br/>
        <TextField variant='filled' label="Age" name="age"></TextField>&nbsp;
        <br/><br/>
        <TextField variant='outlined'label="department" type="dept"/>&nbsp;
        <br/><br/>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Stu