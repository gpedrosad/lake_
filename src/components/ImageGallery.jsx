import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImgIndex(index);
  };

  const closeModal = () => {
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
      <div className="flex flex-wrap justify-center items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => openModal(index)}
            className="cursor-pointer max-w-[100px] m-1 hover:opacity-75"
          />
        ))}
      </div>

      {selectedImgIndex !== null && (
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