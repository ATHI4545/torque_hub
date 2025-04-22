import React, { Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import Navbar from '../components/Navbar';
import { FaCar, FaCarSide, FaArrowLeft, FaStar } from 'react-icons/fa';
import { MdModelTraining } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { SiGodotengine } from 'react-icons/si';
import { FaArrowsSpin } from 'react-icons/fa6';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[1, 1, 1]} />;
}

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      {/* Car Info Section */}
      <div className="shadow py-4 mt-24 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl mx-auto max-w-4xl">
        <div>
          <img src={car.image} width={200} height={200} alt="Car" />
        </div>
        <div className="ml-10 mt-3 flex flex-col gap-2.5">
          <div className="flex items-center p-2">
            <FaCar className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.carname}</p>
          </div>
          <div className="flex items-center p-2">
            <MdModelTraining className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.model}</p>
          </div>
          <div className="flex items-center p-2">
            <GiMoneyStack className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.price}</p>
          </div>
        </div>
        <div className="ml-10 mt-3 flex flex-col gap-2.5">
          <div className="flex items-center p-2">
            <SiGodotengine className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.engine}</p>
          </div>
          <div className="flex items-center p-2">
            <FaCarSide className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.type}</p>
          </div>
          <div className="flex items-center p-2">
            <FaArrowsSpin className="w-10 h-8 mr-5" />
            <p className="text-xl">{car.torque}</p>
          </div>
        </div>
      </div>

      {/* 3D Model Viewer Section */}
      <div className="mt-20 mx-auto w-[700px]">
        <h2 className="text-xl font-semibold text-center mb-4">🔁 3D Model View</h2>
        <div className="h-[300px] bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl shadow-lg">
          {car?.model3D ? (
            <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls />
              <Suspense fallback={
                <Html>
                  <p className="text-white">Loading 3D model...</p>
                </Html>
              }>
                <Model url={car.model3D} />
              </Suspense>
            </Canvas>
          ) : (
            <div className="flex items-center justify-center h-full text-white text-xl">
              3D model not available
            </div>
          )}
        </div>
        {/* Rating Below 3D Model */}
        <div className="flex justify-center items-center gap-1 text-yellow-400 text-xl mt-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
          <span className="text-white ml-2 text-base">(4.9/5)</span>
        </div>
        {/* Add to Book and Add to Cart Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow-md transition">
            Add to Book
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Interior Image Section */}
      <div className="mt-10 mx-auto w-[700px]">
        <img
          src={car.intimage}
          className="rounded-2xl shadow-lg"
          alt="Interior"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12 mb-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
        >
          <FaArrowLeft />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CarDetails;