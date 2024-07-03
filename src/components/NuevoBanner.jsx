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
  <div className="relative bg-[#B8CAA8] grid grid-cols-1 lg:grid-cols-10 g:grid-rows-8 gap-5">
    <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20 lg:w-30 lg:h-30" />
    <div className="col-start-1 lg:col-span-3 lg:row-span-5 lg:col-start-2 lg:row-start-2 flex md:flex-none justify-center">
      <img src={nalita2} className="shadow-none p-10 lg:p-0 mt-10 lg:pt-10" />
    </div>
  <div className="lg:col-span-4 lg:row-span-4 lg:col-start-6 lg:row-start-2 lg:xl:row-start-2">
  <div className="flex flex-col items-center justify-center lg:mb-10 lg:mt-24">
  <div className="flex items-center space-x-1">
    <img src={ramaizq} alt="Descripción de la imagen" className="w-15 h-15" />
    <h1 className="p-2 font-rufina font-bold text-3xl text-third-green md:text-4xl lg:text-5xl text-center">
  Where the Rainforest<br/>
  <span>meets the Lake</span>
</h1>
    <img src={ramader} alt="Descripción de la imagen" className="w-15 h-15" />
    </div>
    
  </div>
      <p className="font-inika font-normal text-lg md:text-xl lg:text-2xl p-20 lg:p-0">
        As you walk around our beautiful gardens, stroll through our historic Teahouse and dip your toes in the natural waters of Lake Barrine, you might find, just like I did, that falling in love with this place comes easy.
      </p>
    </div>
    <div className="lg:col-span-6 lg:col-start-2 lg:row-start-7">
      <div className="w-full border-t-4 border-new-green mt-8"></div>
    </div>

  <div className="col-start-1 lg:col-span-2 lg:col-start-8 lg:row-start-7 flex justify-center mb-16 md:mb-10 lg:flex-none lg:justify-start lg:ml-20">
    <Link to='/about'>
      <TransparentButton className="" text="About us" />
    </Link>
  </div>
  <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20 lg:w-30 lg:h-30" />
  </div>


  );
};

export default NuevoBanner;
