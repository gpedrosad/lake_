import React from 'react';

const MissImage = ({ src, alt }) => {
  const imageStyle = {
    width: '358px',                    // Ancho de la imagen
    height: '284px',                   // Altura de la imagen
    backgroundColor: '#B2DFDB',        // Color de fondo verde agua (aquí se usa el código hexadecimal para verde agua)
    borderRadius: '19px 19px 19px 129px',
    boxShadow: '5px 5px 15px rgba(0,0,0,.5)'  // Agrega sombra con desplazamiento horizontal y vertical, difuminado y color  // Radio de borde: inferior izquierdo 129px, otros 19px
  };

  return (
    <img src={src} alt={alt} style={imageStyle} />
  );
};

export default MissImage;