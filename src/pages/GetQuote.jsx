import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBanner from "../components/HeroBanner";
import CardSlider from "../components/card_slider/CardSlider";
import RatingSlider from "../components/rating_slider/RatingSlider";
import imgHeroSection from '/public/images/boat.jpg';
import HeroSection from '../components/SecondHeroSection';
import BookingForm from '../components/BookingForm';

function GetQuote() {
    return(
        <div className="w-full">
            <Helmet>
                <title>Lake Barrine: Teahouse, Boat Cruises & Forest Retreats</title>
                <meta name="description" content="Discover Lake Barrine's charming teahouse, serene boat cruises, and forest accommodations. Enjoy breakfast at our lake-view restaurant and explore exclusive functions." />
                <meta name="keywords" content="Lake Barrine, Teahouse, Boat Cruise, Accommodation, Restaurant, Forest, Breakfast, Functions" />
                <meta property="og:title" content="Lake Barrine: Teahouse, Boat Cruises & Forest Retreats" />
                <meta property="og:description" content="Explore the natural beauty of Lake Barrine with our boat cruises, teahouse delights, and forest accommodations. Perfect for any occasion from a peaceful breakfast to special functions." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="URL_TO_AN_IMAGE_OF_LAKE_BARRINE" />
                <meta property="og:url" content="lakebarrine.com.au" />
            </Helmet>
            <HeroSection
                imageSrc={imgHeroSection}
                title="Get Quote"
            />
            <BookingForm/>
            <RatingSlider/>

        </div>
    )
}

export default GetQuote;