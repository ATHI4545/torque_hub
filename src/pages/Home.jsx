import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Listing from '../components/Listing';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(-45deg, #1d2b64, #3a1c71,rgb(24, 43, 41), #65c2ff)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite',
      }}
    >
      <div
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Hero setSearchTerm={setSearchTerm} />
        <Listing searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;
