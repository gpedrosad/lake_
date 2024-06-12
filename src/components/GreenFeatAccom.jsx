import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';

const GreenFeatureAccom = ({ title, description, buttonText, borderRadius, bgcolorbutton, images }) => {
  return (
    <div className='pb-8 bg-[#B8CAA8] pt-8'>
      <div className='justify-center flex bg-[#B8CAA8]'>
        <h1 className="bg-[#B8CAA8] text-center whitespace-nowrap font-rufina pb-0 mb-1 mt-6 font-bold text-third-green text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
          {title}
        </h1>
      </div>
      <div className="bg-[#B8CAA8] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center">
        <div className="items-center justify-items-center px-10 py-5">
          <div>
            <p className="text-justify text-custom-green line-clamp-13">
              {description}
            </p>
          </div>
          <div className="bg-[#B8CAA8] flex justify-center pb-10 pt-8 hidden md:flex">
            <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolorbutton} />
          </div>
        </div>
        <div className="w-2/3 p-1 sm:w-full md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-2 flex justify-center">
          <ImageCarousel images={images} rounded='none'/>
        </div>
        <div className="w-full flex justify-center md:hidden">
          <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolorbutton} />
        </div>
      </div>
    </div>
  );
};

export default GreenFeatureAccom;

