import React from 'react';
import CustomImage from './CustomImage'; // Asegúrate de tener este componente o cámbialo por uno existente
import TransparentButton from './TransparentButton'; // Asegúrate de tener este componente o cámbialo por uno existente

const NuevoBanner = () => {
  return (
    <div className="relative w-full bg-[#B8CAA8] grid md:grid-cols-2">
    <div className="relative grid place-items-center">
      <img src="../src/assets/images/hojaizq.png" alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20"/>
        <img src="src/assets/images/nalita2.png" class="w-auto max-w-xs shadow-none mt-24 md:mt-0 lg:mt-0 m-24" />

    </div>
  
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-1 gap-4">
        <div className="text-center md:mt-32">
          <h1 className="whitespace-nowrap font-rufina font-bold text-2xl text-custom-green md:text-3xl">Lake Barrine Teahouse</h1>
          <span className="font-rufina font-bold text-xl text-custom-green md:text-2xl">Where the lake meets the rainforest</span>
        </div>
        <p className="font-inika font-normal ml-10 mr-10 mt-5 mb-20 text-xl">
          Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.
        </p>
        <div class="flex justify-center align-center mb-10 md:mb-20">

        <TransparentButton className="" text="About us"/>
        </div>
      </div>
      <img src="../src/assets/images/hojader.png" alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20"/> 
    </div>
  </div>
  );
};

export default NuevoBanner;