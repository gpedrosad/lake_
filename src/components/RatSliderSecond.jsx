import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from './user_comment/UserComment';
//img
import imgUserMindy from '/public/images/user-mindy-monahan.png'
import imgUserMary from '/public/images/pexels-olly-733872.jpg'
import imgUserMan from '/public/images/man-299488_1280.jpg'

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
                  text={'Unique situated on the crater lake of Lake Barrine with lush tropical gardens, blooming flowers,Butterflys. There are two gigantic Kauri trees nearby.The House Looks classical though it‘s rebuild after a fire. Very nice ambiente inside. You can sit inside or on a Balkon overlooking the lake. The staff is very friendly and helpful. The prices are moderate. We were very satified with our visit.'}
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

const RatingSliderSecond = () => {
  return (
    <div className='w-full h-full text-white bg-gray-100 relative overflow-hidden bg-double-image'>
        <div style={{ width: '80%', margin: '0 auto' }}>
        <Slider   Slider {...settings}>
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

export default RatingSliderSecond;