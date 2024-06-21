import './ChatBubble.css'
import PropTypes from 'prop-types';

const ChatBubble = ({ text }) => {
  return (
    <div className='chat_bubble_container'>
      <div className='triangle_chat_bubble'></div>
      <p className='p_chat_bubble_container'>{text}</p>
    </div>
  );
};

ChatBubble.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default ChatBubble; 
