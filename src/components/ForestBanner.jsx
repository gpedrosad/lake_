import YellowButton from './YellowButton';
import arboles from '/public/images/walk.jpg'
import hojablanca1 from '/public/images/hojablanca.png'
import hojablanca2 from '/public/images/hojablanca2.png'
import { Link } from 'react-router-dom';

const ForestBanner = () => {
  return (
    <div className="relative overflow-hidden shadow-lg w-auto h-[700px] sm:h-[600px]">
      <img className="absolute inset-0 w-full h-full object-cover object-right-bottom" src={arboles} alt="Árboles" />
      <div className="absolute inset-0 bg-custom-green opacity-50"></div>
      <div className="absolute inset-0 grid place-items-center z-10 p-6 md:flex md:items-center md:justify-center">
        <img src={hojablanca1} alt="Descripción de la imagen" style={{ width: '60px', height: '60px' }} className="m-5 md:mb-40 xl:mb-48 2xl:mb-40"/>
        <h1 className="text-white md:text-5xl sm:text-4xl font-rufina font-bold text-center mt-14 xl:mt-4 xs:text-4xl">
          Explore the rainforest in our walk of 5 km around the lake
        <Link to='/accomodation'>
        <div className="flex justify-center pt-20">
          <YellowButton text="Explore"/>
        </div>
        </Link>
        </h1>
        <img src={hojablanca2} alt="Descripción de la imagen" style={{ width: '50px', height: '50px' }} className="m-5 md:mb-40 xl:mb-48 2xl:mb-36"/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ForestBanner;