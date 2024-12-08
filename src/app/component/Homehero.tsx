

const Heropage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row justify-center items-center w-full">
      {/* Left Section (Text Content) */}
      <div className="text-center md:text-left md:w-1/2 space-y-6 ml-4">
        <p className="text-4xl text-green-900 mb-6 px-4 font-medium">Healthy Tasty Food</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 ml-2">
          Enjoy Healthy Life
        </h1>

        {/* Gap between headings */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 ml-4">
          and Tasty Food
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-black mb-6 px-4">
          A restaurant is a place where food and drinks are prepared and served to customers Restaurants can vary in their appearance offerings and service models Some things to know about restaurants
        </p>

        {/* Buttons Container */}
        <div className="flex space-x-4 justify-center md:justify-start ml-3">
          <button className="bg-green-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-200 transition duration-300">
            See Menu
          </button>

          <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-200 transition duration-300">
            Place an Order
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
       <img
       
       
       src="/vegplate.png" // Replace with your image path
       alt="plate"
       width={800} // Adjusted width
       height={600} // Adjusted height
     /> 
      </div>
    </div>
  );
};

export default Heropage;
