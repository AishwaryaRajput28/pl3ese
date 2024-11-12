import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Content from './components/Content';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            {/* Add Contact route if needed */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
