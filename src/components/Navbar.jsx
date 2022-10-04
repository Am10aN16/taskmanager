import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
          
          <Button color="inherit" sx={{backgroundColor:"yellow",fontWeight:700 ,color:"black"}}>Login/SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar