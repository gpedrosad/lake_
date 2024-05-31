import React from 'react';

const MenuLine = () => {
  return (
    <div className="w-screen h-32 flex justify-center items-center bg-white">
      <div className="w-full bg-yellow-500 h-0.5"></div>
      <span className="font-rufina text-6xl font-bold m-10 text-custom-green">Menu</span>
      <div className="w-full bg-yellow-500 h-0.5"></div>
    </div>
  );
}

export default MenuLine;