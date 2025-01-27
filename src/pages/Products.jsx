// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://tasteapi.onrender.com/products/')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // data should be an array of products
        setProducts(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to load products');
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Products</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!error && products.length === 0 && (
        <p>Loading products...</p>
      )}

      {!error && products.length > 0 && (
        <ul>
          {products.map((item) => (
            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
              <Link to={`/products/${item.id}`}>
                <strong>{item.name}</strong> - ${item.price}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
