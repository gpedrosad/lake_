import React from 'react';

// Añadiendo `width`, `height`, `fontSize`, `backgroundColor`, y `textColor` como props con valores por defecto
const GreenButton = ({
  text,
  onClick,
  width = '160px',
  height = '58px',
  fontSize = '16px',
  backgroundColor = '#3C5220',  // Color de fondo predeterminado
  textColor = 'white'           // Color de texto predeterminado
}) => {
  const buttonStyle = {
    width: width,                  // Usando la prop `width` para el ancho del botón
    height: height,                // Usando la prop `height` para la altura del botón
    backgroundColor: backgroundColor,  // Usando la prop `backgroundColor`
    color: textColor,              // Usando la prop `textColor`
    borderRadius: '8px',           // Radio del borde
    border: 'none',                // Sin borde
    fontSize: fontSize,            // Usando la prop `fontSize` para el tamaño del texto
    cursor: 'pointer'              // Cursor como puntero
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default GreenButton;