import React from 'react';

const FoodImage = ({ src, alt }) => {
  const imageStyle = {
    width: '359px',                    // Ancho de la imagen
    height: '236px',                   // Altura de la imagen
    backgroundColor: 'red',            // Color de fondo rojo
    borderRadius: '19px 19px 100px 19px',  // Radio de borde: inferior derecho 100px, otros 19px
    boxShadow: '5px 5px 15px rgba(0,0,0,.5)'  // Agrega sombra con desplazamiento horizontal y vertical, difuminado y color
  };

  return (
    <img src={src} alt={alt} style={imageStyle} />
  );
};

export default FoodImage;