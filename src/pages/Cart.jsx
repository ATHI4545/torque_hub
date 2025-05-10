import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import { getCartItems, removeFromCart } from '../Firebase'; // Assume removeCartItem is implemented

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCartItems();
  }, []);

  // Handle booking a visit for a car
  const handleBookVisit = (item) => {
    navigate('/book', { state: { car: item } });
  };

  // Handle removing item from cart
  const handleRemoveItem = async (id) => {
    await removeFromCart(id); // Optional Firebase removal
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <Navbar />
      <div className="container mx-auto mt-24 px-4 z-10 relative">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-white">
            Your cart is empty.{' '}
            <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/')}>
              Go shopping!
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl shadow-lg p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.carname}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{item.carname}</h2>
                <p className="text-gray-300">Model: {item.model}</p>
                <p className="text-gray-300">Price: ${item.price.toLocaleString()}</p>

                <div className="mt-4 flex gap-3">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow-md transition"
                    onClick={() => handleBookVisit(item)}
                  >
                    Book now
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl shadow-md transition"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

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
    </div>
  );
};

export default Cart;
