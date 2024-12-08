import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { FaSignal } from 'react-icons/fa';
import { PiHamburger, PiVan } from 'react-icons/pi';

const Menu = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Image */}
        <div className="flex flex-col space-y-4">
          {/* Smaller images below the main image */}
          <div className="flex flex-wrap gap-4">
            <img
              src="/salad.jpeg" // Replace with the correct image path
              alt="Small Food 1"
              className="w-full sm:w-1/2 md:w-1/2 h-auto object-cover rounded-lg shadow-md"
            />
            <img
              src="/mushroom.jpeg" // Replace with the correct image path
              alt="Small Food 2"
              className="w-full sm:w-1/2 md:w-1/2 h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section - Text content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-2xl font-bold text-green-900">
            <span className="text-black">Why </span>Choose Us
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400">
            <span className="text-yellow-400">Why </span>We are the best
          </h1>

          <p className="text-lg text-black">
            Expertly Prepared Our skilled chefs prepare each dish with care and precision
            <br />
            Unique and Flavorful Innovative Recipes We constantly experiment with new flavors and techniques to create unique dishes
            <br />
            Authentic Cuisine Our chefs are passionate about bringing you authentic flavors from around the world
            <br />
            Exceptional Service Friendly Staff Our friendly and knowledgeable staff is dedicated to providing excellent customer service
          </p>

          {/* List of buttons arranged in two rows */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {/* Top row buttons */}
            <button className="flex items-center justify-start space-x-4 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-yellow-400 transition font-extrabold">
              <span className="text-3xl">
                <PiHamburger />
              </span>
              <span>Fast Food</span>
            </button>
            <button className="flex items-center justify-start space-x-4 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-yellow-400 transition font-extrabold">
              <span className="text-3xl">
                <PiVan />
              </span>
              <span>Lunch</span>
            </button>

            {/* Bottom row buttons */}
            <button className="flex items-center justify-start space-x-4 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-yellow-400 transition font-extrabold">
              <span className="text-3xl">
                <CiTimer />
              </span>
              <span>Dinner</span>
            </button>
            <button className="flex items-center justify-start space-x-4 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-yellow-400 transition font-extrabold">
              <span className="text-3xl">
                <FaSignal />
              </span>
              <span>Drinks</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
