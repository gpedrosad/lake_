import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from '../user_comment/UserComment';
import './RatingSlider.css';

const testimonialData = [
  {
    id: 1,
    component: <UserCommentComponent 
                  text={'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.'}
                  src={'src/assets/images/user-mindy-monahan.png'} 
                  userName={"Mindy Monahan"}
                  defaultValue={4.5}
                  colorStar='#8DA260'
                  />
  },
  {
    id: 2,
    component: <UserCommentComponent 
                  text={'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.'}
                  src={'src/assets/images/pexels-olly-733872.jpg'} 
                  userName={"Mary Williams"}
                  defaultValue={5.0}
                  colorStar='#8DA260'
    />
  },
  {
    id: 3,
    component: <UserCommentComponent 
                  text={'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.'}
                  src={'src/assets/images/man-299488_1280.jpg'} 
                  userName={"Logan Pazcual"}
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
          <img src="src/assets/images/Group left 399.png" alt="Left Background" />
        </div>
        <div className='background-image-right-rating-slider'>
          <img src="src/assets/images/Group right 398.png" alt="Right Background" />
        </div>
        <div className='background-image-top-rating-slider'>
          <img src="src/assets/images/Group 399.png" alt="Top Background" />
        </div>
        <div className='background-image-bottom-rating-slider'>
          <img src="src/assets/images/Group 398.png" alt="Bottom Background" />
        </div>
      </div>

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
