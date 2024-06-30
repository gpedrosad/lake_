import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';

const FeatureAccom = ({ title, description, buttonText, borderRadius, bgcolorbutton, images }) => {
  return (
    <div  className='pb-8 bg-[#F7F7F7] pt-8'>
      <div className='justify-center flex bg-[#F7F7F7]'>
        <h1 className="bg-[#F7F7F7] text-center whitespace-nowrap font-rufina pb-0 mb-1 mt-6 font-bold text-third-green text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
          {title}
        </h1>
      </div>
      <div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center  ">
        <div className="w-2/3 p-1 sm:w-full md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-2 flex justify-center ">
          <div className='w-full'>
            <ImageCarousel images={images} rounded='none'/>
          </div>
        </div>
        <div className="items-center justify-items-center px-10 py-5 ">
            <div className=''>
            <p className="text-justify text-custom-green line-clamp-13">
            {description}
          </p>

            </div>

          <div className="bg-[#F7F7F7] flex justify-center pb-10 pt-8">
            <a href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" target="_blank">
            <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolorbutton} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureAccom;
