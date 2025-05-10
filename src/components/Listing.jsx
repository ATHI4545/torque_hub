import React from 'react';
import { cars } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';

const Listing = ({ searchTerm }) => {
  const navigate = useNavigate();

  const handleBookNow = (car) => {
    navigate('/cardetails', { state: { car } });
  };

  const filteredCars = cars
    .filter((item) => {
      return searchTerm
        ? item.carname.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
    })
    .slice(0, 6);

  return (
    <div className="shadow py-6 mt-10 flex flex-col min-h-screen justify-between">
      {/* Car Listing Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="h-auto w-full rounded shadow flex flex-col justify-between p-4 bg-gray-600"
            >
              <div className="mt-4">
                <img src={car.image} className="w-full h-40 object-cover rounded-md" alt={car.carname} />
                <p>
                  <span className="font-semibold mt-5">Car name:</span> {car.carname}
                </p>
                <p>
                  <span className="font-semibold mt-5">Car model:</span> {car.model}
                </p>
                <button
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => handleBookNow(car)}
                >
                  Visit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            {searchTerm
              ? `No cars found for "${searchTerm}".`
              : 'Search for cars to see results.'}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-white py-8 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">CarRentalX</h2>
          <p className="text-gray-400 mb-4">Your dream ride is just a click away.</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-4 text-lg">
            <a
              href="https://www.linkedin.com/in/yourlinkedinid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://t.me/yourtelegramid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://www.instagram.com/yourinstagramid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Contact & Info */}
          <p className="text-sm mb-2">
            📞 Contact: <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
          </p>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} CarRentalX. All rights reserved.</p>
        

          {/* Car Brand Logos */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 items-center">
            {[
              {
                name: 'Porsche',
                src: 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png',
              },
              {
                name: 'BMW',
                src: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png',
              },
              {
                name: 'Tesla',
                src: 'https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-Transparent-File.png',
              },
              {
                name: 'Audi',
                src: 'https://pngimg.com/d/car_logo_PNG1640.png',
              },
              {
                name: 'Mercedes',
                src: 'https://freepnglogo.com/images/all_img/1719941399mercedes-car-logo-black.png',
              },
              {
                name: 'Lamborghini',
                src: 'https://pngimg.com/d/lamborghini_PNG10709.png',
              },
            ].map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                title={logo.name}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Listing;
