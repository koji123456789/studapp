import { AppBar, Button, Toolbar, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}  >
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h4'>Student App</Typography>
                <Button style={{color: 'white'}}  >
                     <Link to='/' style={{color:'white'}}>Add student</Link>
                </Button>
                <Button style={{color: 'white'}}  >
                     <Link to='/a' style={{color:'white'}}>View std table</Link>
                </Button>
                <Button style={{color: 'white'}}  >
                     <Link to='/c' style={{color:'white'}}> View std ID</Link>
                </Button>
                <Button style={{color: 'white'}}  >
                     <Link to='/f' style={{color:'white'}}> form</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar