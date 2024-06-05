import React from 'react';
import CustomImage from './CustomImage';
import ImageAbout from './ImageAbout';
import TransparentButton from './TransparentButton';

const LightGreenBannerDos = () => {
  return (
    <div className="grid md:grid-cols-3">
      <div className="relative w-full bg-[#B8CAA8] md:col-span-1">
        <div className="md:flex-1 md:relative">
          <img src="../src/assets/images/hojaizq.png" alt="Descripción de la imagen" className="absolute top-0 left-0 w-20 h-20" />
        </div>
        <div className="grid grid-cols-1 items-center gap-10 justify-items-center md:m-10">
          <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
          <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
          <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 rounded-3xl" />
        </div>
        <img src="../src/assets/images/hojader.png" alt="Descripción de la imagen" className="absolute bottom-0 right-0 w-20 h-20" />
      </div>
      <div className="relative w-full bg-[#F7F7F7] grid grid-cols-1 items-center justify-items-center px-10 py-5 md:col-span-2">
        <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-custom-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">About us</h1>
        <div className="w-full bg-yellow-500 h-0.5 sm:mt-5 sm:mb-5"></div>
        <p className="text-justify text-xl">
        Lake Barrine is a beautiful natural lake located in the Atherton Tablelands of Far North Queensland, Australia. This freshwater lake was formed approximately 17,000 years ago by volcanic processes, specifically by the collapse of a large magma chamber. The resulting crater was later filled by rainwater, creating what is known today as a maar—a broad, shallow volcanic crater filled by a lake.        </p>
        <img src="src/img/huevos.png" alt="Imagen" className="h-2/3 w-96 rounded-3xl w-3/4" />

      </div>
    </div>
  );
}

export default LightGreenBannerDos;