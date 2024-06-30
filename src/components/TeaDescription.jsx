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
  <div className="space-y-6">
    <p className="text-center text-xl text-custom-green">
      When we were closed down during Covid, we learned that gathering with friends and family over a cooked meal and sharing time wasn’t a luxury, but a necessity.
    </p>
    
    <p className="text-center text-xl text-custom-green">
      After my Great Grandfather was killed during WWII, my Great Grandma Margaret Curry put her two boys in the car and drove from Brisbane back to Lake Barrine. As they sat in the car looking at the lake, which was quite run down after the war, she said to her sons, “Well, let us put on a Sunday Roast and see what happens.” Now, here we are.
    </p>
    
    <p className="text-center text-xl text-custom-green">
      Our restaurant experience is centered around home-cooked meals bursting with full flavors. Each dish is crafted with care, ensuring every bite is a delicious journey. Our dedicated staff is committed to providing exceptional service and welcoming you with warmth.
    </p>
    
    <p className="text-center text-xl text-custom-green">
      Whether you're craving familiar favorites or eager to explore new flavors, our restaurant promises a delightful combination of homemade goodness, vibrant tastes, and a team that is here to make every visit enjoyable.
    </p>
  </div>
</div>

      </div>

    </>
  );
};

export default TeaDescription;

