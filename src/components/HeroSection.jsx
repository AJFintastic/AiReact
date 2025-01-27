// frontend/src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: '#fff',
        py: 8, // vertical padding
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Fintastic Data
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          We harness the power of AI, Data Science, and Automation to drive business growth.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
