import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './Header.css';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar colo position="static">
        <Toolbar >
        <IconButton>
               <img src='https://homelift-configurator.tkelevator.com/media/tke/tke-gradient.svg' height='80' width='80'></img>
              </IconButton>
        
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header