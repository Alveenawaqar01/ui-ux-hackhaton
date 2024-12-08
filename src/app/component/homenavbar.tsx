"use client";

import { BsFillHandbagFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white  backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl lg:text-4xl text-yellow-500 font-extrabold tracking-wide">
          Elite
        </h1>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 z-10" : "hidden"
          } lg:flex lg:relative lg:top-0 lg:w-auto lg:flex-row lg:space-x-8 lg:items-center`}
        >
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-500 px-2 py-1 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar and Icon */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 text-black shadow-sm focus-within:ring-2 ring-yellow-500">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-32 lg:w-64 text-black"
            />
            <IoSearch className="text-xl text-black" />
          </div>

          <BsFillHandbagFill className="text-3xl text-black hover:text-yellow-500 transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
