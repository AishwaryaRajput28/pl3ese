import React from 'react';

function Content() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#1D1E2C',  // Dark navy background
      color: 'white'
    }}>
      <h2>Our Content</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          width: '200px',
          padding: '20px',
          backgroundColor: '#E6E6E6',  // Light gray background for cards
          color: '#1D1E2C',  // Dark navy text color for contrast
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s'
        }}>Card 1: Lorem ipsum dolor sit amet...</div>
        
        <div style={{
          width: '200px',
          padding: '20px',
          backgroundColor: '#E6E6E6',
          color: '#1D1E2C',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s'
        }}>Card 2: Lorem ipsum dolor sit amet...</div>
        
        <div style={{
          width: '200px',
          padding: '20px',
          backgroundColor: '#E6E6E6',
          color: '#1D1E2C',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s'
        }}>Card 3: Lorem ipsum dolor sit amet...</div>
      </div>
    </div>
  );
}

export default Content;
