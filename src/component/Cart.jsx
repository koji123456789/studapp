import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'

const Cart = () => {
  return (
    <div> 
        <br />
        <h1>View student</h1><br /><Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://i.pngimg.me/thumb/f/720/m2i8A0N4m2G6m2m2.jpg"
      title="student"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Nandana C
        {/* val{name} */}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        S6 CSE
        {/* val{age} */}
      </Typography>
    </CardContent>
    <CardActions>
      COMPUTER SCIENCE
      {/* <Button size="small">val{dept}</Button> */}
    </CardActions>
  </Card>  </div>
  )
}

export default Cart