// src/pages/Analytics.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Toolbar,
  Grid,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import StatsCard from '../components/StatsCard';

import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DataUsageIcon from '@mui/icons-material/DataUsage';

import { Bar, Pie } from 'react-chartjs-2';  
import 'chart.js/auto';

function Analytics() {
  // Tracks which tab is active:
  // 0 = "Overview", 1 = "FintasticAi", 2 = "Products"
  const [activeTab, setActiveTab] = useState(0);

  // -------------------------
  // 1) OVERVIEW TAB DATA (your original bar chart + stats)
  // -------------------------
  const overviewData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 150, 300, 450, 400],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        fill: true,
        tension: 0.4
      }
    ]
  };
  const overviewOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  // -------------------------
  // 2) FINTASTIC AI TAB DATA (Pie chart example)
  // -------------------------
  const fintasticAiData = {
    labels: ['AI', 'Data', 'Automation'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EBcc', '#FFCE56cc', '#FF6384cc']
      }
    ]
  };
  const fintasticAiOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  // -------------------------
  // 3) PRODUCTS TAB (NEW)
  // Fetch the products from your Render API and display details.
  // -------------------------
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsError, setProductsError] = useState('');

  // Only fetch products once, or whenever we switch to the Products tab (optional approach).
  useEffect(() => {
    // If we only want to fetch on the "Products" tab, check if activeTab === 2
    if (activeTab === 2 && products.length === 0) {
      fetch('https://tasteapi.onrender.com/products/')
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setProductsError('Failed to load products');
        });
    }
  }, [activeTab, products.length]);

  // When user clicks a product, show its details
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
        <Topbar />

        {/* Push content below Topbar */}
        <Toolbar />

        <Box sx={{ p: 2 }}>
          {/* Tabs for switching among Overview, FintasticAi, and Products */}
          <Tabs
            value={activeTab}
            onChange={(e, newVal) => setActiveTab(newVal)}
            textColor="primary"
            indicatorColor="primary"
            sx={{ mb: 2 }}
          >
            <Tab label="Overview" />
            <Tab label="FintasticAi" />
            <Tab label="Products" />
          </Tabs>

          {/* =============== OVERVIEW TAB (Index 0) =============== */}
          {activeTab === 0 && (
            <Box>
              {/* Stats row */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard
                    title="Active Users"
                    value="36K"
                    subtitle="+23% than last week"
                    icon={<PeopleIcon fontSize="large" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard
                    title="Clicks"
                    value="2M"
                    icon={<TrendingUpIcon fontSize="large" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard
                    title="Sales"
                    value="$435"
                    icon={<ShoppingCartIcon fontSize="large" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard
                    title="Data Items"
                    value="43"
                    icon={<DataUsageIcon fontSize="large" />}
                  />
                </Grid>
              </Grid>

              {/* Bar chart row */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={8}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Sales Overview
                      </Typography>
                      <Bar data={overviewData} options={overviewOptions} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Orders Overview
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +24% this month
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2">● $2400, Design changes</Typography>
                        <Typography variant="body2">● New order #1832412</Typography>
                        <Typography variant="body2">● Server payments for April</Typography>
                        <Typography variant="body2">● New card added for order #4395133</Typography>
                      </Box>

                      <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Button
                          variant="contained"
                          component={Link}
                          to="/about"
                        >
                          More Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* =============== FINTASTIC AI TAB (Index 1) =============== */}
          {activeTab === 1 && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        FintasticAi Overview
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Automated insights with AI, Data, and Automation
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Pie data={fintasticAiData} options={fintasticAiOptions} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Explore FintasticAi
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Dive deeper into our AI solutions or manage your automation setups.
                      </Typography>

                      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button
                          variant="outlined"
                          component={Link}
                          to="/services"
                        >
                          Our Services
                        </Button>
                        <Button
                          variant="contained"
                          component={Link}
                          to="/contact"
                        >
                          Contact Us
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* =============== PRODUCTS TAB (Index 2) =============== */}
          {activeTab === 2 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Products
              </Typography>

              {productsError && (
                <Typography color="error" gutterBottom>
                  {productsError}
                </Typography>
              )}

              {/* If no error and no products yet, show "Loading" */}
              {!productsError && products.length === 0 && (
                <Typography>Loading products...</Typography>
              )}

              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        Product List
                      </Typography>
                      
                      {/* List of products */}
                      {products.map((prod) => (
                        <Box
                          key={prod.id}
                          sx={{
                            borderBottom: '1px solid #ccc',
                            cursor: 'pointer',
                            py: 1
                          }}
                          onClick={() => handleSelectProduct(prod)}
                        >
                          <Typography>
                            <strong>{prod.name}</strong> — ${prod.price}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>

                {/* If a product is selected, show details on the right */}
                <Grid item xs={12} md={6}>
                  {selectedProduct && (
                    <Card sx={{ boxShadow: 2 }}>
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          Product Details
                        </Typography>
                        <Typography><strong>Name:</strong> {selectedProduct.name}</Typography>
                        <Typography><strong>Price:</strong> ${selectedProduct.price}</Typography>
                        <Typography><strong>Stock:</strong> {selectedProduct.stock_quantity}</Typography>
                        <Typography><strong>Category:</strong> {selectedProduct.category || 'N/A'}</Typography>
                        <Typography><strong>Sub Category:</strong> {selectedProduct.sub_category || 'N/A'}</Typography>
                        <Typography><strong>Description:</strong> {selectedProduct.description || 'N/A'}</Typography>
                        <Typography><strong>Features:</strong> {selectedProduct.features || 'N/A'}</Typography>
                        <Typography><strong>Type:</strong> {selectedProduct.type || 'N/A'}</Typography>
                        <Typography><strong>Active:</strong> {selectedProduct.is_active ? 'Yes' : 'No'}</Typography>
                      </CardContent>
                    </Card>
                  )}

                  {/* If no product is selected, you could show a placeholder */}
                  {!selectedProduct && (
                    <Typography>Select a product to see details</Typography>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Analytics;
