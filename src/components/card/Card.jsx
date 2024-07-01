import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, description, image }) => {
  return ( 
    <div className="card">
      <div className="card-action-area">
        <img src={image} alt="card image" className="card-media" />
        <div className="card-content">
          <div className='title-container'>
            <h5 className="card-title">{title}</h5>
          </div>
          <div className='description-container'>
            <p className="card-description">{description}</p>
          </div>
          <div className="card-actions">
            <Link to='/contact'>
              <button className="card-button">Discover our location</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;

 
 