import React from 'react';
import CustomImage from './CustomImage'; // Asegúrate de tener este componente o cámbialo por uno existente
import TransparentButton from './TransparentButton'; // Asegúrate de tener este componente o cámbialo por uno existente

// Importar imágenes
import hojaIzq from '/public/images/hojaizq.png';
import nalita2 from '/public/images/nalita2.png';
import hojaDer from '/public/images/hojader.png';

const NuevoBanner = () => {
  return (
    <div className="relative w-full bg-[#B8CAA8] grid md:grid-cols-2">
      <div className="relative grid place-items-center">
        <img src={hojaIzq} alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20" />
        <img src={nalita2} className="w-auto max-w-xs shadow-none mt-24 md:mt-0 lg:mt-0 m-24 xs:m-10" />
      </div>
    
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center md:mt-32">
            <h1 className="whitespace-nowrap font-rufina font-bold text-2xl text-custom-green md:text-3xl">Our Story</h1>
            <span className="font-rufina font-bold text-lg text-custom-green md:text-xl"></span>
          </div>
          <p className="font-inika font-normal ml-10 mr-10 mt-5 mb-20 text-xl">
          As you walk around our beautiful gardens, stroll through our historic Teahouse and dip your toes in the natural waters of Lake Barrine, you might find, just like I did, that falling in love with this place comes easy.   
          </p>
          <div className="flex justify-center align-center mb-20">
            <TransparentButton className="" text="About us" />
          </div>
        </div>
        <img src={hojaDer} alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20" /> 
      </div>
    </div>
  );
};

export default NuevoBanner;
