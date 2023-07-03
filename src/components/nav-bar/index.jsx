import React from 'react'
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CartWidget from './cart-widget';

const NavBar = () => {

  const cart = 2;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#daa2de'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            El Emporio de La Ardilla
          </Typography>
          <CartWidget cartQuantity={cart}/>
        </Toolbar>
      </AppBar>
    </Box>
  )

}

export default NavBar;