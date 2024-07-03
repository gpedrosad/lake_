import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";
import { useEffect } from "react";
import QuoteSection from "../components/QuoteSection";

// Importar imágenes
import imgHeroSection from '/public/images/boat.jpg';
import sliderCopas from    '/public/images/family-cruise.jpg';
import cardImage1 from     '/public/images/boat1.jpg';
import cardImage3 from     '/public/images/boat2.jpg';
import sliderGreen from    '/public/images/boat3.jpg';
import sliderWedding from  '/public/images/boat4.jpg';

const imagesFirstSlider = [
    sliderCopas,
];

const imagesSecondSlider = [
    sliderGreen,
    cardImage1,
    cardImage3,
];

const imagesThirdSlider = [
    sliderWedding,
    cardImage1,
    cardImage3,
];

function Boat() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    return (
        <div class="bg-[#F7F7F7]">
            <HeroSection
                imageSrc={imgHeroSection}
                title="Boat Cruise"
            />

            <FeatureSection
                title="Lake Cruises"
                description="Step on board and experience the chance to see Lake Barrine’s native fauna and flora! Such as emerald pythons, water dragons, turtles, birds, eels, and much more! An interactive cruise, filled with fun facts, laughter, and a time to experience nature's beauty in one of its most tranquil forms.

                George Curry the founder of Lake Barrine Teahouse always said, “You haven’t truly experienced the Lake until you’ve done the boat cruise.” Come on board and see what truly inspired the very beginning of Lake Barrine Teahouse's rich history. "
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesThirdSlider}
            />
                        <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <GreenFeatureSection
                title="Our Cruise"
                description="Our cruise is about taking the time to experience natures beauty in one of its most tranquil forms. My Great Grandfather George Curry always said, “You haven’t truly experienced the Lake until you’ve done the boat cruise.”

                Step on board and see what truly inspired the very beginning of Lake Barrine Teahouses rich history."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
            />
            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>


        <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
            <QuoteSection quote='“Mother Nature’s simple reflections can be missed as we fly through life, but her healing charms can be caught in the eyes of those who take the time to study her natural rhythms“' author=" – Steve Curry"/>

            
        
            <RatingSliderSecond />
        </div>
    );
}

export default Boat;