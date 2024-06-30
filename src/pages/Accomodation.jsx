// import GreenButton from "../components/GreenButton";
import HeroSection from "../components/SecondHeroSection";
import RatingSlider from "../components/rating_slider/RatingSlider";
import FeatureAccom from "../components/FeatureAccom";
import GreenFeatureAccom from "../components/GreenFeatAccom";
import { useEffect } from "react";
//img
import imgHeroSection from '/public/images/30ef8a84f0f4e51616f759e50c285eff.png';
import sliderCopas from '/public/images/slider-copas.png';
import sliderGreen from '/public/images/slider-green.png';
import cardImage1 from '/public/images/card-image-1.png';
import sliderWedding from '/public/images/slider-wedding.png';
import cardImage3 from '/public/images/card-image3.png';

const imagesFirstSlider = [
    sliderCopas,
    sliderGreen,
    cardImage1,
    sliderWedding,
    cardImage3,
];

function Accomodation() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    return (
        <div>
            <HeroSection
                imageSrc={imgHeroSection}
                title="Experience the tranquility"
            />

            <FeatureAccom
                title="The lakeside studio"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#273812'
                images={imagesFirstSlider}
            />    

            <div className="bg-[#F7F7F7]">
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
            </div>

            <GreenFeatureAccom
                title="The Cottage"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />

            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <FeatureAccom
                title="For the family"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#8DA260'
                images={imagesFirstSlider}
            />    

            <div className="bg-[#F7F7F7]">
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
            </div>

            <RatingSlider />
        </div>
    );
}

export default Accomodation;
