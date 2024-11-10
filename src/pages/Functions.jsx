import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from "../components/SecondHeroSection";
import FeatureSection from "../components/FeatureSection";
import GreenFeatureSection from "../components/GreenFeatureSection";
import RatingSliderSecond from "../components/RatSliderSecond";
import BookingForm from '../components/BookingForm';

// Importar imágenes
import imgHeroSection from '/public/images/functionsbanner.jpg';
import tres1 from  '/public/images/tres1.jpg';
import tres2 from  '/public/images/tres2.jpg';
import fun1 from     '/public/images/fun1.jpg';
import fun2 from     '/public/images/fun2.jpg';
import sail1 from     '/public/images/sail1.jpg';
import sail2 from     '/public/images/sail2.jpg';
import sail3 from     '/public/images/sail3.jpg';
import sail4 from     '/public/images/sail4.jpg';
import tres3 from     '/public/images/tres3.jpg';


const imagesFirstSlider = [sail1, sail2, sail3, sail4];
const imagesSecondSlider = [fun1, fun2];
const imagesThirdSlider = [tres1, tres2,tres3];

function Functions() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div>
            <Helmet>
                <title>Lake Barrine Functions - Elegant Events by the Lake</title>
                <meta name="description" content="Host your next function at Lake Barrine with unforgettable boat cruises, breakfasts in the teahouse, and lush forest accommodations, perfect for any special occasion." />
                <meta name="keywords" content="Lake Barrine functions, Lake Barrine events, boat cruise, teahouse, breakfast, accommodation, forest, restaurant, Lake Barrine" />
                <meta property="og:title" content="Lake Barrine Functions - Elegant Events by the Lake" />
                <meta property="og:description" content="Discover the perfect venue for weddings, corporate events, and private functions at Lake Barrine, featuring unique boat cruises and charming teahouse gatherings." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="URL_TO_AN_IMAGE_OF_LAKE_BARRINE_EVENT" />
                <meta property="og:url" content="lakebarrine.com.au/functions" />
            </Helmet>
            <HeroSection
                imageSrc={imgHeroSection}
                title="Functions"
            />
            <FeatureSection
                title="Sail into Celebration"
                description="Set against the backdrop of a century old rainforest, with the tranquil waters reflecting the
                hues of the sky, each moment on our boat is crafted to be memorable. Let us turn your
                event into an occasion that not only stands out but remains etched in the hearts of all who
                attend."
                buttonText='Get Quote'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesFirstSlider}
                href="/getquote"
            />
            <GreenFeatureSection
                title="The Teahouse at Lake Barrine"
                description="Step into a century of tradition and timeless charm by booking your special event at the
                Teahouse. Nestled on the edge of our tranquil lake, and surrounded by beautiful gardens,
                our historic venue offers a unique setting for celebrations of all kinds. Its warm atmosphere
                mixed with the heart of its staff promote a feeling of joy and togetherness."
                buttonText='Get Quote'
                borderRadius='0px'
                bgcolor='#F0B92B'
                images={imagesSecondSlider}
                href="/getquote"
            />
            <FeatureSection
                title="Create your own Event"
                description="Would you like to incorporate our historic Teahouse, Boat and beautiful gardens all in one?
                Create your own perfect evening in one of the most enchanting settings. Whether you&#39;re
                drawn to the natural serenity of the Lake, the beauty of our gardens, or the historical allure
                of the Teahouse, we are here to create an event that seamlessly blends your personal style
                with the captivating essence of this extraordinary venue."
                buttonText='Get Quote'
                borderRadius='0px'
                bgcolorbutton='#3C5220'
                images={imagesThirdSlider}
                href="/getquote"
            />
            <RatingSliderSecond />
            {/*<BookingForm/>*/}


            
            
        </div>
    );
}

export default Functions;