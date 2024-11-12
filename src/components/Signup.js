import React, { useState } from 'react';

function Signup() {
  // State variables to manage user input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1D1E2C, #00BFA5)',  // Matching gradient background
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
          color: '#1D1E2C',  // Dark navy for title
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
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
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
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
          <div style={{ marginBottom: '30px' }}>
            <label style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
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
            backgroundColor: '#00BFA5',  // Sky blue button
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            boxShadow: '0px 8px 15px rgba(0, 191, 165, 0.3)',
          }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#009A8A';  // Darker sky blue on hover
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#00BFA5';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
