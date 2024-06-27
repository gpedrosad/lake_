// import React from 'react';
import GreenButton from './GreenButton';  // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

const ImageText = () => {
  return (
    <div className="w-2/3 md:w-500 lg:ml-20 md:mr-20 md:ml-32 xl:ml-48 sm:ml-20 xs:w-full lg:ml-60 xl:ml-66 sm:mr-20">
      <h1 className="text-custom-green font-rufina font-bold py-4 text-4xl md:text-3xl xs:text-3xl xs:">Celebrate your special event <span class="text-yellow-500">under the stars</span>, surrounded by lush rainforest</h1>
      <p className="py-4 text-xl md:text-lg text-custom-green">Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await. Discover a trifecta of atmospheres that elevate your dining journey.</p>
      <div className="py-4">

        <GreenButton text="Explore"></GreenButton>
      </div>
    </div>
  );
};

export default ImageText;