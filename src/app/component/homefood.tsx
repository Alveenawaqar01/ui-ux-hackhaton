import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Food = () => {
  return (
    <div className="bg-white text-black py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Text content */}
        <div className="space-y-8">
          <div className="text-3xl text-green-900 font-semibold">About Us</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            <span className="text-green-900">Food</span> Create the best
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">foody product</h1>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum Urna elit augue urna vitae feugiat pretium donec id elementum Ultrices mattis sed vitae massa risus Lacus nisi et ac dapibus sit eu velit in consequat
          </p>

          {/* Buttons Container with gap */}
          <div className="flex space-x-6 flex-wrap">
            {/* Filled Button */}
            <button className="bg-green-800 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition">
              Show More
            </button>

            {/* Border Button (Stroke) with FaPlay icon */}
            <button className="border-2 border-green-800 text-green-800 py-3 px-8 rounded-lg flex items-center space-x-2 hover:bg-green-100 transition">
              <FaPlay />
              <span>Watch Now</span>
            </button>
          </div>
        </div>

        {/* Right Section - Image options */}
        <div className="flex flex-col space-y-6">
          {/* Large Image with reduced height and shadow */}
          <img
            src="/lemon.jpeg"
            alt="Food Image 1"
            className="w-full h-60 lg:h-80 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
          />

          {/* Smaller Images Below */}
          <div className="flex space-x-6 flex-wrap">
            <img
              src="/chicken.jpeg"
              alt="Food Image 2"
              className="w-full sm:w-1/2 lg:w-1/2 h-48 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/salad.jpeg"
              alt="Food Image 3"
              className="w-full sm:w-1/2 lg:w-1/2 h-48 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
