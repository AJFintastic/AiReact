// frontend/src/components/Services.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  'Artificial Intelligence (AI)',
  'Data Solutions',
  'Automations',
  'Data Science',
  'Applications (Apps)',
  'AI and Data Outsourcing',
];

function Services() {
  return (
    <Box sx={{ py: 4, backgroundColor: '#f8f8f8' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="subtitle1" align="center">
        Delivering Comprehensive Solutions Across Various Domains
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2, px: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <CardContent>
                <Typography variant="h6" align="center">
                  {service}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
