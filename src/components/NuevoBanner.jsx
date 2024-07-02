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
  <div className="relative bg-[#B8CAA8] grid grid-cols-10 grid-rows-8 gap-5">
    <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20 lg:w-30 lg:h-30" />
    <div className="col-span-4 row-span-5 col-start-2 row-start-2">
      <img src={nalita2} className="shadow-none p-10 lg:p-0" />
    </div>
  <div className="col-span-4 row-span-4 col-start-6 row-start-2 xl:row-start-3">
  <div className="flex flex-col items-center justify-center lg:mb-10">
  <div className="flex items-center space-x-1">
    <img src={ramaizq} alt="Descripción de la imagen" className="w-15 h-15" />
    <h1 className="p-2 font-rufina font-bold text-2xl text-third-green md:text-3xl lg:text-5xl text-center">
      Where the Rainforest
    </h1>
    <img src={ramader} alt="Descripción de la imagen" className="w-15 h-15" />
    </div>
    <h1 className="p-2 font-rufina font-bold text-2xl text-third-green md:text-3xl lg:text-5xl text-center">
      meets the Lake
    </h1>
  </div>
      <p className="font-inika font-normal text-xl md:text-2xl lg:text-3xl">
        As you walk around our beautiful gardens, stroll through our historic Teahouse and dip your toes in the natural waters of Lake Barrine, you might find, just like I did, that falling in love with this place comes easy.
      </p>
    </div>
    <div className="col-span-6 col-start-2 row-start-7">
      <div className="w-full border-t-4 border-new-green mt-8"></div>
    </div>

  <div className="col-span-2 col-start-9 row-start-7">
    <Link to='/about'>
      <TransparentButton className="" text="About us" />
    </Link>
  </div>
  <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20 lg:w-30 lg:h-30" />
  </div>


  );
};

export default NuevoBanner;
