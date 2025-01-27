// frontend/src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 4, py: 2, backgroundColor: '#f3f3f3', textAlign: 'center' }}>
      <Typography variant="subtitle1" component="p" gutterBottom>
        Contact us at:
      </Typography>

      <Box>
        <MuiLink href="mailto:clinton@fintasticdata.co.za" sx={{ display: 'block' }}>
          clinton@fintasticdata.co.za
        </MuiLink>
        <MuiLink href="mailto:akshar@fintasticdata.co.za" sx={{ display: 'block' }}>
          akshar@fintasticdata.co.za
        </MuiLink>
        <MuiLink href="mailto:eugene@fintasticdata.co.za" sx={{ display: 'block' }}>
          eugene@fintasticdata.co.za
        </MuiLink>
      </Box>

      <Typography variant="body2" sx={{ mt: 1 }}>
        &copy; {new Date().getFullYear()} fintasticdata.com. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
