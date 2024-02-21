import { AppBar, Button, Toolbar, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}  >
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>Student App</Typography>
                <Button style={{color: 'white'}}  >
                    link
                    {/* <Link to='/' style={{color:'white'}}>login</Link> */}
                    </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar