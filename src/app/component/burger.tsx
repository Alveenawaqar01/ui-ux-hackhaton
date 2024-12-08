import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { LuChefHat } from 'react-icons/lu';

const Burger = () => {
  return (
    <>
      {/* Rectangle div */}
      <div className="w-full max-w-[1600px] h-64 bg-black shadow-md rounded-lg flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-28 px-4">
        {/* Icon 1 */}
        <div className="text-center text-yellow-500">
          <LuChefHat className="text-6xl sm:text-8xl" />
          <p className="text-xl sm:text-4xl mt-2 text-white">Chef</p>
        </div>
        {/* Icon 2 */}
        <div className="text-center text-yellow-500">
          <GiKnifeFork className="text-6xl sm:text-8xl" />
          <p className="text-xl sm:text-4xl mt-2 text-white">Dinning</p>
        </div>
        {/* Icon 3 */}
        <div className="text-center text-yellow-500">
          <FaPizzaSlice className="text-6xl sm:text-8xl" />
          <p className="text-xl sm:text-4xl mt-2 text-white">Experience</p>
        </div>
        {/* Icon 4 */}
        <div className="text-center text-yellow-500">
          <IoFastFoodOutline className="text-6xl sm:text-8xl" />
          <p className="text-xl sm:text-4xl mt-2 text-white">Customer</p>
        </div>
      </div>
    </>
  );
}

export default Burger;
