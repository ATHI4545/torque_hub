import React from 'react';
import { cars } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Listing = ({ searchTerm }) => {
  const navigate=useNavigate()
  const handleBookNow=(car)=>{
    navigate('/cardetail',{state:{car}})
  }
  const filteredCars = cars
    .filter((item) => {
      return searchTerm
        ? item.carname.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
    })
    .slice(0, 6);

  return (
    <div className="shadow py-6 mt-10">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="h-auto w-full rounded shadow  flex flex-col justify-between p-4 bg-gray-600"
            >
              <div className="mt-4">
                <img src={car.image} className='w-full h-40' alt="" />
                <p>
                  <span className="font-semibold mt-5">Car name:</span> {car.carname}
                </p>
                <p>
                  <span className="font-semibold mt-5">Car model:</span> {car.model}
                </p>
                <button
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() =>handleBookNow(car)}
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
    </div>
  );
};

export default Listing;