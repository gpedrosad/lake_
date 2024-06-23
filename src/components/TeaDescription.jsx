import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';

// Img
import teaPhoto from '/public/images/TeaPhoto.png';

const TeaDescription = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center pt-16">
        
        <img src={teaPhoto} alt="foto" className="w-3/4 md:w-full" />
        
        <div className="items-center px-10 py-5 md:mb-20">
          <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1">
            Restaurant
          </h1>
          <p className="text-center text-xl text-custom-green">
          Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.
          </p>
        </div>

      </div>

    </>
  );
};

export default TeaDescription;

