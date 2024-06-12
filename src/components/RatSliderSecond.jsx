import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from './user_comment/UserComment';

const testimonialData = [
  {
    id: 1,
    component: <UserCommentComponent />
  },
  {
    id: 2,
    component: <UserCommentComponent />
  },
  {
    id: 3,
    component: <UserCommentComponent />
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
    <div className='w-full h-full py-10 bg-gray-100 relative overflow-hidden bg-double-image'>
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
