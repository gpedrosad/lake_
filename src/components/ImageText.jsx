// import React from 'react';
import GreenButton from './GreenButton';  // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import { Link } from 'react-router-dom';

const ImageText = () => {
  return (
    <div className="sm:mb-36 md:mb-0">
      <h1 className="text-custom-green font-rufina font-bold py-6 xl:text-3xl 2xl:text-5xl sm:text-xl md:text-3xl lg:text-3xl xs:text-3xl ">Celebrate your special event <span class="text-yellow-500">under the stars</span>, Where moments become unforgettable memories</h1>
      <p className="py-4 text-sm sm:text-md md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-custom-green 2xl:text-3xl">From cosy veranda chats over a hot cup of tea, to gathering with your favourite people and watching the sunset from the deck of our boat, Lake Barrine has something for everyone.</p>
      <p className="text-sm sm:text-md md:text-md lg:text-lg xl:text-xl text-custom-green 2xl:text-3xl">Then underneath that please change the 5km wording to:</p>
      <p className="text-sm sm:text-md md:text-md lg:text-lg xl:text-xl text-custom-green 2xl:text-3xl">Explore the Rainforest with our 5km walking track through beautiful century old National
Park.</p>

      <div className="py-4">

    <Link to='/functions'>
    <button className="mb-10 md:mb-0 w-48 h-16 bg-[#3C5220] text-white rounded-lg text-lg cursor-pointer" onclick="window.location.href='URL_AQUI'">
      Explore</button>
      </Link>
    </div>
    </div>
  );
};

export default ImageText;