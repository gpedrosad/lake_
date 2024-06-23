import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";

// Importar imágenes
import imgHeroSection from '../../public/images/9f7924f7dae4639228a8cff9899d74a5.png';
import sliderCopas from '../../public/images/slider-copas.png';
import cardImage1 from '../../public/images/card-image-1.png';
import cardImage3 from '../../public/images/card-image3.png';
import sliderGreen from '../../public/images/slider-green.png';
import sliderWedding from '../../public/images/slider-wedding.png';

const imagesFirstSlider = [
    sliderCopas,
    cardImage1,
    cardImage3,
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
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />    

            <GreenFeatureSection
                title="A function like no other"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
            />
            
            <FeatureSection
                title="Create your own package"
                description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
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