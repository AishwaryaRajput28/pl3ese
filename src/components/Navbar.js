import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#1D1E2C',  // Dark navy background color
      color: 'white',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
    }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>MyWebsite</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.1rem', 
          fontWeight: '500',
          transition: 'color 0.3s'
        }} 
        onMouseOver={(e) => e.target.style.color = '#00BFA5'}  // Teal color for hover effect
        onMouseOut={(e) => e.target.style.color = 'white'}
        >
          About Us
        </Link>
        <Link to="/signup" style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.1rem', 
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#00BFA5'}
        onMouseOut={(e) => e.target.style.color = 'white'}
        >
          Sign Up
        </Link>
        <Link to="/login" style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.1rem', 
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#00BFA5'}
        onMouseOut={(e) => e.target.style.color = 'white'}
        >
          Login
        </Link>
        <Link to="/content" style={{
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '1.1rem', 
          fontWeight: '500',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#00BFA5'}
        onMouseOut={(e) => e.target.style.color = 'white'}
        >
          Content
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
