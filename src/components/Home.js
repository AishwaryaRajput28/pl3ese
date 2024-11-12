import React from 'react';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1D1E2C, #00BFA5)',  // Dark navy to sky blue gradient
      color: '#FFFFFF',  // White text for readability on dark background
      textAlign: 'center',
      fontFamily: '"Poppins", sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease-in-out',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        animation: 'fadeIn 1s ease-out'
      }}>
        Welcome to MyWebsite!
      </h1>

      <p style={{
        fontSize: '1.25rem',
        maxWidth: '700px',
        lineHeight: '1.8',
        marginBottom: '30px',
        fontWeight: '300',
        animation: 'fadeIn 1.5s ease-out',
        opacity: '0.9'
      }}>
        This is a place where you can explore a variety of content, sign up to stay updated, and learn more about us.
        We’re thrilled to have you here and can’t wait for you to explore our features. Dive in and enjoy!
      </p>

      <button style={{
        padding: '15px 30px',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#FFFFFF',
        backgroundColor: '#00BFA5',  // Sky blue color for button
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
        marginTop: '20px',
        letterSpacing: '1px'
      }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#008C7A';  // Darker shade of sky blue for hover effect
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#00BFA5';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
