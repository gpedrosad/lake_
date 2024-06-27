import React from 'react';

const FoodImage = ({ src, alt }) => {
  const imageStyle = {
    margin: '0px 0px 0px 20px'      
  };

  return (
    <img src={src} alt={alt} style={imageStyle} />
  );
};

export default FoodImage;