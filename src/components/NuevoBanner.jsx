// import React from 'react';
// import CustomImage from './CustomImage'; // Asegúrate de tener este componente o cámbialo por uno existente
import TransparentButton from './TransparentButton'; // Asegúrate de tener este componente o cámbialo por uno existente
import { Link } from 'react-router-dom';

// Importar imágenes
import hojaIzq from '/public/images/hojaizq.png';
import nalita2 from '/public/images/nalita2.png';
import hojaDer from '/public/images/hojader.png';
import ramaizq from '/public/images/ramaizq.svg';
import ramader from '/public/images/ramader.svg';



const NuevoBanner = () => {
  return (
    <div className="lg:relative w-full bg-[#B8CAA8] grid grid-cols-1 lg:grid-cols-10 lg:grid-rows-2">
  <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20 lg:w-30 lg:h-30" />
  
  <div className="relative col-start-1 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2 flex justify-center lg:flex-none lg:justify-start xl:mb-20">
  <img src={nalita2} className="shadow-none md:m-20 object-contain" />
</div>

  <div className="lg:col-start-6 lg:col-span-4 lg:row-start-1 lg:row-span-1 lg:mt-40 relative">
    <div className="grid grid-cols-3">
      <img src={ramaizq} alt="Descripción de la imagen" className="w-20 h-20 lg:ml-24 ml-48 mb-10" />
      <h1 className="lg:col-start-2 whitespace-nowrap font-rufina font-bold text-2xl text-third-green md:text-3xl lg:text-5xl text-center">Our Story</h1>
      <img src={ramader} alt="Descripción de la imagen" className="w-20 h-20 lg:col-start-3 lg:ml-10" />
    </div>
    <span className="font-rufina font-bold text-lg text-custom-green md:text-xl lg:text-2xl"></span>
    <p className="font-inika font-normal text-xl lg:text-2xl mt-5 p-20 lg:p-0">
      As you walk around our beautiful gardens, stroll through our historic Teahouse and dip your toes in the natural waters of Lake Barrine, you might find, just like I did, that falling in love with this place comes easy.
    </p>
  </div>

  <div className="mt-10 lg:mt-72 lg:ml-20 col-start-1 lg:col-start-2 lg:col-span-5 lg:row-start-2 lg:row-span-4 w-full border-t-4 border-new-green"></div>

  <div className="col-start-1 lg:col-start-8 lg:row-start-2 mt-10 lg:mt-0 flex justify-center">
    <Link to='/about'>
      <TransparentButton className="lg:mt-64 mb-10 lg:mb-0" text="About us" />
    </Link>
  </div>

  <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20 lg:w-30 lg:h-30" />
</div>
  );
};

export default NuevoBanner;
