import { AppBar, Box, Button, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { ReactComponent as Logo } from '../../logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Toolbar>
          <SvgIcon component={Logo} inheritViewBox sx={{ fontSize: '36px' }} />
          <Link to="/" style={{textDecoration: 'none', flexGrow: 1}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat', fontWeight: '600', fontSize: '18px', color: '#32304D' }}>
              Prosperi.io
            </Typography>
          </Link>
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ color: '#32304D' }}
            >
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ color: '#000000' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header