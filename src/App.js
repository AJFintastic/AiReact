// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Products from './pages/Products';   // new
import ProductDetail from './pages/ProductDetail'; // new
import Dashboard from './pages/Dashboard';


// Optionally customize Material UI's theme (colors, typography, etc.)
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c5364', // a teal-ish color
    },
    secondary: {
      main: '#00b4d8',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
