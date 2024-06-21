import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-action-area">
        <img src={image} alt="card image" className="card-media" />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-description">{description}</p>
          <div className="card-actions">
            <button className="card-button">Discover our location</button>
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
 