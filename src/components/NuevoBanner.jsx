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
    <div className="relative w-full bg-[#B8CAA8] grid grid-cols-10 grid-rows-2">
      <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20 lg:w-40 lg:h-40" />
      <div className="col-start-2 col-span-4 row-start-1 row-span-2">
        <img src={nalita2} className="shadow-none m-20" />
      </div>
    
      <div className="col-start-6 col-span-4 row-start-1 row-span-1 mt-40 relative">
        <div class="grid grid-cols-3">
        <img src={ramaizq} alt="Descripción de la imagen" className="w-20 h-20 ml-52" />
        <h1 className="whitespace-nowrap font-rufina font-bold text-2xl text-third-green md:text-3xl lg:text-5xl text-center">Our Story</h1>
        <img src={ramader} alt="Descripción de la imagen" className="w-20 h-20" />
        </div>
        <span className="font-rufina font-bold text-lg text-custom-green md:text-xl lg:text-2xl"></span>
        <p className="font-inika font-normal text-xl lg:text-2xl mt-5">
          As you walk around our beautiful gardens, stroll through our historic Teahouse and dip your toes in the natural waters of Lake Barrine, you might find, just like I did, that falling in love with this place comes easy.   
          </p>
      </div>
      <div class="mt-72 ml-20 col-start-2 col-span-5 row-start-2 row-span-4 w-full border-t-4 border-new-green"></div>
      <div class="col-start-8 row-start-2">

          <Link to='/about'>
          <TransparentButton className="mt-64" text="About us" />
          </Link>
      </div>
        <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20 lg:w-40 lg:h-40" /> 
    </div>
  );
};

export default NuevoBanner;
