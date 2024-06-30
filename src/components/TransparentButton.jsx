import React from 'react';


const TransparentButton = ({ text, onClick, className}) => {
    const buttonStyle = {
      width: '270px',
      height: '70px',
      backgroundColor: 'transparent',
      border: '3px solid #000', // Puedes cambiar el color del borde si deseas
      borderRadius: '0', // Rectangular
      color: '#000', // Color del texto
      fontSize: '16px', // Tamaño del texto
      cursor: 'pointer',
      
    };
  
    return (
      <>
        <button style={buttonStyle} onClick={onClick} className={`${className} tu-clase-default-de-estilo`}>
          {text}
        </button>
      </>
    );
  };
  
  export default TransparentButton;