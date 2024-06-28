// import React from 'react';
import GreenButton from './GreenButton';  // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

const ImageText = () => {
  return (
    <div className="">
      <h1 className="text-custom-green font-rufina font-bold py-6 lg:text-3xl md:text-3xl xs:text-3xl">Celebrate your special event <span class="text-yellow-500">under the stars</span>, surrounded by lush rainforest</h1>
      <p className="py-4 text-xl md:text-xl text-custom-green">Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await. Discover a trifecta of atmospheres that elevate your dining journey.</p>
      <div className="py-4">

        <GreenButton text="Explore"></GreenButton>
      </div>
    </div>
  );
};

export default ImageText;