// frontend/src/components/NavBar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or Brand Name */}
        <Typography variant="h6" component="div">
          fintasticdata.com
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About Us
          </Button>
          <Button component={Link} to="/analytics" color="inherit">
            Analytics
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
