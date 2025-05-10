import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { MdLocalCarWash } from 'react-icons/md';

const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  const [confirmed, setConfirmed] = useState(false);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleConfirmBooking = () => {
    if (date && timeSlot) {
      setConfirmed(true);
    } else {
      alert('Please select both date and time slot to confirm your booking.');
    }
  };

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10 mt-24 bg-gradient-to-r from-gray-700 to-gray-800 shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">📅 Booking Details</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Car Image */}
          <img
            src={car.image}
            alt={car.carname}
            className="w-full md:w-64 h-48 object-contain rounded-xl shadow-lg border border-gray-600"
          />

          {/* Car Details */}
          <div className="flex flex-col justify-around space-y-3">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-yellow-400">
              <MdLocalCarWash /> {car.carname}
            </h3>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-400" /> {car.address}
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" /> {car.mobile_no}
            </p>
            <p>🏢 Showroom: <strong>{car.sh_name}</strong></p>
            <p className="text-sm text-gray-300">📅 Available: <strong>Monday - Saturday</strong>, 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Booking Date & Slot */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium text-white">Select Date:</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-white">Select Time Slot:</label>
            <select
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option value="">-- Select Slot --</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Confirm Button or Confirmation Message */}
        <div className="mt-10 flex justify-center">
          {!confirmed ? (
            <button
              onClick={handleConfirmBooking}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg text-lg transition"
            >
              Confirm Booking
            </button>
          ) : (
            <div className="flex items-center gap-3 text-green-400 text-xl font-semibold mt-4">
              <FaCheckCircle className="text-2xl" />
              Booking Confirmed for {date} at {timeSlot}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
          >
            <FaArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
