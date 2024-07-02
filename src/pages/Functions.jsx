import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";
import { useEffect } from "react";
// Importar imágenes
import imgHeroSection from '/public/images/boat.jpg';
import sliderCopas from    '/public/images/family-cruise.jpg';
import cardImage1 from     '/public/images/boat1.jpg';
import cardImage3 from     '/public/images/boat2.jpg';
import sliderGreen from    '/public/images/boat3.jpg';
import sliderWedding from  '/public/images/boat4.jpg';

import fun1 from     '/public/images/function1.jpg';
import fun2 from     '/public/images/function2.jpg';
import fun3 from     '/public/images/function3.jpg';

import functions1 from     '/public/images/functions1.jpg';
import functions2 from     '/public/images/functions2.jpg';
import functions3 from     '/public/images/functions3.jpg';
import functions4 from     '/public/images/functions4.jpg';



const imagesFirstSlider = [
    functions1,
    functions2,
    functions3,
    functions4
];

const imagesSecondSlider = [
    fun1,
    fun2,
    fun3,
];

const imagesThirdSlider = [
    sliderWedding,
    cardImage1,
    cardImage3,
];

function Functions() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    return (
        <div>
            <HeroSection
                imageSrc={imgHeroSection}
                title="Functions"
            />

            <FeatureSection
                title="The family cruise"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. "
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />    

            <GreenFeatureSection
                title="A function like no other"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
            />
            
            <FeatureSection
                title="Create your own package"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. "
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesThirdSlider}
            />
        
            <RatingSliderSecond />
        </div>
    );
}

export default Functions;