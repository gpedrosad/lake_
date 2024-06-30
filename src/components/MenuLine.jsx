import React from 'react';

const MenuLine = () => {
  return (
    <div className="w-full h-32 flex flex-col justify-center items-center bg-white xl:mt-10">
      <div className="flex items-center w-full">
        <div className="flex-grow bg-yellow-500 h-0.5"></div>
        <span className="font-rufina text-6xl font-bold mx-4 text-custom-green xl:text-7xl">Menu</span>
        <div className="flex-grow bg-yellow-500 h-0.5"></div>
      </div>
    </div>
  );
}

export default MenuLine;

