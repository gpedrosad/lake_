import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';

const FeatureSection = ({ title, description, buttonText, borderRadius, bgcolorbutton, images }) => {
  return (
    <>
      <div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center pt-16">
        
        <div className="w-11/12 p-1 sm:w-2/3 md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-8">
          <ImageCarousel images={images} rounded='3xl' />
        </div>
        
        <div className="items-center justify-items-center px-10 py-5 md:mb-20">
          <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
            {title}
          </h1>
          <p className="text-justify text-xl text-custom-green xs:m-5">
            {description}
          </p>
        </div>

      </div>
      <div className="bg-[#F7F7F7] flex justify-center pb-10">
        <a href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" target="_blank">
        <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolorbutton} />
        </a>
      </div>
    </>
  );
};

export default FeatureSection;

