import './RatingItem.css'
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

function RatingComponent ({defaultValue}) {
    return (
        <div className='rating_component'>
        <Rating name="size-medium" defaultValue={defaultValue} precision={0.5} readOnly/>
        <p>{defaultValue} rating</p>
        </div>
    )
}

RatingComponent.propTypes = {
    defaultValue: PropTypes.number
};

export default RatingComponent