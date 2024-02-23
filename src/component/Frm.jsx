import { TextField, Typography, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Frm = () => {
    var [data, setData] = useState();
    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    };

    const submit = () => {
        axios
            .post("http://localhost:4000/student", {
                student_name: data.name,
                student_age: data.age,
                student_dept: data.dept
            })
            .then(() => {
                alert("new entey is created successfully");
            }).catch((err) => {
                alert("error saving data");
            })
    };

    return (
        <div>
            <br />
            <Typography variant='h3'>Login form</Typography>
            <br />
            <TextField variant='outlined' label="username" name='name' onChange={inputHandler} />
            <br />
            <br /><br />
            <TextField variant='outlined' label="Age" name='age' onChange={inputHandler} />
            <br /><br />
            <TextField variant='outlined' label="Dept" name='dept' onChange={inputHandler} />
            <br />
            <br /><br />
            <Button variant='contained' onClick={submit}>submit</Button>
        </div>
    )
}

export default Frm