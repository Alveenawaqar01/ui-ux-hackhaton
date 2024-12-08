import React from 'react';
import { PiCookie, PiHamburger } from 'react-icons/pi';
import { RiDrinks2Line } from 'react-icons/ri';

const Menu = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section - Image */}
        <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
          <img
            src="/sandswich.png" // Replace with the correct image path
            alt="Foody Image"
            className="w-full lg:w-[700px] h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Smaller images below the main image */}
          <div className="flex space-x-4 mt-4 overflow-x-auto lg:overflow-hidden">
            <img
              src="/burger2.png" // Replace with the correct image path
              alt="Small Food 1"
              className="w-[30%] h-auto object-cover rounded-lg shadow-md"
            />
            <img
              src="/chicken.jpeg" // Replace with the correct image path
              alt="Small Food 2"
              className="w-[30%] h-auto object-cover rounded-lg shadow-md"
            />
            <img
              src="/plate3.jpeg" // Replace with the correct image path
              alt="Small Food 3"
              className="w-[30%] h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section - Text content */}
        <div className="flex-1 space-y-6">
          <div className="text-2xl text-yellow-500 font-medium">Why Choose us</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-orange-500">Ex</span>Ordinary taste
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">And Experienced</h1>
          <p className="text-lg sm:text-xl text-white ml-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat
            Ultrices mattis sed vitae massa risus Lacus nisi et ac dapibus sit eu velit in consequat
          </p>

          {/* List of items */}
          <ul className="space-y-2 flex flex-col items-start ml-2">
            <li className="text-white flex items-center space-x-4">
              <span className="text-yellow-400 text-3xl sm:text-4xl">
                <PiHamburger />
              </span>
              <span>Fast Food</span>
            </li>
            <li className="text-white flex items-center space-x-4">
              <span className="text-yellow-400 text-3xl sm:text-4xl">
                <PiCookie />
              </span>
              <span>Lunch</span>
            </li>
            <li className="text-white flex items-center space-x-4">
              <span className="text-yellow-400 text-3xl sm:text-4xl">
                <RiDrinks2Line />
              </span>
              <span>Dinner</span>
            </li>
          </ul>

          {/* Read more button */}
          <button className="bg-white py-2 px-6 rounded-lg hover:bg-orange-600 transition text-xl sm:text-2xl lg:text-3xl font-extrabold text-yellow-500 ml-4">
            30+ <span className="text-black text-lg sm:text-2xl">Year of Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
