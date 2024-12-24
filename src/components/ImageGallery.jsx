import React from 'react';

function ImageGallery({ images }) {
  const openPDF = () => {
    window.open('/images/menu%20lake%20barrine.pdf', '_blank');
  };

  return (
    <div>
      {/* Mostrar solo la primera imagen inicialmente */}
      <div className="flex justify-center items-center m-5 relative">
        <img
          src={images[0].src}
          alt={images[0].alt}
          onClick={openPDF}
          className="cursor-pointer max-w-[500px] m-1 hover:opacity-75"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          Click to open PDF 📷
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;