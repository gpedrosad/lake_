import React from "react";

const ImageAbout = ({ imageUrl }) => {
  return (
    <div className="sm:m-14 bg-gray-200 rounded-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-2">
      <img
        src={imageUrl}
        alt="Imagen"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ImageAbout;