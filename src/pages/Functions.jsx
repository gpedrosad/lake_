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
                title="Create your own Event"
                description="Would you like to incorporate our historic Teahouse, Boat and beautiful gardens all in one?
                Create your own perfect evening in one of the most enchanting settings. Whether you&#39;re
                drawn to the natural serenity of the Lake, the beauty of our gardens, or the historical allure
                of the Teahouse, we are here to create an event that seamlessly blends your personal style
                with the captivating essence of this extraordinary venue."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />    

            <GreenFeatureSection
                title="Sail into Celebration"
                description="Set against the backdrop of a century old rainforest, with the tranquil waters reflecting the
                hues of the sky, each moment on our boat is crafted to be memorable. Let us turn your
                
                event into an occasion that not only stands out but remains etched in the hearts of all who
                attend."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
            />
            
            <FeatureSection
                title="The Teahouse at Lake Barrine"
                description="Step into a century of tradition and timeless charm by booking your special event at the
                Teahouse. Nestled on the edge of our tranquil lake, and surrounded by beautiful gardens,
                our historic venue offers a unique setting for celebrations of all kinds. Its warm atmosphere
                mixed with the heart of its staff promote a feeling of joy and togetherness."
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