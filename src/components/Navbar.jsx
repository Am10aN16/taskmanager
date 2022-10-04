import * as React from 'react';
import {AppBar , Box , Toolbar , Button, IconButton}from '@mui/material';
import Logo from "../assets/logo.png"

const Navbar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={Logo} alt="" style={{height:40,width:140}}/>
          </IconButton>
          
          <Button color="inherit" className='loginbutton' sx={{backgroundColor:"#8c52ff",fontWeight:700 ,color:"white"}}>Login/SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar