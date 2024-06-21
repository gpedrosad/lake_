import './UserItem.css'
import VerifiedCustomer from '../verified_customer/VerifiedCustomer';
import PropTypes from 'prop-types';
import RatingComponent from '../rating_item/RatingItem';
 
function UserItem ({src,userName, defaultValue, colorName, colorRating, colorStar}) {
    return(
        <>
            <div className='user_container'>
                <div className='user_info'>
                <div id='div_username_userimage'>
                    <div className='user_image_container'>
                        <img src={src} className='user_image'/>
                    </div>
                    <div className='user_name_container'>
                        <div>
                        <h2 className='font-rufina text-bold sm:text-4xl whitespace-nowrap color' style={{ color: colorName }}>{userName}</h2>
                        </div>
                        <div>
                            <VerifiedCustomer />
                        </div>
                    </div>
                    </div>
                    <div className='rating_u_component'>
                        <RatingComponent defaultValue={defaultValue} colorStar={colorStar} colorRating={colorRating}/>
                    </div>
                </div>



            </div>
        </> 
    )
}

UserItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    userName: PropTypes.string,
    defaultValue: PropTypes.number,
    colorName: PropTypes.string

};

export default UserItem; 