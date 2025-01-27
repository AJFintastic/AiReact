import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function StatsCard({ title, value, subtitle, icon }) {
  return (
    <Card sx={{ minWidth: 200, boxShadow: 2 }}>
      <CardContent>
        {icon && <div>{icon}</div>}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography color="text.secondary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default StatsCard;
