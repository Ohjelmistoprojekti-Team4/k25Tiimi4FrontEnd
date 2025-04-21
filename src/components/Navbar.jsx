// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#d2b48c',
      color: '#5C4033',
      border: "2px solid #5C4033"
    }}>
      <h1 style={{ fontSize: '1.5rem' }}>AnimalTrend</h1>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/k25Tiimi4FrontEnd" style={{ color: '#5C4033', textDecoration: 'none' }}>Home</Link>
        <Link to="/k25Tiimi4FrontEnd/about" style={{ color: '#5C4033', textDecoration: 'none' }}>About</Link>
        <Link to="/k25Tiimi4FrontEnd/products" style={{ color: '#5C4033', textDecoration: 'none' }}>Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
