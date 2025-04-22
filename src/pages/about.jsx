import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '50px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
        backgroundSize: '400% 400%',
        animation: 'gradientFlow 20s ease infinite',
        color: '#f1f1f1',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '30px',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', color: '#65c2ff', marginBottom: '20px' }}>
          About TorqueHub Showroom
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
          <strong>TorqueHub</strong> is your premier destination for high-performance, luxury, and electric vehicles.
          Located in the heart of the city, our showroom offers a fusion of innovation, design, and performance.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
          We proudly showcase world-class automotive brands like Porsche, Tesla, Lamborghini, BMW, Audi, and many more.
          Our goal is to help you experience the thrill of top-tier driving, with personalized service and state-of-the-art
          3D car previews.
        </p>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Whether you're passionate about speed, sustainability, or pure luxury — TorqueHub is where your dream car
          becomes reality.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#65c2ff',
            color: '#000',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#4ea6dd')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#65c2ff')}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default About;
