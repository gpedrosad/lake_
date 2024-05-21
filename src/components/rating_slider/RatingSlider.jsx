import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from '../user_comment/UserComment';
import './RatingSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
 
const RatingSlider = () => {
  return (
    <div className='rating_slider_container'>
            <div style={{ width: '80%', margin: '0 auto' }}>
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
