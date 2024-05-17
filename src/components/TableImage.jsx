import React from 'react';

const TableImage = ({ src, alt }) => {
  const imageStyle = {
    width: '345px',                    // Ancho de la imagen
    height: '371px',                   // Altura de la imagen
    borderRadius: '190px 19px 19px 19px',  // Radio de borde: superior izquierdo 190px, otros 19px
    boxShadow: '5px 5px 15px rgba(0,0,0,.5)'  // Agrega sombra con desplazamiento horizontal y vertical, difuminado y color
  };

  return (
    <img src={src} alt={alt} style={imageStyle} />
  );
};

export default TableImage;