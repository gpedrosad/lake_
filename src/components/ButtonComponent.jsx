import PropTypes from 'prop-types';

const ButtonComponent = ({
  text,
  onClick,
  width = '160px',
  height = '58px',
  fontSize = '16px',
  backgroundColor,
  borderRadius,  
  textColor = 'white'           
}) => {
  const buttonStyle = {
    width: width,                  
    height: height,                
    backgroundColor: backgroundColor, 
    color: textColor,              
    borderRadius: borderRadius,           
    border: 'none',                
    fontSize: fontSize,           
    cursor: 'pointer'              
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    additionalClasses: PropTypes.string,
  };

export default ButtonComponent;