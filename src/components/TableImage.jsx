import React from 'react';

const TableImage = ({ src, alt }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="sm:ml-10 object-cover xs:mt-10 sm:mt-10 xs:mb-10 md:mt-0 md:mb-0"
    />
  );
};

export default TableImage;