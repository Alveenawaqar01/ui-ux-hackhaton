import React from 'react';

const Food = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Text content */}
        <div className="flex-1 space-y-6 mb-8 md:mb-0">
          <div className="text-2xl text-yellow-500">About Us</div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-orange-500">We</span> Create the best 
          </h1>
          <h1 className='text-4xl md:text-6xl font-bold'>foody product</h1>
          <p className="text-lg md:text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis sed vitae massa risus Lacus nisi et ac dapibus sit eu velit in consequat
          </p>

          {/* List of items */}
          <ul className="space-y-2">
            <li className="flex items-center text-gray-300">
              <span className="text-yellow-400 mr-2">✔</span>
              Lacinia magna vitae purus
            </li>
            <li className="flex items-center text-gray-300">
              <span className="text-yellow-400 mr-2">✔</span>
              Quisque diam pellentesque bibendum non
            </li>
            <li className="flex items-center text-gray-300">
              <span className="text-yellow-400 mr-2">✔</span>
              Duis viverra est placerat
            </li>
          </ul>

          {/* Read more button */}
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 md:ml-8">
          <img
            src="/food.jpg" // Replace with the correct image path
            alt="Foody Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Food;
