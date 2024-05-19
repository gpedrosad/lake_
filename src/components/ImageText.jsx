import React from 'react';
import GreenButton from './GreenButton';  // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

const ImageText = () => {
  return (
    <div class="w-2/3 md: w-500">
      <h1 class="font-rufina font-bold py-4 text-4xl">Celebrate your special event under the stars, surrounded by lush rainforest</h1>
      <p class="py-4 text-xl">Immerse yourself in the warm embrace of our indoor oasis, savor al-fresco moments on our charming outdoor terrace, or unwind at the stylish bar where crafted libations await. Discover a trifecta of atmospheres that elevate your dining journey.</p>
      <div class="py-4">

        <GreenButton text="Explore"></GreenButton>
      </div>
    </div>
  );
};

export default ImageText;