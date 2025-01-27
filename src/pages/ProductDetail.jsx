// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();       // grabs :id from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://tasteapi.onrender.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // data should be a single product object
        setProduct(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to load product details');
      });
  }, [id]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  // Display product info
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Product Detail</h1>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock Quantity:</strong> {product.stock_quantity}</p>
      <p><strong>Category:</strong> {product.category || 'N/A'}</p>
      <p><strong>Sub Category:</strong> {product.sub_category || 'N/A'}</p>
      <p><strong>Description:</strong> {product.description || 'N/A'}</p>
      <p><strong>Features:</strong> {product.features || 'N/A'}</p>
      <p><strong>Type:</strong> {product.type}</p>
      <p><strong>Is Active:</strong> {product.is_active ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ProductDetail;
