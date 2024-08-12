import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openModal = () => {
    setSelectedImgIndex(0); // Mostrar la primera imagen en el carrusel
    setIsGalleryOpen(true); // Abrir el carrusel
  };

  const closeModal = () => {
    setIsGalleryOpen(false);
    setSelectedImgIndex(null);
  };

  const nextImage = () => {
    setSelectedImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImgIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div>
      {/* Mostrar solo la primera imagen inicialmente */}
      <div className="flex justify-center items-center m-5">
        <img
          src={images[0].src}
          alt={images[0].alt}
          onClick={openModal}
          className="cursor-pointer max-w-[300px] m-1 hover:opacity-75"
        />
      </div>

      {/* Mostrar el carrusel al hacer clic en la imagen inicial */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative bg-white rounded-lg shadow-xl">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
              <span className="text-2xl">&times;</span>
            </button>
            <img src={images[selectedImgIndex].src} alt={images[selectedImgIndex].alt} className="max-w-[80vw] max-h-[80vh] p-4" />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2">
              &larr;
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2">
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;