import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [metrics, setMetrics] = useState({ totalRevenue: 0, totalProducts: 0, totalStock: 0 });
  const [salesData, setSalesData] = useState([]);

  // Fetch products and calculate metrics
  useEffect(() => {
    fetch('https://tasteapi.onrender.com/products/')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Calculate metrics
        const totalRevenue = data.reduce((sum, product) => sum + product.price, 0);
        const totalProducts = data.length;
        const totalStock = data.reduce((sum, product) => sum + product.stock_quantity, 0);
        setMetrics({ totalRevenue, totalProducts, totalStock });
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  // Mock sales data for chart (Replace with actual API if available)
  useEffect(() => {
    setSalesData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [500, 600, 700, 800, 650, 900], // Replace with API data if needed
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
        <Topbar />
        <Toolbar />

        <Box sx={{ p: 2 }}>
          {/* Metrics Section */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Revenue</Typography>
                  <Typography variant="h4">${metrics.totalRevenue.toFixed(2)}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Products</Typography>
                  <Typography variant="h4">{metrics.totalProducts}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Total Stock</Typography>
                  <Typography variant="h4">{metrics.totalStock}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Sales Overview Chart */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Sales Overview</Typography>
                  {salesData && <Bar data={salesData} />}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Products Table */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>Products Overview</Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Stock</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Active</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>${product.price.toFixed(2)}</TableCell>
                            <TableCell>{product.stock_quantity}</TableCell>
                            <TableCell>{product.category || 'N/A'}</TableCell>
                            <TableCell>{product.is_active ? 'Yes' : 'No'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
