import React from 'react';

const Chef = () => {
  return (
    <div className="p-8 bg-black">
      {/* Main heading for the food items */}
      <h1 className="text-white text-center text-4xl sm:text-5xl mb-4 font-extralight">Chefs</h1>
      <h2 className="text-yellow-600 text-center text-5xl sm:text-6xl mb-8 font-extrabold">Meet Our Chef</h2>

      {/* Grid Layout for Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        
        <div className="text-center">
          <img
            src="/pic1.jpg"
            alt="Placeholder 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-center">
          <img
            src="/pic2.jpg"
            alt="Placeholder 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-center">
          <img
            src="/pic4.jpg"
            alt="Placeholder 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="text-center">
          <img
            src="/pic3.jpg"
            alt="Placeholder 4"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Centering the button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-red-600 text-xl sm:text-2xl">
          See Menu
        </button>
      </div>
    </div>
  );
};

export default Chef;
