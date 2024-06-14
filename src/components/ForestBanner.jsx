import React from 'react';
import YellowButton from './YellowButton';

const ForestBanner = () => {
  return (
    <div className="relative overflow-hidden shadow-lg w-auto sm:h-[800px]">
      <img className="absolute inset-0 w-full h-full object-cover" src="src/assets/images/arboles.png" alt="Árboles" />
      <div className="absolute inset-0 bg-custom-green opacity-50"></div>
      <div className="absolute inset-0 grid place-items-center z-10 p-6 md:flex md:items-center md:justify-center">
        <img src="../src/assets/images/hojablanca.png" alt="Descripción de la imagen" style={{ width: '60px', height: '60px' }} className="m-5 md:mb-40"/>
        <h1 className="text-white md:text-4xl sm:text-4xl font-rufina font-bold text-center mt-14 xl:mt-4">
          Explore the rainforest in our walk of 5 km around the lake
        <div class="flex justify-center pt-20">
          <YellowButton text="Explore"/>
        </div>
        </h1>
        <img src="../src/assets/images/hojablanca2.png" alt="Descripción de la imagen" style={{ width: '50px', height: '50px' }} className="m-5 md:mb-40"/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ForestBanner;