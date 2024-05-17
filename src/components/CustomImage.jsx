import React from 'react';

const CustomImage = ({ src, alt }) => {
  const imageStyle = {
    width: '341px',
    height: '324px',
    backgroundColor: 'grey',
    borderRadius: '187px 29px 29px 29px',  // Define el radio del borde para cada esquina
    boxShadow: '5px 5px 15px rgba(0,0,0,.5)'  // Agrega sombra con desplazamiento horizontal y vertical, difuminado y color
  };

  return (
    <img src={src} alt={alt} style={imageStyle} />
  );
};

export default CustomImage;