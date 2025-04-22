import React, { useState } from 'react';

const Hero = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchTerm(input.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="shadow py-4 mt-20 flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl mx-auto max-w-2xl">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Find it, Love it, Drive it</h3>
        <h3 className="text-2xl font-bold">Drive into the world of today with TorqueHub cars</h3>
      </div>
      <div className="flex items-center mt-10 w-full max-w-md border rounded-full bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a car..."
          className="flex-1 p-2 text-black rounded-l-full border-none outline-none"
          aria-label="Search for a car"
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-900 outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;