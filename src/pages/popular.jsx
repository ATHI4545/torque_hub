import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const popularCars = [
  {
    name: 'Tesla Model S Plaid',
    image: 'https://images.overdrive.in/wp-content/uploads/2021/06/2021-Tesla-Model-S-Plaid-4.jpg',
    description: 'Top-notch electric performance and cutting-edge tech.',
  },
  {
    name: 'Porsche Taycan Turbo S',
    image: 'https://images-porsche.imgix.net/-/media/41EB928C4F674C449FDA7EE2C10CCA01_12139A2E0C5041BFB166A8520566F095_TA24Q3DIX0011-taycan-turbo-front?w=999&q=85&auto=format',
    description: 'High-performance EV with a luxury edge.',
  },
  {
    name: 'Lamborghini Urus',
    image: 'https://billeder.bilbasen.dk/bilinfo/fe9ec6f8-452c-4e90-a562-3278d4f616e9.jpeg?class=S960X960',
    description: 'The ultimate luxury SUV with monstrous power.',
  },
  {
    name: 'BMW i8 Roadster',
    image: 'https://ymimg1.b8cdn.com/resized/car_model/7409/pictures/7435790/webp_mobile_listing_main_01.webp',
    description: 'Hybrid sports car with futuristic design.',
  },
];

const Popular = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bgFlow {
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
        padding: '60px 20px',
        background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
        backgroundSize: '400% 400%',
        animation: 'bgFlow 15s ease infinite',
        color: '#fff',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#65c2ff', marginBottom: '40px' }}>
        Popular Cars in Demand
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {popularCars.map((car, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '15px', fontSize: '1.4rem' }}>{car.name}</h3>
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#ddd' }}>{car.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#65c2ff',
            color: '#000',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'background-color 0.3s',
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Popular;
