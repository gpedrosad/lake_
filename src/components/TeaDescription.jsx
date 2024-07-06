import ButtonComponent from './ButtonComponent';
import ImageCarousel from './ImageCarrousel';
import hojaizq from '/public/images/hojaizq.svg';
import hojader from '/public/images/hojader.svg';


// Img
import teaPhoto from '/public/images/TeaPhoto.png';

const TeaDescription = () => {
  return (
    <>
      <div className="relative bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 p-4 justify-items-center items-center pt-16">
      <img src={hojaizq} alt="Hoja izquierda" className="absolute top-0 left-0 w-16 h-auto" />
      <img src={hojader} alt="Hoja derecha" className="absolute bottom-0 right-0 w-16 h-auto" />
        <img src={teaPhoto} alt="foto" className="w-full md:w-full h-5/6 lg:h-4/6 object-contain" />
        
        <div className="items-center px-10 py-5 md:mb-20">
  <h1 className="text-center whitespace-nowrap font-rufina pb-3 mb-1 mt-6 font-bold text-third-green text-3xl sm:text-3xl md:text-3xl lg:text-4xl md:pb-5 md:pt-10 sm:pb-3 sm:pt-11 sm:mb-1 xl:text-5xl">
    Restaurant
  </h1>
  <div className="space-y-6">
    
    
    <p className="text-center text-xl text-custom-green xl:text-xl">
      After my Great Grandfather was killed during WWII, my Great Grandma Margaret Curry put her two boys in the car and drove from Brisbane back to Lake Barrine. As they sat in the car looking at the lake, which was quite run down after the war, she said to her sons, “Well, let us put on a Sunday Roast and see what happens.” Now, here we are.
    </p>
    
    <p className="text-center text-xl text-custom-green xl:text-xl">
      Our restaurant experience is centered around home-cooked meals bursting with full flavors. Each dish is crafted with care, ensuring every bite is a delicious journey. Our dedicated staff is committed to providing exceptional service and welcoming you with warmth.
    </p>
    
    <p className="text-center text-xl text-custom-green xl:text-xl">
      Whether you're craving familiar favorites or eager to explore new flavors, our restaurant promises a delightful combination of homemade goodness, vibrant tastes, and a team that is here to make every visit enjoyable.
    </p>
  </div>
</div>

      </div>

    </>
  );
};

export default TeaDescription;

