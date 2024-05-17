import React from 'react';

const YellowButton = ({ text, onClick }) => {
  const buttonStyle = {
    width: '198px',            // Ancho del botón
    height: '72px',            // Altura del botón
    backgroundColor: '#F0B92B',// Color de fondo
    color: '#273812',          // Color del texto
    borderRadius: '8px',       // Radio del borde
    border: 'none',            // Sin borde
    fontSize: '18px',          // Tamaño del texto
    cursor: 'pointer',         // Cursor como puntero
    display: 'flex',           // Centrado del texto usando Flexbox
    justifyContent: 'center',  // Centrado horizontal del texto
    alignItems: 'center',      // Centrado vertical del texto
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default YellowButton;