import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white text-black text-center py-12">
        <h1 className="text-6xl font-extrabold text-green-900">Welcome to Elite Food</h1>
        <p className="mt-4 text-2xl">
          Experience the ultimate taste and freshness about food
          Our mission is to serve delicious high quality meals that satisfy your cravings
          From our farm fresh ingredients to our expert chefs we are committed to providing an unforgettable dining experience
        </p>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Food Item */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="/chicken.jpeg"
              alt="Chicken"
              className="w-full h-96 object-cover" // Increased height here
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">Delicious Chicken</h2>
              <p className="mt-4 text-gray-700">
                Enjoy our freshly prepared chicken with a perfect blend of spices and
                seasonings that will tantalize your taste buds
              </p>
            </div>
          </div>

          {/* Second Food Item */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="/burger.jpg"
              alt="Burger"
              className="w-full h-96 object-cover" // Increased height here
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">Juicy Burgers</h2>
              <p className="mt-4 text-gray-700">
                Savor the taste of our juicy burgers crafted with the finest
                ingredients and loaded with flavors that you will love
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
