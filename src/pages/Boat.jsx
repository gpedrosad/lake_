import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";

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
    return (
        <div>
            <HeroSection
                imageSrc={imgHeroSection}
                title="The waters of Lake Barrine"
            />

            <FeatureSection
                title="The family cruise"
                description="“Mother Nature’s simple reflections can be missed as we fly through life, but her healing charms can be caught in the eyes of those who take the time to study her natural rhythms” – Steve Curry"
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />    

            <GreenFeatureSection
                title="Our Cruise"
                description="Our cruise is about taking the time to experience natures beauty in one of its most tranquil forms. My Great Grandfather George Curry always said, “You haven’t truly experienced the Lake until you’ve done the boat cruise.”

                Step on board and see what truly inspired the very beginning of Lake Barrine Teahouses rich history."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
            />
            
            <FeatureSection
                title="Sail into Celebration"
                description="Set against the backdrop of a hundred year old rainforest, with the tranquil waters reflecting the hues of the sky, each moment on our boat is crafted to be memorable. Let us turn your event into an occasion that not only stands out but remains etched in the hearts of all who attend."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesThirdSlider}
            />
        
            <RatingSliderSecond />
        </div>
    );
}

export default Boat;