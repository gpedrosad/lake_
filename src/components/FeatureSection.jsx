import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';
import hojaizq from '/public/images/hojaizq.png';
import hojader from '/public/images/hojader.png';

const FeatureSection = ({ title, description, buttonText, borderRadius, bgcolorbutton, images, href }) => {
  return (
    <div className="relative bg-[#F7F7F7] pt-8 pb-8">
      <img src={hojaizq} alt="Hoja izquierda" className="absolute top-0 left-0 w-16 h-auto" />
      <img src={hojader} alt="Hoja derecha" className="absolute bottom-0 right-0 w-16 h-auto" />
      <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-2xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1 xl:text-4xl">
        {title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center">
        <div className="w-11/12 p-1 sm:w-2/3 md:w-full md:p-0 lg:p-0 xl:py-0 lg:w-full xl:w-full 2xl:w-full mx-auto pt-8">
          <ImageCarousel images={images} rounded='3xl' />
        </div>
        
        <div className="flex flex-col items-center justify-center px-10 py-5 md:mb-20">
          <p className="text-justify text-xl text-custom-green xl:text-2xl">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-10">
        <a href={href}>
          <ButtonComponent text={buttonText} borderRadius={borderRadius} backgroundColor={bgcolorbutton} />
        </a>
      </div>
    </div>
  );
};

export default FeatureSection;