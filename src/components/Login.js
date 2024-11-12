import React, { useState } from 'react';

function Login() {
  // State variables to manage user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1D1E2C, #00BFA5)',  // Gradient background with dark navy and sky blue
      color: '#333',
      fontFamily: '"Poppins", sans-serif'
    }}>
      <div style={{
        width: '400px',
        padding: '40px',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',  // White card background for contrast
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        transition: 'transform 0.3s',
        transform: 'scale(1)',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={{
          fontSize: '2rem',
          color: '#1D1E2C',  // Dark navy title
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome Back
        </h2>
        <p style={{
          color: '#6E8EF5',  // Soft blue text for a welcoming subtitle
          marginBottom: '30px'
        }}>
          Please sign in to your account
        </p>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #6E8EF5',  // Border color matching the subtitle
                outline: 'none',
                fontSize: '1rem',
                color: '#333'
              }}
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #6E8EF5',
                outline: 'none',
                fontSize: '1rem',
                color: '#333'
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#00BFA5',  // Bright sky blue for button
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            boxShadow: '0px 8px 15px rgba(0, 191, 165, 0.3)',
          }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#009A8A';  // Darker shade for hover
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#00BFA5';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
