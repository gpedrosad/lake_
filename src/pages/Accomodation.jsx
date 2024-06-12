import GreenButton from "../components/GreenButton";
import HeroSection from "../components/SecondHeroSection";
import RatingSlider from "../components/rating_slider/RatingSlider";
import FeatureAccom from "../components/FeatureAccom";
import GreenFeatureAccom from "../components/GreenFeatAccom";
const images_first_slider = [
    'src/assets/images/slider-copas.png',
    'src/assets/images/slider-green.png',
    'src/assets/images/card-image-1.png',
    'src/assets/images/slider-wedding.png',
    'src/assets/images/card-image3.png',

];

function Accomodation() {
    return (
        <div>
            <HeroSection
                imageSrc="src/assets/images/30ef8a84f0f4e51616f759e50c285eff.png"
                title="Experience the tranquility"
            />

            <FeatureAccom
            title="The lakeside studio"
            description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
            buttonText='Book Now'
            borderRadius='0px'
            bgcolorbutton='#273812'
            images={images_first_slider}
            />    


            <div class="bg-[#F7F7F7]">
                <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
            </div>

            <GreenFeatureAccom
                    title="The Cottage"
                    description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
                    buttonText='Book Now'
                    borderRadius='0px'
                    bgcolorbutton='#3C5220'
                    images={images_first_slider}
            
            />

            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <FeatureAccom
            title="For the family"
            description="Our story is one of passion and refinement, where each dish is a carefully curated masterpiece. Elegance graces every detail, inviting you into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight.into a world where exquisite flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight. flavors and sophisticated ambiance harmonize, creating an unforgettable dining experience. Welcome to the epitome of gastronomic delight."
            buttonText='Book Now'
            borderRadius='0px'
            bgcolorbutton='#8DA260'
            images={images_first_slider}
            />    

            <div class="bg-[#F7F7F7]">
            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            </div>

            <RatingSlider />

        </div>
    )
}

export default Accomodation;