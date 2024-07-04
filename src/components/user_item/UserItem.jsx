import './UserItem.css';
import VerifiedCustomer from '../verified_customer/VerifiedCustomer';
import PropTypes from 'prop-types';
import RatingComponent from '../rating_item/RatingItem';

function UserItem({ src, userName, defaultValue, colorName, colorRating, colorStar }) {
    return (
        <>
            <div className='user_container'>
                <div className='user_info'>
                    <div id='div_username_userimage'>
                        <div className='flex justify-center items-center'>
                            <img src={src} className='w-36 h-36 rounded-full object-cover border-4 border-white' alt={userName} />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <div>
                                <h2 className='font-rufina sm:text-3xl whitespace-nowrap mb-2' style={{ color: colorName }}>{userName}</h2>
                            </div>
                            <div>
                                <VerifiedCustomer />
                            </div>
                        </div>
                    </div>
                    <div className='rating_u_component'>
                        <RatingComponent defaultValue={defaultValue} colorStar={colorStar} colorRating={colorRating} />
                    </div>
                </div>
            </div>
        </>
    );
}

UserItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    userName: PropTypes.string,
    defaultValue: PropTypes.number,
    colorName: PropTypes.string
};

export default UserItem;