import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentComponent from './user_comment/UserComment';

const testimonialData = [
  {
    id: 1,
    component: <UserCommentComponent 
                  text={'Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos. Libero suscipit unde. Labore cumque voluptatum accusamus fugiat qui voluptates corporis dignissimos.'}
                  src={'src/assets/images/user-mindy-monahan.png'} 
                  userName={"Mindy Monahan"}
                  defaultValue={4.5}
                  colorName="white"
                  colorRating="white"
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
                  colorName="white"
                  colorRating="white"
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
                  colorName="white"
                  colorRating="white"
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
