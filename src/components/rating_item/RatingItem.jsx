import './RatingItem.css'
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

function RatingComponent ({defaultValue, colorStar, colorRating}) {
    return (
        <div className='rating_component'>
            <div>
            <Rating name="size-medium" defaultValue={defaultValue} precision={0.5} readOnly sx={{ color: colorStar }}/>

            </div>
            <div>
            <p style={{ color: colorRating}}>{defaultValue} rating</p>

            </div>
        </div>
    )
} 

RatingComponent.propTypes = {
    defaultValue: PropTypes.number,
    colorRating: PropTypes.string,
    colorStar: PropTypes.string,
};

export default RatingComponent;