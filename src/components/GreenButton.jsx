import React from 'react';

// Añadiendo `width`, `height`, `fontSize`, `backgroundColor`, `textColor` como props con valores por defecto
const GreenButton = ({
  text,
  url, // Prop para la URL a la que el botón debe redirigir
  width = '160px',
  height = '58px',
  fontSize = '16px',
  backgroundColor = '#3C5220',  // Color de fondo predeterminado
  textColor = 'white'           // Color de texto predeterminado
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: '8px',
    border: 'none',
    fontSize: fontSize,
    cursor: 'pointer'
  };

  // Función para manejar el clic, redirige a la URL
  // const handleClick = () => {
  //   window.location.href = url; // Redirige al usuario a la URL proporcionada
  // };

  return (
    <button style={buttonStyle} >
      {text}
    </button>
  );
};

export default GreenButton;