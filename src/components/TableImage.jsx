import React from 'react';

const TableImage = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-[345px] h-[371px] rounded-[190px_19px_19px_19px] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] object-cover"
    />
  );
};

export default TableImage;