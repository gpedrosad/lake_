import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";
import QuoteSection from "../components/QuoteSection";

// Importar imágenes
import imgHeroSection from '/public/images/boat_banner.jpg';
import sliderCopas from '/public/images/family-cruise.jpg';
import cardImage1 from '/public/images/boat1.jpg';
import cardImage3 from '/public/images/boat2.jpg';
import sliderGreen from '/public/images/boat3.jpg';
import sliderWedding from '/public/images/boat4.jpg';

import bote1 from '/public/images/barco1.jpg';
import bote2 from '/public/images/barco2.jpg';
import bote3 from '/public/images/barco3.jpg';

const imagesFirstSlider = [bote1, bote2, bote3];
const imagesSecondSlider = [sliderGreen, cardImage1, cardImage3];
const imagesThirdSlider = [sliderWedding, cardImage1, cardImage3];

function Boat() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div class="bg-[#F7F7F7]">
            <Helmet>
                <title>Explore Boat Cruises at Lake Barrine - Book Your Adventure Today!</title>
                <meta name="description" content="Join us for a serene boat cruise at Lake Barrine. Experience the beauty of nature with our guided tours, perfect for family gatherings and special events. Book your cruise now!" />
                <meta name="keywords" content="Lake Barrine boat cruise, serene boat tours, Lake Barrine adventure, family boat cruise, Lake Barrine nature tours" />
            </Helmet>
            <HeroSection
                imageSrc={imgHeroSection}
                title="Boat Cruise"
            />

            <FeatureSection
                title="Lake Cruises"
                description="Our cruise is about taking the time to experience nature's beauty in one of its most tranquil forms. My Great Grandfather George Curry always said, “You haven’t truly experienced the Lake until you’ve done the boat cruise.” Step on board and see what truly inspired the very beginning of Lake Barrine Teahouses rich history."
                buttonText='Book Now'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
                href="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow"
            />
            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <GreenFeatureSection
                title="Sail into Celebration"
                description="Set against the backdrop of a hundred-year-old rainforest, with the tranquil waters reflecting the hues of the sky, each moment on our boat is crafted to be memorable. Let us turn your event into an occasion that not only stands out but remains etched in the hearts of all who attend."
                buttonText='Get Quote'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
                href="/getquote"
            />
            <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

            <QuoteSection quote='“Mother Nature’s simple reflections can be missed as we fly through life, but her healing charms can be caught in the eyes of those who take the time to study her natural rhythms“' author=" – Steve Curry"/>

            <RatingSliderSecond />
        </div>
    );
}

export default Boat;