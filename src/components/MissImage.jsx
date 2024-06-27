import React from 'react';

const MissImage = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="sm:mt-4 sm:ml-9 object-cover"
    />
  );
};

export default MissImage;