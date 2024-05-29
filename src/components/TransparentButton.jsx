import React from 'react';


const TransparentButton = ({ text, onClick }) => {
    const buttonStyle = {
      width: '227px',
      height: '55px',
      backgroundColor: 'transparent',
      border: '3px solid #000', // Puedes cambiar el color del borde si deseas
      borderRadius: '0', // Rectangular
      color: '#000', // Color del texto
      fontSize: '16px', // Tamaño del texto
      cursor: 'pointer'
    };
  
    return (
      <>
        <button style={buttonStyle} onClick={onClick}>
          {text}
        </button>
      </>
    );
  };
  
  export default TransparentButton;