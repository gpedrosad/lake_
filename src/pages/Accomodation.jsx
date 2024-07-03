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
                title="Accommodation"
            />

            <FeatureAccom
                title="Lakeside Studio"
                description="Nestled right beside the water's edge is our cosy studio apartment. Walk out your front door and straight onto the grass lawn where you can sit and watch time go by with the setting of the sun across Lake Barrine’s tranquil waters. Bring your kayaks and hiking boots to make the most of this beautiful setting."
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
                description="Perfect for couples looking to get away and relax in each other's company. This beautiful historic cottage sits up high with views across the lake. Wake up to the perfect sunrise cresting the horizon right outside your window while listening to the sound of the rainforest.  With timber floors, high ceilings, and the perfect corner window you will feel like you’re stepping back in time into the perfect little oasis."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
            />

            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <FeatureAccom
                title="For the family"
                description="Book your own private family home surrounded by beautiful gardens and a personal view of the Lake. Freshly Renovated this big home is perfect for families looking to come together and share time in a fun setting that promotes laughter, play, and outdoor activities!"
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
