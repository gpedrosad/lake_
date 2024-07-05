// import React from 'react';
import GreenButton from './GreenButton';  // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import { Link } from 'react-router-dom';

const ImageText = () => {
  return (
    <div className="sm:mb-36 md:mb-0">
      <h1 className="text-custom-green font-rufina font-bold py-6 xl:text-5xl 2xl:text-5xl sm:text-xl md:text-3xl lg:text-3xl xs:text-3xl text-center">Where moments become <span class="text-yellow-500">unforgettable memories</span></h1>
      <p className="py-4 text-sm sm:text-md md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl text-custom-green 2xl:text-3xl text-center">From cosy veranda chats over a hot cup of tea, to gathering with your favourite people and watching the sunset from the deck of our boat, Lake Barrine has something for everyone.</p>
      

      <div className="py-4 flex justify-center">

    <Link to='/functions'>
    <button className="mb-10 md:mb-0 w-48 h-16 bg-[#3C5220] text-white rounded-lg text-lg cursor-pointer" onclick="window.location.href='URL_AQUI'">
      Explore</button>
      </Link>
    </div>
    </div>
  );
};

export default ImageText;