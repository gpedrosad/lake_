import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from '../user_comment/UserComment';
import './RatingSlider.css';

//img
import imgUserMindy from '/public/images/user-mindy-monahan.png'
import imgUserMary from '/public/images/pexels-olly-733872.jpg'
import imgUserMan from '/public/images/man-299488_1280.jpg'

import leftBackground from '/public/images/Groupleft399.png'
import rightBackgound from '/public/images/Groupright398.png'
import topBackground from '/public/images/Group399.png'
import bottomBackground from '/public/images/Group398.png'

const testimonialData = [
  {
    id: 1,
    component: <UserCommentComponent 
                  text={'The BEST BLT EVER!! As a BLT connoisseur this is the best one I have ever had, the bacon was cooked perfectly , everything about it was DELICIOUS! Highly highly recommend, and the staff were really lovely and friendly too. It’s also in a great location with fab views of the lake!'}
                  src={imgUserMindy} 
                  userName={"Holly"}
                  defaultValue={5.0}
                  colorStar='#8DA260'
                  city=""
                  
                  />
  },
  {
    id: 2,
    component: <UserCommentComponent 
                  text={'Really friendly staff, great iced coffee, amazing views over the lake. Thoroughly recommended!! Also a lovely short circular walk through the rainforest starting from the tea house.'}
                  src={imgUserMary} 
                  userName={"Karen"}
                  defaultValue={5.0}
                  colorStar='#8DA260'
    />
  },
  {
    id: 3,
    component: <UserCommentComponent 
                  text={'Unique situated on the crater lake of Lake Barrine with lush tropical gardens, blooming flowers,Butterflys. There are two gigantic Kauri trees nearby.The House Looks classical though it‘s rebuild after a fire. Very nice ambiente inside. You can sit inside or on a Balkon overlooking the lake. The staff is very friendly and helpful. The menu is a typical lunch menu because the restaurant is only open at lunchtime.The quality of Food is excellent, the coffee as well. The prices are moderate. We were very satified with our visit.'}
                  src={imgUserMan} 
                  userName={"Achim"}
                  defaultValue={5.0}
                  colorStar='#8DA260'
    />
  }
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '0px',
  className: 'slider_container',
};

const RatingSlider = () => {
  return (
    <div className='rating_slider_container'>
      <div className='background-container'>
        <div className='background-image-left-rating-slider'>
          <img src={leftBackground} alt="Left Background" />
        </div>
        <div className='background-image-right-rating-slider'>
          <img src={rightBackgound} alt="Right Background" />
        </div>
        <div className='background-image-top-rating-slider'>
          <img src={topBackground} alt="Top Background" />
        </div>
        <div className='background-image-bottom-rating-slider'>
          <img src={bottomBackground} alt="Bottom Background" />
        </div>
      </div>

      <div style={{ width: '80%', margin: '10%' }}>
        <Slider {...settings}>
          {testimonialData.map(item => (
            <div key={item.id}>
              {item.component}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RatingSlider;  