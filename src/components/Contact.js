import React from 'react';

function Contact() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2>Contact Us</h2>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <input type="text" placeholder="Name" style={{
          margin: '10px 0',
          padding: '10px',
          width: '250px',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }} />
        <input type="email" placeholder="Email" style={{
          margin: '10px 0',
          padding: '10px',
          width: '250px',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }} />
        <textarea placeholder="Your Message" style={{
          margin: '10px 0',
          padding: '10px',
          width: '250px',
          height: '100px',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }} />
        <button type="submit" style={{
          padding: '10px 20px',
          background: '#6e8efb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
