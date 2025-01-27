// frontend/src/components/DataViz.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function DataViz() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('/api/data') 
      .then((resp) => resp.json())
      .then((json) => setChartData(json.data || []))
      .catch((err) => console.log('Error:', err));
  }, []);

  const data = {
    labels: chartData.map((_, i) => `Item ${i + 1}`),
    datasets: [
      {
        label: 'API Data',
        data: chartData,
        backgroundColor: 'rgba(75,192,192,0.5)',
      },
    ],
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Data Visualization</Typography>
      <Bar data={data} />
    </Box>
  );
}

export default DataViz;
