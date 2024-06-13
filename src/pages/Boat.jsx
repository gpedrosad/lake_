import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";

const images_first_slider = [
    'src/assets/images/slider-copas.png',
    'src/assets/images/card-image-1.png',
    'src/assets/images/card-image3.png',

];

const images_second_slider = [
    'src/assets/images/slider-green.png',
    'src/assets/images/card-image-1.png',
    'src/assets/images/card-image3.png',
]

const images_third_slider = [
    'src/assets/images/slider-wedding.png',
    'src/assets/images/card-image-1.png',
    'src/assets/images/card-image3.png',
]
function Boat() {
    return(

        <div>
            <HeroSection
            imageSrc="src/assets/images/9f7924f7dae4639228a8cff9899d74a5.png"
            title="The waters of Lake Barrine"
            />

            <FeatureSection
            title="The family cruise"
            description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
            buttonText='Book Now'
            borderRadius='0px'
            bgcolorbutton='#3C5220'
            images={images_first_slider}
            />    

            <GreenFeatureSection
                        title="A function like no other"
                        description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                        buttonText='Book Now'
                        borderRadius='0px'
                        bgcolor='#F0B92B'
                        images={images_second_slider}
                        />
            
            <FeatureSection
            title="Create your own package"
            description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
            buttonText='Book Now'
            borderRadius='0px'
            bgcolorbutton='#3C5220'
            images={images_third_slider}
            />
        
            <RatingSliderSecond/>
        </div>
    )
}

export default Boat; 